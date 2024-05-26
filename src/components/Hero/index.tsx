import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: '400'});

const Hero = () => {
  return (
<div style={{ 
      backgroundSize:"100% auto",
      backgroundImage: `url("/images/background.webp")` ,
    }}>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px]  md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight" style={{ fontFamily: bebas.style.fontFamily, fontSize:"60px" }}>
                SEU ESPAÇO, SUA VOZ, <span style={{ color: "#FB0171" }}>SEU</span> JOGO.
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Uma comunidade inclusiva e apoiadora para todas gamers. Juntas, promovemos segurança, empoderamento e crescimento pessoal.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/about"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Saber mais
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Quero fazer parte!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="text-center" style={{ paddingTop: "100px", paddingLeft:"90px"}}>

        <li >
        <Image
            src="/images/gameboy.png"
            width={48}
            height={48}
            alt=""
            />
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        <span style={{ color: "#FB0171" }}>1567 </span> PLAYERS ON
        </h3></li>
        <li>      
           <Image
            src="/images/user.png"
            width={48}
            height={48}
            alt=""
            />
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        <span style={{ color: "#FB0171" }}>10M </span> CADASTROS
        </h3></li>
  <li>

        <Image
            src="/images/live.png"
            width={48}
            height={48}
            alt=""
            />
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        <span style={{ color: "#FB0171" }}>120 </span> STREAMINGS
        </h3></li>
        <li>
    
        <Image
            src="/images/medal.png"
            width={48}
            height={48}
            alt=""
            />
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        <span style={{ color: "#FB0171" }}>148 </span> CAMPEONATOS
        </h3></li>
</ul>
      </section>
      
      </div>
  );
};

export default Hero;
