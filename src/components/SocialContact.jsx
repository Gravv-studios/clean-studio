import React from 'react';
import { ArrowUpRight, Instagram, Phone, MapPin, CalendarDays } from 'lucide-react';
import { siteData } from '../data/siteData';
import { whatsappUrl } from '../data/bookingData';

export default function SocialContact() {
 const {images, links, brand} = siteData;
 const gallery = [
  {image:images.barberService, label:'Estilo em cada detalhe', alt:'Atendimento de barbearia no Studio Clean'},
  {image:images.interiorBarber, label:'Um espaço para você', alt:'Interior da barbearia Studio Clean'},
  {image:images.coffeeHospitality, label:'Uma pausa bem-vinda', alt:'Café servido no Studio Clean'},
  {image:images.footCareService, label:'Cuidado por inteiro', alt:'Atendimento de cuidado dos pés no Studio Clean'}
 ];
 return <>
  <section id="galeria" className="section container social-section">
   <div className="social-heading"><div><p className="eyebrow"><span/>POR DENTRO DO STUDIO</p><h2>O nosso cuidado,<br/><em>de perto.</em></h2></div><div><p>Conheça o espaço e os detalhes da nossa rotina. Para acompanhar as novidades, encontre o Studio Clean no Instagram.</p><a href={links.instagram} target="_blank" rel="noopener noreferrer" className="text-link"><Instagram size={20}/>{brand.instagramHandle}<ArrowUpRight size={17}/></a></div></div>
   <div className="social-gallery">{gallery.map(item=><figure key={item.label}><img src={item.image} alt={item.alt} loading="lazy"/><figcaption>{item.label}</figcaption></figure>)}</div>
  </section>
  <section id="contato" className="contact-section"><div className="container"><div className="section-heading"><p className="eyebrow"><span/>FALE COM O STUDIO CLEAN</p><h2>Estamos aqui <em>para você.</em></h2><p>Agendamento, dúvidas ou uma conversa com a nossa equipe.</p></div><div className="contact-cards">
   <article><CalendarDays/><h3>Seu próximo horário</h3><p>Consulte os serviços e organize seu próximo atendimento na nossa agenda.</p><a className="text-link" href="#agendar">Ir para o agendamento <ArrowUpRight size={18}/></a></article>
   <article><Phone/><h3>Converse com a recepção</h3><p>Informações sobre serviços, sua visita ou alterações de um horário reservado.</p><a className="text-link" href={whatsappUrl("Olá, equipe Studio Clean! Vim pelo site e gostaria de falar com a recepção.")} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp <ArrowUpRight size={18}/></a></article>
   <article><MapPin/><h3>Venha nos conhecer</h3><p>Quadra 205 · Edifício Paço Line · Loja 04<br/>Águas Claras, Brasília — DF</p><a className="text-link" href="#localizacao">Endereço e funcionamento <ArrowUpRight size={18}/></a></article>
  </div></div></section>
 </>;
}

