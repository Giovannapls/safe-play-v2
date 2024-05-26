import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import styles from './ProfileCard.module.css';

const bebas = Bebas_Neue({ subsets: ["latin"], weight: '400'});

const Hero = () => {
  return (
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px]  md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
      <div className={styles.card}>
      <div className={styles.profile}>
      <Image src={"/images/profile/image.png"} alt="cup"  width="600" height="600"  />
      </div>
      <div className={styles.gamesSection}>
      <Image src={"/images/games/image.png"} alt="cup"  width="600" height="600"  />
      </div>
      <div className={styles.tournaments}>
  <Image src={"/images/cup/image.png"} alt="cup"  width="399" height="600" className={styles.tournamentCard} />
      </div>
      <div className={styles.stats}>
      <Image src={"/images/eventos/image.png"} alt="cup"  width="600" height="600"  />
      </div>
      <div className={styles.favoriteGame}>
      <Image src={"/images/games/valorant.png"} alt="cup"  width="600" height="600"  />
      </div>
    </div>
    <div className="mb-6 flex w-full items-center justify-center ">
    <Image src={"/images/teams.png"} alt="cup"  width="1100" height="600" />
    </div>
    <div className="mb-6 flex w-full items-center justify-center ">
    <Image src={"/images/conquistas.png"} alt="cup"  width="1100" height="600" />
    </div>
      </section>
      
  );
};

export default Hero;
