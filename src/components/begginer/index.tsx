"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import styles from './GameIntro.module.css';
import Link from "next/link";
import Image from 'next/image';

const GamerIntro = () => {
    const [open, setOpen] = useState(null);  // To track the currently open item

    const faqs = [
      {
        question: "O que é a SafePlay?",
        answer: "A SafePlay é uma plataforma inclusiva e segura dedicada a mulheres gamers e profissionais de tecnologia, focada em promover empoderamento, educação e networking."
      },
      {
        question: "Como posso me inscrever?",
        answer: "Você pode se inscrever visitando nossa página de inscrição e preenchendo o formulário fornecido."
      },
      {
        question: "Quais são os benefícios de participar da SafePlay?",
        answer: "Os benefícios incluem acesso a eventos exclusivos, networking com outros profissionais da indústria e oportunidades de aprendizado."
      },
      {
        question: "Posso participar dos campeonatos mesmo sendo iniciante?",
        answer: "Sim, a SafePlay oferece campeonatos para todos os níveis de habilidade."
      }
    ];
  
    const toggleFAQ = index => {
      setOpen(open === index ? null : index);  // Toggle between open and closed states
    };

  return (
    <section id="faq" className="faq-section bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
                  <Image src="/images/helppc.png" alt="Gaming" width="600" height="600" objectFit='cover'  style={{float:"right"}}/>
            <div className="container">
    <SectionTitle
      title="Iniciante no universo gamer? A gente te ajuda!"
      paragraph={
        <>
      Está começando agora no mundo dos games? 
      Não se preocupe, a SafePlay está ao seu lado em cada passo dessa jornada. 
      Sabemos que iniciar pode ser desafiador, desde escolher as peças certas até montar seu próprio computador, mas estamos aqui para facilitar esse processo.
      </>
            }
    />
 
 <Link
                    href="https://www.kabum.com.br/"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Monte seu PC gamer na Kabum
                  </Link>
                </div>
    </section>
  );
};

export default GamerIntro;
