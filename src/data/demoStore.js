export const STORAGE_KEY = 'studio-clean-demo-v1';
export const localDate = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export const demoServices = [
 {id:'corte',name:'Corte masculino',duration:30,professionals:['Gustavo','Matheus','Alan']},
 {id:'combo',name:'Cabelo e barba',duration:60,professionals:['Gustavo','Matheus','Alan']},
 {id:'podologia',name:'Podologia',duration:60,professionals:['Edilene']}
];
export const statuses = ['Solicitado','Confirmado','Concluído','Cancelado'];
export function availableSlots(records,date,professional,duration,excludeId,now=new Date()) {
 const day=new Date(`${date}T12:00:00`).getDay();
 if(!date || Number.isNaN(day) || day===0)return [];
 const close=day===6?19*60:20*60;
 return Array.from({length:22},(_,i)=>540+i*30).filter(start=>start+duration<=close).map(start=>`${String(Math.floor(start/60)).padStart(2,'0')}:${String(start%60).padStart(2,'0')}`).filter(time=>{
  if(new Date(`${date}T${time}:00`)<=now)return false;
  const start=Number(time.slice(0,2))*60+Number(time.slice(3));
  return !records.some(r=>r.id!==excludeId&&r.date===date&&r.professional===professional&&r.status!=='Cancelado'&&start<r.start+r.duration&&start+duration>r.start);
 });
}
export function seedData(){
 const date=new Date();date.setDate(date.getDate()+1);if(date.getDay()===0)date.setDate(date.getDate()+1);
 return {clients:[{id:'sample-1',name:'Cliente exemplo 01',phone:'',notes:'Prefere atendimentos pela manhã.'},{id:'sample-2',name:'Cliente exemplo 02',phone:'',notes:'Conheceu o studio pelo site.'}],appointments:[{id:'sample-a',clientId:'sample-1',serviceId:'corte',professional:'Gustavo',date:localDate(date),time:'10:00',start:600,duration:30,status:'Confirmado'},{id:'sample-b',clientId:'sample-2',serviceId:'podologia',professional:'Edilene',date:localDate(date),time:'14:00',start:840,duration:60,status:'Solicitado'}]};
}
