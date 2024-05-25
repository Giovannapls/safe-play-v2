import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="32">
    <path fill="#FFFFFF" d="M12 1.1L2 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-10-4.9zM7 9v2a3 3 0 0 0 6 0V9a3 3 0 0 0-6 0zm4 6.72V18h2v-2.28a2 2 0 1 0-2 0z"/>
</svg>


    ),
    title: "Ambiente Seguro",
    paragraph:
      "Jogue sem preocupações com moderação ativa e suporte contra atitudes tóxicas.",
  },
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
    
    ),
    title: "Comunidade Apoiadora",
    paragraph:
      "Conecte-se com mulheres gamers que compartilham suas paixões e valores.",
  },
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>

    ),
    title: "Apoio Psicológico",
    paragraph:
      "Tenha acesso a recursos de saúde mental para seu bem-estar.",
  },
  {
    id: 1,
    icon: (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-gamepad">
  <rect x="2" y="6" width="20" height="16" rx="2" ry="2"></rect>
  <circle cx="6.5" cy="12" r="1.5"></circle>
  <circle cx="17.5" cy="12" r="1.5"></circle>
</svg>

    ),
    title: "Eleve Seu Jogo",
    paragraph:
      "Aprenda como começar na área gamer, acesse tutoriais detalhados e dicas valiosas.",
  },
  {
    id: 1,
    icon: (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
  <line x1="16" y1="2" x2="16" y2="6"></line>
  <line x1="8" y1="2" x2="8" y2="6"></line>
  <line x1="3" y1="10" x2="21" y2="10"></line>
  <polyline points="10 15 12 17 16 13"></polyline>
</svg>

    ),
    title: "Eventos Exclusivos",
    paragraph:
      "Participe de workshops, torneios e eventos especiais feitos para você.",
  },
  {
    id: 1,
    icon: (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>

    ),
    title: "Combate ao Machismo",
    paragraph:
      "Relate comentários tóxicos e apoie uma comunidade respeitosa.",
  },
];
export default featuresData;
