import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { randomUUID } from 'node:crypto';
import { initialState, applyAction } from '../src/crm/model.js';

// Apenas o servidor de desenvolvimento do CRM registra esta API.
export function crmLocalApi(root){
 const directory=resolve(root,'.local-crm');mkdirSync(directory,{recursive:true});
 const db=new DatabaseSync(resolve(directory,'studio-clean.sqlite'));
 db.exec('PRAGMA journal_mode=WAL; CREATE TABLE IF NOT EXISTS state (id INTEGER PRIMARY KEY CHECK(id=1), data TEXT NOT NULL)');
 db.prepare('INSERT OR IGNORE INTO state(id,data) VALUES(1,?)').run(JSON.stringify(initialState()));
 const read=()=>JSON.parse(db.prepare('SELECT data FROM state WHERE id=1').get().data);
 return async(req,res,next)=>{
  if(!req.url?.startsWith('/api/crm/'))return next();
  res.setHeader('Content-Type','application/json; charset=utf-8');res.setHeader('Cache-Control','no-store');
  const respond=(code,value)=>{res.statusCode=code;res.end(JSON.stringify(value));};
  if(!['127.0.0.1:3001','localhost:3001'].includes(req.headers.host))return respond(403,{error:'CRM disponível apenas neste computador.'});
  if(req.method==='GET'&&req.url==='/api/crm/state')return respond(200,read());
  if(req.method==='GET'&&req.url==='/api/crm/backup'){res.setHeader('Content-Disposition','attachment; filename="studio-clean-backup.json"');return respond(200,read());}
  if(req.method!=='POST'||req.url!=='/api/crm/action')return respond(404,{error:'Operação não encontrada.'});
  if(!['http://127.0.0.1:3001','http://localhost:3001'].includes(req.headers.origin))return respond(403,{error:'Origem não autorizada.'});
  if(!req.headers['content-type']?.startsWith('application/json'))return respond(415,{error:'Formato inválido.'});
  try{let body='';for await(const chunk of req){body+=chunk;if(body.length>100000)throw new Error('Solicitação muito grande.');}const action=JSON.parse(body);const current=read();if(action.revision!==current.revision)return respond(409,{error:'Os dados mudaram em outra aba. A tela foi atualizada; confira e tente novamente.'});const result=applyAction(current,action,randomUUID);db.prepare('UPDATE state SET data=? WHERE id=1').run(JSON.stringify(result));respond(200,result);}catch(error){respond(400,{error:error.message||'Não foi possível salvar.'});}
 };
}
