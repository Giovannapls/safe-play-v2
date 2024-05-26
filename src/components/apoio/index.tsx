"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import styles from './GameIntro.module.css';
import Link from "next/link";
import Image from 'next/image';

const Apoio = () => {
    const [open, setOpen] = useState(null);  // To track the currently open item

    const faqs = [
      {
        question: "Quando buscar ajuda profissional?",
        answer: "Se você está enfrentando problemas relacionados aos jogos que possam passar despercebidos ou serem minimizados, mas é importante reconhecer quando eles estão afetando negativamente sua vida. Se você perceber que está se tornando excessivamente isolada, negligenciando outras responsabilidades, enfrentando dificuldades financeiras devido aos jogos, ou experimentando conflitos em seus relacionamentos devido ao tempo dedicado aos jogos, pode ser um sinal de que é hora de buscar ajuda."
      },
      {
        question: "Como encontrar ajuda na SafePlay?",
        answer: "mock answer"
      },
      {
        question: "Quais são os tipos de tratamento disponíveis?",
        answer: "mock answer"
      }
    ];
  
    const toggleFAQ = index => {
      setOpen(open === index ? null : index);  // Toggle between open and closed states
    };

  return (
    <section id="faq" className="faq-section bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
                  <Image src="/images/psico.png" alt="Gaming" width="600" height="600" objectFit='cover'  style={{float:"right"}}/>
            <div className="container">
    <SectionTitle
      title="Cuidando do seu bem-estar e psicológico."
      paragraph={
        <>
     Na SafePlay, entendemos que jogar não é apenas sobre entretenimento, mas também sobre enfrentar desafios emocionais e mentais. 
     Se você está passando por momentos difíceis estamos aqui para ajudar.
      </>
            }
    />
 
 <Link
                    href="/apoio"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"

                  >
                    Falar com uma profissional
                  </Link>
                  <div  style={{paddingTop:"200px"}}>
                  <SectionTitle
      title="Dúvidas frequentes"
      paragraph=""
      center
    />
                  {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className={open === index ? 'faq-icon open' : 'faq-icon'}>+</span>
          </div>
          <div className={open === index ? 'faq-answer open' : 'faq-answer'}>
            {faq.answer}
          </div>
        </div>

      ))}    
          </div>
                </div>
    </section>
  );
};

export default Apoio;
