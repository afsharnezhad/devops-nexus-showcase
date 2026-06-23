import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { WordsPullUpMultiStyle } from "./WordsPullUp";
import feat1 from "@/assets/cinema-feature-1.jpg";
import devopsPipeline from "@/assets/devops-pipeline.png";
import devopsOffice from "@/assets/devops-office.png";
import codeBg from "@/assets/code-background.jpg";

const FeatureCard = ({ index, children }: { index: number; children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl lg:h-[480px] flex flex-col"
    >
      {children}
    </motion.div>
  );
};

const IconCard = ({
  num,
  title,
  icon,
  items,
  isRTL,
  learn,
}: {
  num: string;
  title: string;
  icon: string;
  items: string[];
  isRTL: boolean;
  learn: string;
}) => (
  <div className="bg-[#212121] h-full p-6 md:p-7 flex flex-col gap-5">
    <img src={icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover" loading="lazy" />
    <h3 className="text-xl md:text-2xl font-medium" style={{ color: "#E1E0CC" }}>
      <span className="opacity-50 me-2 text-base">{num}</span>
      {title}
    </h3>
    <ul className="flex flex-col gap-3 flex-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
          <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <a href="#" className="inline-flex items-center gap-2 text-sm group" style={{ color: "#E1E0CC" }}>
      {learn}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ transform: `rotate(${isRTL ? -135 : -45}deg)` }} />
    </a>
  </div>
);

const FeaturesCinematic = () => {
  const { t, isRTL } = useTranslation();

  return (
    <section className="relative min-h-screen bg-black py-24 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* Card 1 — image hero */}
          <FeatureCard index={0}>
            <img src={codeBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="relative mt-auto p-6">
              <h3 className="text-2xl md:text-3xl font-medium" style={{ color: "#E1E0CC" }}>
                {t("cmFeat1Title")}
              </h3>
            </div>
          </FeatureCard>

          {/* Card 2 */}
          <FeatureCard index={1}>
            <IconCard
              num="01"
              title={t("cmFeat2Title")}
              icon={devopsPipeline}
              items={[t("cmFeat2I1"), t("cmFeat2I2"), t("cmFeat2I3"), t("cmFeat2I4")]}
              isRTL={isRTL}
              learn={t("cmLearnMore")}
            />
          </FeatureCard>

          {/* Card 3 */}
          <FeatureCard index={2}>
            <IconCard
              num="02"
              title={t("cmFeat3Title")}
              icon={feat1}
              items={[t("cmFeat3I1"), t("cmFeat3I2"), t("cmFeat3I3")]}
              isRTL={isRTL}
              learn={t("cmLearnMore")}
            />
          </FeatureCard>

          {/* Card 4 */}
          <FeatureCard index={3}>
            <IconCard
              num="03"
              title={t("cmFeat4Title")}
              icon={devopsOffice}
              items={[t("cmFeat4I1"), t("cmFeat4I2"), t("cmFeat4I3")]}
              isRTL={isRTL}
              learn={t("cmLearnMore")}
            />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCinematic;
