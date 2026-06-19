import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { WordsPullUp } from "./WordsPullUp";
import heroImg from "@/assets/cinema-hero.jpg";

const HeroCinematic = () => {
  const { t, isRTL } = useTranslation();

  const navItems = [
    t("cmNav1"),
    t("cmNav2"),
    t("cmNav3"),
    t("cmNav4"),
    t("cmNav5"),
  ];

  return (
    <section className="relative h-screen w-full p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem] bg-black">
        {/* Cinematic background image with slow ken-burns zoom */}
        <motion.img
          src={heroImg}
          alt=""
          aria-hidden
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.18 }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80 pointer-events-none" />

        {/* Cinema navbar pill */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 md:py-3 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {navItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-[10px] sm:text-xs md:text-sm transition-colors whitespace-nowrap"
                style={{ color: "rgba(225,224,204,0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225,224,204,0.8)")}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 lg:p-14 z-10">
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
            <div className="col-span-12 lg:col-span-8" style={{ color: "#E1E0CC" }}>
              <WordsPullUp
                text={t("cmBrand")}
                showAsterisk
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[17vw] xl:text-[16vw]"
              />
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm md:text-base leading-[1.35]"
                style={{ color: "rgba(225,224,204,0.72)" }}
              >
                {t("cmHeroDesc")}
              </motion.p>

              <motion.a
                href="#services"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 hover:gap-3 self-start bg-cinema-cream text-black rounded-full font-medium text-sm sm:text-base ps-5 pe-1.5 py-1.5 transition-all"
              >
                {t("cmHeroCTA")}
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#E1E0CC", transform: isRTL ? "rotate(180deg)" : "none" }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroCinematic;
