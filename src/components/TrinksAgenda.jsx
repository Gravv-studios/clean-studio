import React, { useState } from 'react';
import { ArrowUpRight, CalendarDays, RefreshCw, X } from 'lucide-react';
import { siteData } from '../data/siteData';

// Entrada de incorporação documentada pelo Trinks. Não inicia uma etapa interna
// sem a sessão do catálogo nem tenta repetir verificações de acesso automaticamente.
export default function TrinksAgenda({open,onOpen,onClose}) {
 const [revision,setRevision]=useState(0);
 const url=siteData.links.booking+'/framebusca';
 return <div className="trinks-agenda">
  {!open ? <div className="trinks-launch"><CalendarDays size={32}/><h4>Abra a agenda para escolher seu horário.</h4><p>Selecione o serviço, o profissional e uma data. Os horários são apresentados pelo próprio Trinks.</p><button type="button" className="button" onClick={onOpen}>Abrir agenda aqui <CalendarDays size={18}/></button></div> : <>
   <div className="trinks-toolbar"><span>Agenda oficial do Studio Clean</span><button type="button" onClick={onClose} aria-label="Fechar agenda"><X size={18}/></button></div>
   <iframe key={revision} src={url} title="Agenda oficial do Studio Clean — serviços, dias e horários" className="booking-frame service-agenda"/>
   <div className="trinks-recovery"><p><strong>Apareceu uma mensagem de verificação ou a agenda não abriu?</strong> Abra o Trinks em uma nova aba para continuar. Você também pode tentar recarregar a agenda uma vez.</p><button type="button" className="text-link" onClick={()=>setRevision(value=>value+1)}><RefreshCw size={15}/>Recarregar agenda</button></div>
  </>}
  <a className="text-link trinks-external" href={url} target="_blank" rel="noopener noreferrer">Reservar diretamente no Trinks <ArrowUpRight size={16}/></a>
  <p className="planner-note">A reserva só é concluída após a confirmação no Trinks.</p>
 </div>;
}
