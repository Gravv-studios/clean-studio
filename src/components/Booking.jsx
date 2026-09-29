import React, { useEffect, useRef, useState } from 'react';
import { CalendarDays, MessageCircle, ArrowUpRight, Check, Phone } from 'lucide-react';
import TrinksAgenda from './TrinksAgenda';
import { professionals } from '../data/professionals';
import { bookingServices, receptionMessage } from '../data/bookingData';

const dateKey = date => [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');
export default function Booking({selection}) {
 const professionalsRef=useRef(null);
 const channelRef=useRef(null);
 const nextRef=useRef(null);
 const goToStep=ref=>{
  if(!window.matchMedia('(max-width: 900px)').matches)return;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
   const target=ref.current;
   if(!target)return;
   target.focus({preventScroll:true});
   target.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  }));
 };
 const chooseChannel=value=>{setChannel(value);goToStep(nextRef)};
 const [serviceId,setServiceId]=useState('corte');
 const [professional,setProfessional]=useState('');
 const [channel,setChannel]=useState('trinks');
 const [name,setName]=useState('');
 const [date,setDate]=useState('');
 const [time,setTime]=useState('');
 const [agendaOpen,setAgendaOpen]=useState(false);
 useEffect(()=>{if(selection){setServiceId(selection.serviceId);setProfessional(selection.professional || '');setChannel(selection.professional?'whatsapp':'trinks');setDate('');setTime('');}},[selection]);
 const service=bookingServices.find(item=>item.id===serviceId) || bookingServices[0];
 const today=new Date();
 const minDate=dateKey(today);
 const days=Array.from({length:7},(_,i)=>{const d=new Date(today.getFullYear(),today.getMonth(),today.getDate()+i);return {value:dateKey(d),label:i===0?'Hoje':i===1?'Amanhã':d.toLocaleDateString('pt-BR',{weekday:'short'}),number:d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})}});
 const message=receptionMessage({name,service,professional,date,time});
 const changeService=e=>{setServiceId(e.target.value);setProfessional('');setDate('');setTime('');goToStep(professionalsRef)};
 return <section id="agendar" className="booking-section booking-integrated"><div className="container">
  <div className="booking-intro"><div><p className="eyebrow"><span/>SEU PRÓXIMO MOMENTO</p><h2>Escolha o dia.<br/><em>Reserve seu horário.</em></h2></div><div><p>Consulte a agenda oficial do Trinks aqui no site. Escolha seu profissional, a data e o horário disponível para concluir o agendamento.</p></div></div>
  <div className="booking-planner">
   <div className="booking-options">
    <label className="planner-label" htmlFor="booking-service"><span>01</span> Qual cuidado você procura?</label>
    <select id="booking-service" value={serviceId} onChange={changeService}>{['Barbearia','Beleza & estética','Cuidado dos pés','Outros'].map(category=><optgroup key={category} label={category}>{bookingServices.filter(s=>s.category===category).map(s=><option value={s.id} key={s.id}>{s.name}</option>)}</optgroup>)}</select>
    <fieldset className="booking-professionals booking-step-target" ref={professionalsRef} tabIndex={-1}><legend className="planner-label"><span>02</span> Quem você prefere?</legend><div className="professional-choices">
     {professionals.filter(person=>service.professionals.includes(person.name)).map(person=><label key={person.name} className={professional===person.name?'professional-choice selected':'professional-choice'}><input type="radio" name="professional-preference" value={person.name} checked={professional===person.name} onChange={()=>setProfessional(person.name)} onClick={()=>goToStep(channelRef)}/><img src={person.photo} alt="" width="48" height="48"/><span><strong>{person.name}</strong><small>{person.role}</small></span></label>)}
     <label className={!professional?'professional-choice selected':'professional-choice'}><input type="radio" name="professional-preference" value="" checked={!professional} onChange={()=>setProfessional('')} onClick={()=>goToStep(channelRef)}/><span><strong>Sem preferência</strong><small>A recepção pode me orientar</small></span></label>
    </div><p className="professional-help">{service.professionals.length?'A escolha acompanha sua mensagem no WhatsApp. Na agenda do Trinks, selecione o profissional novamente.':'A recepção indica o profissional adequado para este serviço.'}</p></fieldset>
    <fieldset className="channel-options booking-step-target" ref={channelRef} tabIndex={-1}><legend className="planner-label"><span>03</span> Como prefere continuar?</legend><label className={channel==='trinks'?'channel-choice selected':'channel-choice'}><input type="radio" name="booking-channel" value="trinks" checked={channel==='trinks'} onChange={()=>setChannel('trinks')} onClick={()=>chooseChannel('trinks')}/><CalendarDays size={23}/><span><strong>Reservar pelo Trinks</strong><small>Dia e horário na agenda oficial</small></span></label><label className={channel==='whatsapp'?'channel-choice selected':'channel-choice'}><input type="radio" name="booking-channel" value="whatsapp" checked={channel==='whatsapp'} onChange={()=>setChannel('whatsapp')} onClick={()=>chooseChannel('whatsapp')}/><MessageCircle size={23}/><span><strong>Pedir ajuda à recepção</strong><small>Informe o dia e a hora desejados</small></span></label></fieldset>
    <div className="chosen-service"><Check size={20}/><span>{service.name}</span></div>
    <p className="planner-note">Os horários disponíveis e a confirmação da reserva aparecem na agenda do Trinks.</p>
    <button className="catalog-toggle text-link" type="button" onClick={()=>{setChannel('trinks');setAgendaOpen(true);goToStep(nextRef)}}>Ver todos os serviços e valores <ArrowUpRight size={16}/></button>
   </div>
   <div className="booking-next booking-step-target" ref={nextRef} tabIndex={-1}>
    {channel==='trinks'?<div className="online-summary"><p className="small-label">AGENDA OFICIAL · TRINKS</p><h3>Profissional, dia e hora.</h3><p>Na agenda, selecione <strong>{service.name}</strong>{professional?` e o profissional ${professional}`:''}. Depois, escolha a data e um dos horários disponíveis.</p><TrinksAgenda open={agendaOpen} onOpen={()=>setAgendaOpen(true)} onClose={()=>setAgendaOpen(false)}/></div>:
    <form className="reception-form" action="https://api.whatsapp.com/send/" method="get" target="_blank" rel="noopener noreferrer">
     <p className="small-label">AJUDA COM SEU AGENDAMENTO</p><h3>Qual dia e horário?</h3><p className="planner-note">Escolha uma data e informe a hora exata. A recepção consulta a disponibilidade antes de confirmar.</p>
     <label htmlFor="booking-name">Seu nome <span>(obrigatório)</span></label><input id="booking-name" required pattern=".*\S.*" autoComplete="given-name" maxLength={80} value={name} onChange={e=>setName(e.target.value)} placeholder="Como podemos chamar você?"/>
     <div className="reception-selection" role="status"><Check size={18}/><span><strong>{service.name}</strong><br/>Profissional: {professional || 'Sem preferência'}</span></div>
     <fieldset className="date-choice"><legend>Dia desejado <span>(obrigatório)</span></legend><div className="quick-dates">{days.map(day=><button key={day.value} type="button" aria-pressed={date===day.value} onClick={()=>{setDate(day.value);setTime('')}}><span>{day.label}</span><strong>{day.number}</strong></button>)}</div><label htmlFor="booking-date">Escolha no calendário</label><input type="date" id="booking-date" required min={minDate} value={date} onChange={e=>{setDate(e.target.value);setTime('')}}/><p className="selected-date" role="status">{date?'Data escolhida: '+date.split('-').reverse().join('/'):'Toque em um dia acima ou abra o calendário.'}</p></fieldset>
     <label htmlFor="booking-time">Horário desejado <span>(obrigatório)</span></label><input type="time" id="booking-time" required step="60" value={time} onChange={e=>setTime(e.target.value)} aria-describedby="time-help"/><p id="time-help" className="planner-note">Informe a hora exata, por exemplo 14:30. Este pedido depende da disponibilidade; para escolher entre horários livres, use “Reservar pelo Trinks”.</p>
     <details className="message-preview"><summary>Conferir mensagem para a recepção</summary><p>{message}</p></details>
     <input type="hidden" name="phone" value="5561992494249"/><input type="hidden" name="text" value={message}/><input type="hidden" name="type" value="phone_number"/><input type="hidden" name="app_absent" value="0"/>
     <button type="submit" className="button whatsapp-button"><MessageCircle size={18}/>Continuar no WhatsApp <ArrowUpRight size={18}/></button><p className="planner-note">Você revisa e envia a mensagem no WhatsApp. A reserva só é válida após a confirmação.</p>
    </form>}
   </div>
  </div>
  <a className="booking-help" href="tel:+5561992494249"><Phone size={16}/>Prefere ligar? (61) 99249-4249</a>
 </div></section>;
}
