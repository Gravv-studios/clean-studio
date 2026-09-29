// Importação das fotos reais e logos disponíveis na pasta assets
import logoImage from '../../assets/ae252602-0bf2-40c1-a35f-611ce23db1d7.png';
import logoHorizontalImage from '../../assets/logo-horizontal.png';
import heroBarbeariaImage from '../../assets/hero-barbearia.png';
import heroPesImage from '../../assets/hero-cuidado-pes.png';
import barberServiceImage from '../../assets/2660a77d-a83e-415f-8d64-c9ade886b8e4.png';
import footCareServiceImage from '../../assets/74cd7274-cac3-4b74-9412-a8c97fa4b201.png';
import aestheticRoomImage from '../../assets/45790b1b-1433-42e9-ab1b-c4da69e4e115.png';
import interiorBarberImage from '../../assets/4d93849f-f5b4-4868-ae27-4db9b8387f0b.png';
import coffeeHospitalityImage from '../../assets/caa7b25f-6e9a-4f73-a1e3-9bc50355a641.png';
import facadeBuildingImage from '../../assets/ea90d04c-c603-4e23-a7f5-18eaaba284cc.png';

export const siteData = {
  brand: {
    name: 'Studio Clean Barber e Beauty',
    city: 'Águas Claras, DF',
    address: 'Quadra 205 · Edifício Paço Line · Loja 04',
    instagramHandle: '@studiocleandf',
    sloganLines: ['BELEZA', 'FAZ BEM', 'SEMPRE'],
  },
  links: {
    booking: 'https://www.trinks.com/studio-clean-barber-e-beauty-ltda',
    instagram: 'https://www.instagram.com/studiocleandf/',
    linktree: 'https://linktr.ee/studiocleandf',
  },
  images: {
    logo: logoImage,
    logoHorizontal: logoHorizontalImage,
    heroBarbearia: heroBarbeariaImage,
    heroPes: heroPesImage,
    barberService: barberServiceImage,
    footCareService: footCareServiceImage,
    aestheticRoom: aestheticRoomImage,
    interiorBarber: interiorBarberImage,
    coffeeHospitality: coffeeHospitalityImage,
    facadeBuilding: facadeBuildingImage,
  },
  navigation: [
    { label: 'O studio', href: '#studio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Localização', href: '#localizacao' },
  ],
  hero: {
    tagline: 'BARBER & BEAUTY · ÁGUAS CLARAS',
    titleLines: ['Seu estilo.', 'Seu cuidado.', 'Seu momento.'],
    description: 'Uma pausa na rotina para cuidar de você.',
    ctaText: 'Reserve seu momento',
    bottomNote: 'BELEZA TAMBÉM É BEM-ESTAR',
    sidePhotos: [
      {
        image: heroBarbeariaImage,
        alt: 'Fotografia de atendimento de barbearia no Studio Clean — Tradição em cuidar de você',
        title: 'Barbearia',
      },
      {
        image: heroPesImage,
        alt: 'Fotografia de atendimento e cuidados com os pés no Studio Clean — Beleza em todos os detalhes',
        title: 'Cuidado dos pés',
      },
    ],
  },
  specialties: [
    'Barbearia',
    'Estética',
    'Cuidado dos pés',
    'Bem-estar',
  ],
  servicesSection: {
    title: 'O cuidado que combina com você.',
    subtitle: 'SERVIÇOS PARA O SEU BEM-ESTAR, EM UM SÓ LUGAR.',
    services: [
      {
        id: 'barbearia',
        title: 'Barbearia',
        description: 'Estilo, conforto e autocuidado.',
        image: barberServiceImage,
        alt: 'Serviço de barbearia no Studio Clean',
        cta: 'Saiba mais',
      },
      {
        id: 'estetica',
        title: 'Beleza & estética',
        description: 'Um momento de cuidado com você.',
        image: aestheticRoomImage,
        alt: 'Sala de estética com maca e produtos para tratamentos de beleza',
        cta: 'Saiba mais',
      },
      {
        id: 'pes',
        title: 'Cuidado dos pés',
        description: 'Bem-estar em cada passo.',
        image: footCareServiceImage,
        alt: 'Cuidado dos pés e pedicure em ambiente acolhedor',
        cta: 'Saiba mais',
      },
    ],
  },
  experience: {
    tagline: 'A EXPERIÊNCIA STUDIO CLEAN',
    title: 'Mais que um cuidado.\nUma boa pausa.',
    subtitle: 'Um espaço para desacelerar e se sentir bem.',
    description:
      'Aqui, cada detalhe foi pensado para oferecer uma experiência completa de cuidado, beleza e bem-estar, em um ambiente acolhedor e moderno.',
    complement: 'Conheça o Studio Clean e reserve um tempo para cuidar de você.',
    image: aestheticRoomImage,
    alt: 'Ambiente aconchegante e moderno do Studio Clean em Águas Claras',
  },
  ctaSection: {
    title: 'Seu próximo momento é aqui.',
    buttonText: 'Agendar meu momento',
  },
};
