import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { WordsPullUpMultiStyle } from "./WordsPullUp";
import Skiper79 from "@/components/ui/skiper79";

const AnimatedLetter = ({ char, index, total, progress }: { char: string; index: number; total: number; progress: any }) => {
  const start = index / total;
  const opacity = useTransform(progress, [Math.max(0, start - 0.1), Math.min(1, start + 0.05)], [0.2, 1]);
  return <motion.span style={{ opacity, color: "#DEDBC8" }}>{char}</motion.span>;
};

const AboutCinematic = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });

  const body = t("cmAboutBody");
  const chars = body.split("");

  return (
    <section className="bg-black py-24 md:py-32 px-4">
      <div ref={ref} className="bg-[#101010] max-w-6xl mx-auto rounded-2xl md:rounded-[2rem] px-6 md:px-12 py-20 md:py-24 text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-8" style={{ color: "#DEDBC8" }}>
          {t("cmAboutTag")}
        </p>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12" style={{ color: "#E1E0CC" }}>
          <WordsPullUpMultiStyle
            segments={[
              { text: t("cmAboutSeg1"), className: "font-normal" },
              { text: " " + t("cmAboutSeg2"), className: "italic font-serif" },
              { text: " " + t("cmAboutSeg3"), className: "font-normal" },
            ]}
          />
        </div>

        <p className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-16">
          {chars.map((c, i) => (
            <AnimatedLetter key={i} char={c} index={i} total={chars.length} progress={scrollYProgress} />
          ))}
        </p>

        {/* Integrated photo grid */}
        <div className="-mx-6 md:-mx-12">
          <Skiper79 />
        </div>
      </div>
    </section>
  );
};

export default AboutCinematic;
