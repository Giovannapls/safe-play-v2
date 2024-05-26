"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Faq = () => {
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
            <div className="container">
    <SectionTitle
      title="FAQ"
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
    </section>
  );
};

export default Faq;
