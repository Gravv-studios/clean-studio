import { siteData } from './siteData';

// Destinos públicos conferidos no catálogo oficial do Trinks em 29/09/2026.
export const bookingServices = [
 {id:'corte', name:'Corte masculino', category:'Barbearia', trinksId:'15778870', professionals:['Gustavo','Matheus','Alan']},
 {id:'cabelo-barba', name:'Cabelo e barba', category:'Barbearia', trinksId:'15798511', professionals:['Gustavo','Matheus','Alan']},
 {id:'maquina', name:'Corte a máquina', category:'Barbearia', trinksId:'15778863', professionals:['Gustavo','Matheus','Alan']},
 {id:'pele', name:'Limpeza de pele', category:'Beleza & estética', trinksId:'15798546', professionals:[]},
 {id:'sobrancelha', name:'Design de sobrancelha simples', category:'Beleza & estética', trinksId:'15807767', professionals:[]},
 {id:'podologia', name:'Podologia', category:'Cuidado dos pés', trinksId:'15798593', professionals:['Edilene']},
 {id:'outro', name:'Outro serviço / preciso de orientação', category:'Outros', professionals:[]}
];
export function trinksServiceUrl(service) {
 return service.trinksId ? `${siteData.links.booking}/escolha-profissional/${service.trinksId}/frameBusca` : `${siteData.links.booking}/framebusca`;
}
export function receptionMessage({name='',service,professional='',date='',time=''}) {
 const formattedDate = /^\d{4}-\d{2}-\d{2}$/.test(date) ? date.split('-').reverse().join('/') : '';
 return [
  'Olá, equipe Studio Clean! Vim pelo site e gostaria de solicitar um agendamento.',
  name.trim() ? `Meu nome: ${name.trim()}` : '',
  `Serviço: ${service.name}`,
  `Preferência de profissional: ${professional || 'Sem preferência'}`,
  `Dia desejado: ${formattedDate || 'Selecione uma data'}`,
  `Horário desejado: ${time || 'Selecione um horário'}`,
  'Podem me informar os horários disponíveis e o valor? Aguardo a confirmação. Obrigado(a)!'
 ].filter(Boolean).join('\n');
}
export function whatsappUrl(message) {
 return `https://api.whatsapp.com/send/?phone=5561992494249&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

