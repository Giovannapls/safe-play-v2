import { Feature } from "@/types/feature";
import Image from 'next/image';

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image src="/images/seguro.svg" alt="seguro" width="64" height="64"/>
    ),
    title: "Ambiente Seguro",
    paragraph:
      "Jogue sem preocupações com moderação ativa e suporte contra atitudes tóxicas.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/community.svg" alt="community" width="64" height="64"/>
    
    ),
    title: "Comunidade Apoiadora",
    paragraph:
      "Conecte-se com mulheres gamers que compartilham suas paixões e valores.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/psychology.svg" alt="community" width="64" height="64"/>

    ),
    title: "Apoio Psicológico",
    paragraph:
      "Tenha acesso a recursos de saúde mental para seu bem-estar.",
  },
  {
    id: 1,
    icon: (
    <Image src="/images/gamer.svg" alt="community" width="64" height="64"/>

    ),
    title: "Eleve Seu Jogo",
    paragraph:
      "Aprenda como começar na área gamer, acesse tutoriais detalhados e dicas valiosas.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/eventexclusive.svg" alt="community" width="64" height="64"/>
    ),
    title: "Eventos Exclusivos",
    paragraph:
      "Participe de workshops, torneios e eventos especiais feitos para você.",
  },
  {
    id: 1,
    icon: (
<Image src="/images/talk.svg" alt="community" width="64" height="64"/>
    ),
    title: "Combate ao Machismo",
    paragraph:
      "Relate comentários tóxicos e apoie uma comunidade respeitosa.",
  },
];
export default featuresData;
