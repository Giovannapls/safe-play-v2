import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/background.webp" alt="video image" fill />
              </div>
            </div>
          </div>
        </div>
          <SectionTitle
            title="ENCONTRE SEU DUO, TRIO OU SQUAD!"
            paragraph="Esqueça cair em partidas com atitudes machistas e misóginas. Na SafePlay, você encontra seu Duo, Trio ou Squad em um ambiente seguro e acolhedor.

            Aqui você pode formar equipes com pessoas que compartilham os mesmos valores e respeitam sua jornada como gamer. Jogue com confiança e segurança, sabendo que está cercada por uma comunidade que apoia e valoriza você."
            center
          />
          <div className="text-center">
                  <Link
                    href="/signup"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Quero fazer parte!
                  </Link>
                  </div>
        </div>
      </section>
    </>
  );
};

export default Features;
