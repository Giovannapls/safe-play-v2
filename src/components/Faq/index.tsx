"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Faq = () => {
    const [open, setOpen] = useState(null);  // To track the currently open item

    const faqs = [
      {
        question: "Como montar um computador do zero",
        answer: "sample response"
      },
      {
        question: "Quais os principais acessórios que preciso ter para jogar?",
        answer: "sample response"
      },
      {
        question: "Como escolher a placa-mãe adequada para meu setup?",
        answer: "sample response"
      },
      {
        question: "Qual a diferença entre HDD e SSD?",
        answer: "sample response"
      },
      {
        question: "Qual a função e nome de cada peça necessária para um PC?",
        answer: "sample response"
      },
      {
        question: "Como verificar a compatibilidade dos componentes antes de comprar?",
        answer: "sample response"
      },
      {
        question: "Como escolher o gabinete ideal para meu setup?",
        answer: "sample response"
      },
      {
        question: "Como instalar o sistema operacional no novo computador?",
        answer: "sample response"
      },
    ];
  
    const toggleFAQ = index => {
      setOpen(open === index ? null : index);  // Toggle between open and closed states
    };

  return (
    <section id="faq" className="faq-section bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
            <div className="container">
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
    </section>
  );
};

export default Faq;
