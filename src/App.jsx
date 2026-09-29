import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Scissors, Sparkles, Heart, MapPin, Clock, Phone, Instagram, CalendarDays, Check, Plus, Coffee, Car, Wifi } from 'lucide-react';
import { siteData } from './data/siteData';
import SocialContact from './components/SocialContact';
import Booking from './components/Booking';
import { professionals as team } from './data/professionals';

const { images, links, brand } = siteData;
const maps = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('Quadra 205, lote 02 loja 4, Águas Claras, Brasília, DF');
const services = [
  {title:'Barbearia', label:'ESTILO & PERSONALIDADE', image:images.barberService, icon:Scissors, description:'Um cuidado que acompanha o seu estilo, do cabelo à barba.', items:['Cabelo','Barba e bigode']},
  {title:'Beleza & estética', label:'CUIDADO EM CADA DETALHE', image:images.aestheticRoom, icon:Sparkles, description:'Reserve um tempo para renovar o seu bem-estar e a sua autoestima.', items:['Estética facial','Depilação','Massagem']},
  {title:'Cuidado dos pés', label:'LEVEZA & BEM-ESTAR', image:images.footCareService, icon:Heart, description:'Atenção especial para você se sentir bem em cada passo.', items:['Podologia','Mãos e pés']}
];
const faqs = [
  ['Como faço meu agendamento?', 'Escolha seu serviço na seção Agendamento. Você pode continuar no Trinks para selecionar profissional, dia e horário, ou preencher suas preferências e abrir uma mensagem pronta no WhatsApp para a recepção. O atendimento só fica reservado após a confirmação.'],
  ['Onde vejo os valores e a duração dos serviços?', 'Abra “Ver todos os serviços e valores” na seção Agendamento para consultar o catálogo oficial. Os valores e horários finais são informados no Trinks ou pela recepção antes da confirmação.'],
  ['Posso escolher meu profissional?', 'Consulte os profissionais disponíveis para o serviço desejado na agenda do Trinks. Nossa equipe também pode ajudar pelo telefone (61) 99249-4249.'],
  ['Como cancelar ou remarcar?', 'Cancelamentos e alterações devem ser feitos com pelo menos 24 horas de antecedência. Acesse seu agendamento no Trinks ou entre em contato com a recepção.'],
  ['Com quanto tempo de antecedência devo chegar?', 'Chegue de 5 a 10 minutos antes do horário. Atrasos superiores a 10 minutos podem reduzir o tempo do atendimento ou exigir remarcação, conforme a disponibilidade.'],
  ['O studio tem estacionamento?', 'Sim, há estacionamento gratuito. O espaço também conta com Wi-Fi e atende adultos e crianças.']
];
function BookingLink({children='Agendar horário',className=''}) {return <a className={`button ${className}`} href="#agendar">{children}<ArrowUpRight size={18}/></a>}
function Eyebrow({children}) {return <p className="eyebrow"><span/>{children}</p>}
export default function App() {
 const [menuOpen,setMenuOpen]=useState(false);
 const [bookingSelection,setBookingSelection]=useState(null);
 useEffect(()=>{const escape=e=>{if(e.key==='Escape')setMenuOpen(false)};window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape)},[]);
 return <>
  <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header className="header">
   <div className="container header-inner"><a href="#inicio" aria-label="Studio Clean — início"><img className="brand-logo" src={images.logoHorizontal} alt="Studio Clean Barber & Beauty"/></a>
    <nav className="desktop-nav" aria-label="Principal"><a href="#studio">O studio</a><a href="#servicos">Serviços</a><a href="#equipe">Equipe</a><a href="#localizacao">Localização</a><a href="#contato">Contato</a></nav>
    <BookingLink className="header-book"/>
    <button className="menu-toggle" aria-label={menuOpen?'Fechar menu':'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
   </div>
   {menuOpen&&<nav id="mobile-menu" className="mobile-menu" aria-label="Menu móvel" onClick={()=>setMenuOpen(false)}><a href="#studio">O studio</a><a href="#servicos">Serviços</a><a href="#equipe">Equipe</a><a href="#localizacao">Localização</a><a href="#contato">Contato</a><BookingLink/></nav>}
  </header>
  <main id="conteudo">
   <section id="inicio" className="hero container">
    <div className="hero-copy"><Eyebrow>BARBER & BEAUTY · ÁGUAS CLARAS</Eyebrow><h1>Seu estilo.<br/>Seu cuidado.<br/><em>Seu momento.</em></h1><p className="hero-lead">Uma pausa na rotina para cuidar de você.</p><BookingLink>Reserve seu momento</BookingLink><p className="hero-signature"><span/>BELEZA TAMBÉM É BEM-ESTAR</p></div>
    <div className="hero-images"><figure><picture><source media="(max-width: 600px)" srcSet={images.barberService}/><img src={images.heroBarbearia} alt="Atendimento de barbearia no Studio Clean" fetchpriority="high"/></picture><figcaption>Tradição em cuidar de você.</figcaption></figure><figure><picture><source media="(max-width: 600px)" srcSet={images.footCareService}/><img src={images.heroPes} alt="Atendimento de cuidado dos pés no Studio Clean"/></picture><figcaption>Beleza em todos os detalhes.</figcaption></figure></div>
   </section>
   <div className="specialties container" aria-label="Especialidades"><span>BARBEARIA</span><i>✦</i><span>ESTÉTICA</span><i>✦</i><span>CUIDADO DOS PÉS</span><i>✦</i><span>BEM-ESTAR</span></div>
   <section id="servicos" className="section container">
    <div className="section-heading"><Eyebrow>UM TEMPO SÓ SEU</Eyebrow><h2>O cuidado que combina <em>com você.</em></h2><p>Beleza, estilo e bem-estar. Tudo em um só lugar.</p></div>
    <div className="services-grid">{services.map((service,i)=><article className="service-card" key={service.title}><div className="service-photo"><img src={service.image} alt={service.title==='Barbearia'?'Profissional realizando atendimento de barbearia':service.title==='Cuidado dos pés'?'Atendimento de cuidado dos pés':'Sala de estética do Studio Clean'} loading="lazy"/><span className="service-number">0{i+1}</span></div><div className="service-body"><p className="small-label">{service.label}</p><h3>{service.title}</h3><p>{service.description}</p><ul>{service.items.map(item=><li key={item}><Check size={14}/>{item}</li>)}</ul><a className="text-link" href="#agendar" onClick={()=>setBookingSelection({serviceId:["corte","pele","podologia"][i]})}>Escolher atendimento <ArrowUpRight size={17}/></a></div></article>)}</div>
   </section>
   <section id="studio" className="studio-section"><div className="container studio-grid"><div className="studio-photos"><img className="studio-main" src={images.interiorBarber} alt="Cadeiras de barbearia e ambiente do Studio Clean" loading="lazy"/><div className="coffee-photo"><img src={images.coffeeHospitality} alt="Café servido no Studio Clean" loading="lazy"/><span>Os detalhes fazem a diferença.</span></div></div><div className="studio-copy"><Eyebrow>A EXPERIÊNCIA STUDIO CLEAN</Eyebrow><h2>Mais que um cuidado.<br/><em>Uma boa pausa.</em></h2><p className="lead">Entre, sinta-se à vontade.<br/>Esse momento é seu.</p><p>Em Águas Claras, um espaço que reúne barbearia, beleza e cuidados pessoais. Um ambiente acolhedor, atendimento próximo e atenção ao que faz você se sentir bem.</p><div className="amenities"><span><Coffee size={19}/>Um café e uma boa pausa</span><span><Car size={19}/>Estacionamento gratuito</span><span><Wifi size={19}/>Wi-Fi disponível</span></div><a href="#localizacao" className="text-link">Venha conhecer <ArrowUpRight size={18}/></a></div></div></section>
   <section id="equipe" className="section container"><div className="section-heading"><Eyebrow>QUEM CUIDA DE VOCÊ</Eyebrow><h2>Boas mãos. <em>Seu melhor momento.</em></h2><p>Conheça os barbeiros e a profissional de podologia do nosso studio.</p></div><div className="team-grid">{team.map(person=><article className="team-card" key={person.name}><img src={person.photo} alt={person.name+', '+person.role+' do Studio Clean'} width="120" height="120" loading="lazy"/><h3>{person.name}</h3><p>{person.role}</p><a href="#agendar" className="text-link" onClick={()=>setBookingSelection({serviceId:person.name==="Edilene"?"podologia":"corte",professional:person.name})} aria-label={'Consultar agenda — '+person.name}>Consultar agenda <ArrowUpRight size={16}/></a></article>)}</div><p className="section-note">Consulte os profissionais disponíveis para cada serviço na agenda abaixo.</p></section>
   <Booking selection={bookingSelection} />
   <section id="localizacao" className="section container location-grid"><div className="location-copy"><Eyebrow>PERTINHO DE VOCÊ</Eyebrow><h2>Seu ponto de cuidado<br/>em <em>Águas Claras.</em></h2><div className="contact-row"><MapPin/><div><h3>Venha ao Studio Clean</h3><address>Quadra 205, lote 02, loja 04<br/>Edifício Paço Line · Águas Claras<br/>Brasília, DF · CEP 71925-000</address></div></div><div className="contact-row"><Clock/><div><h3>Horários de funcionamento</h3><dl><div><dt>Segunda a sexta</dt><dd>9h às 20h</dd></div><div><dt>Sábado</dt><dd>9h às 19h</dd></div><div><dt>Domingo</dt><dd>Fechado</dd></div></dl></div></div><div className="location-actions"><a className="button" href={maps} target="_blank" rel="noopener noreferrer">Como chegar <ArrowUpRight size={17}/></a><a className="text-link" href="tel:+5561992494249"><Phone size={17}/>Ligar para o studio</a></div></div><a className="location-photo" href={maps} target="_blank" rel="noopener noreferrer" aria-label="Abrir rota para o Studio Clean no Google Maps"><img src={images.facadeBuilding} alt="Fachada do Studio Clean no Edifício Paço Line" loading="lazy"/><span><MapPin size={18}/>Um momento seu, logo ali.<ArrowUpRight size={19}/></span></a></section>
   <SocialContact />
   <section className="faq-section"><div className="container faq-grid"><div><Eyebrow>ANTES DA SUA VISITA</Eyebrow><h2>Vamos tirar<br/>suas <em>dúvidas?</em></h2><p>Conte com a gente para planejar seu momento.</p><a href="tel:+5561992494249" className="text-link">Fale com a recepção <ArrowUpRight size={17}/></a></div><div className="faq-list">{faqs.map(([question,answer])=><details key={question}><summary>{question}<Plus size={18}/></summary><p>{answer}</p></details>)}</div></div></section>
   <section className="closing container"><p>BELEZA FAZ BEM. SEMPRE.</p><h2>Seu próximo momento <em>é aqui.</em></h2><BookingLink>Agendar meu momento</BookingLink></section>
  </main>
  <footer><div className="container footer-main"><a href="#inicio"><img src={images.logoHorizontal} alt={brand.name} className="brand-logo"/></a><p>Seu estilo. Seu cuidado. Seu momento.<br/>Barber & Beauty · Águas Claras, DF</p><a className="text-link" href={links.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={19}/>{brand.instagramHandle}<ArrowUpRight size={16}/></a></div><nav className="container footer-links" aria-label="Navegação do rodapé"><a href="#studio">O studio</a><a href="#servicos">Serviços</a><a href="#equipe">Nossa equipe</a><a href="#agendar">Agendamento</a><a href="#galeria">Galeria e Instagram</a><a href="#localizacao">Como chegar</a><a href="#contato">Contato</a></nav><div className="container footer-bottom"><span>© {new Date().getFullYear()} Studio Clean Barber & Beauty</span><a href="#agendar">Agendar meu horário <ArrowUpRight size={13}/></a></div></footer>
  <div className="mobile-booking"><span>Um tempo para você.</span><BookingLink>Agendar<CalendarDays size={16}/></BookingLink></div>
 </>;
}
