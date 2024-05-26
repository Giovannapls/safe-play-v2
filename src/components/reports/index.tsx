"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import styles from './GameIntro.module.css';
import Link from "next/link";
import Image from 'next/image';

const Reports = () => {
  return (
    <section id="faq" className="faq-section bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    style={{backgroundColor:"#120020"}}>
                  <Image src="/images/reports.png" alt="Gaming" width="600" height="600" objectFit='cover'  style={{float:"right"}}/>
            <div className="container">
    <SectionTitle
      title="Denuncie comportamentos tóxicos e ajude a reportar outras denúncias!"
      paragraph={
        <>
   Esta página foi criada para que você possa denunciar comportamentos tóxicos, machistas e misóginos que encontrar durante partidas. 
   Envie clipes ou prints de tela como evidência, e juntas, garantimos que ações sejam tomadas para banir essas contas.
      </>
            }
    />
 
 <Link
                    href="/report"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"

                  >
                    Fazer uma Denúncia
                  </Link>
                  <div  style={{paddingTop:"80px"}}>
                  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/report"
                    className="rounded-sm  px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Aprenda a tirar print da tela
                  </Link>
                  <Link
                    href="/report"
                    className="inline-block rounded-sm  px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Aprenda a gravar clipes de suas partidas
                  </Link>
                </div>
                  
</div>
</div>
<div  style={{paddingTop:"80px"}}>
<SectionTitle
            title="Denúncias (876)"
            paragraph=""
            center
          />
              <div className="mb-6 flex w-full items-center justify-center ">
    <Image src={"/images/gridDenuncias.png"} alt="cup"  width="1100" height="600" />
    </div>
          </div>
    </section>
  );
};

export default Reports;
