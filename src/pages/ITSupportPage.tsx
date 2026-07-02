import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Link as LinkIcon, ShieldCheck } from "lucide-react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import ServiceNavigation from "@/components/layout/ServiceNavigation";
import { DottedSurface } from "@/components/ui/dotted-surface";
import PersianITSections from "@/components/it-support/PersianITSections";
import SectionGlow from "@/components/ui/section-glow";
import itNocWide from "@/assets/it-noc-wide.jpg";
import itEngineer from "@/assets/it-engineer.jpg";
import itCardNetwork from "@/assets/it-card-network.jpg";
import itCardHelpdesk from "@/assets/it-card-helpdesk.jpg";

/* ---------- Hover text-roll button ---------- */
const RollButton = ({
  children,
  variant = "dark",
  className = "",
  onClick,
}: {
  children: string;
  variant?: "dark" | "cyan";
  className?: string;
  onClick?: () => void;
}) => {
  const bg =
    variant === "cyan"
      ? "bg-cyan-400 hover:bg-cyan-300 text-slate-950"
      : "bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur";
  const circleBg = variant === "cyan" ? "bg-slate-950" : "bg-cyan-400";
  const arrowColor = variant === "cyan" ? "text-cyan-400" : "text-slate-950";
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-full pl-5 sm:pl-6 pr-2 py-2 text-[13px] sm:text-[14px] font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${bg} ${className}`}
    >
      <span className="overflow-hidden h-[20px] flex flex-col">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[20px] leading-[20px]">{children}</span>
          <span className="h-[20px] leading-[20px]">{children}</span>
        </span>
      </span>
      <span
        className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full ${circleBg} transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45`}
      >
        <ArrowRight size={14} className={arrowColor} />
      </span>
    </button>
  );
};


/* ============================================================== */
const ITSupportInner = () => {
  const { isRTL } = useTranslation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const fa = isRTL;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const t = {
    brand: fa ? "AUTO|OPS — پشتیبانی فناوری" : "AUTO|OPS — IT Support",
    heroL1: fa ? "زیرساخت IT پایدار طراحی می‌کنیم" : "We engineer reliable IT infrastructure",
    heroL2: fa ? "برای کسب‌وکارهایی که آماده‌ی" : "for businesses ready to scale",
    heroL3: fa ? "رشد بدون توقف هستند." : "without a single minute of downtime.",
    start: fa ? "شروع پروژه" : "Start a project",
    badge: fa ? "ISO ۲۷۰۰۱ آماده" : "ISO 27001 Ready",
    soc: fa ? "تأیید شده" : "Verified",
    intro: fa ? "معرفی AUTO|OPS" : "Introducing AUTO|OPS",
    aboutTitle: fa
      ? "تیمی استراتژی‌محور،\nزیرساخت، شبکه و امنیت در یک پکیج."
      : "Strategy-led engineers,\ninfra, network & security in one stack.",
    aboutP: fa
      ? "از طریق تحقیق، مهندسی دقیق و پایش ۲۴/۷ به کسب‌وکارهای در حال رشد کمک می‌کنیم تا از زیرساخت IT خود حداکثر بهره را ببرند."
      : "Through research, careful engineering and 24/7 monitoring we help growing brands realize their IT infrastructure's full potential.",
    aboutBtn: fa ? "درباره استودیو" : "About our studio",
    cases: fa ? "نمونه‌کارهای منتخب" : "Featured client work",
    projects: fa ? "پروژه‌های ما" : "Our projects",
    learn: fa ? "بیشتر" : "Learn more",
    view: fa ? "مشاهده‌ی پروژه" : "View case study",
    c1desc: fa
      ? "مهاجرت کامل به Cloud با کاهش ۹۸٪ Downtime و افزایش ۳ برابری Throughput."
      : "Full cloud migration with 98% downtime reduction and 3× throughput.",
    c1title: "NetCore Infrastructure",
    c2desc: fa
      ? "تبدیل یک پلتفرم قدیمی به سامانه‌ی Help Desk هوشمند با SLA دقیق."
      : "Turning a legacy platform into a smart help-desk system with tight SLAs.",
    c2title: "HelpHub Platform",
  };

  return (
    <div dir={fa ? "rtl" : "ltr"} className={fa ? "font-vazirmatn dark" : "dark"}>
      <ServiceNavigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex flex-col bg-[#05070f] overflow-hidden pt-24">
        {/* Dotted surface background */}
        <DottedSurface className="z-0" color={[34, 211, 238]} />
        {/* gradient atmosphere */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(8,145,178,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/90" />

        {/* Hero content */}
        <div className="relative z-20 flex-1 flex flex-col justify-end mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
          <p className="text-[13px] sm:text-[14px] text-cyan-300/80 tracking-[0.2em] uppercase mb-5 sm:mb-8">
            {t.brand}
          </p>
          <h1
            className="font-medium text-slate-50"
            style={{
              fontSize: "clamp(1.75rem,7vw,4.2rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            {t.heroL1}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {t.heroL2}
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            {t.heroL3}
          </h1>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
            <RollButton variant="cyan">{t.start}</RollButton>
            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full px-3 sm:px-4 py-2 bg-white/5 backdrop-blur border border-white/10 shadow-[0_2px_24px_rgba(34,211,238,0.15)]">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              <span className="text-[13px] sm:text-[14px] font-medium text-slate-100">
                {t.badge}
              </span>
              <span className="text-[10px] sm:text-[11px] bg-cyan-400 text-slate-950 px-1.5 sm:px-2 py-0.5 rounded font-semibold">
                {t.soc}
              </span>
            </div>
          </div>
        </div>
      </section>



      {/* ===================== ABOUT ===================== */}
      <div className="px-3 sm:px-5 md:px-8 pt-6"><SectionGlow><section className="bg-slate-950 pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        <div className="mx-auto max-w-[1440px]">
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-400 text-slate-950 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
              1
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium border border-white/10 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-slate-200">
              {t.intro}
            </span>
          </div>

          <h2
            className="px-5 sm:px-8 lg:px-12 font-medium text-slate-50 mb-12 sm:mb-16 lg:mb-28 whitespace-pre-line"
            style={{
              fontSize: "clamp(1.5rem,4vw,3.2rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            {t.aboutTitle}
          </h2>

          {/* Mobile/tablet */}
          <div className="lg:hidden px-5 sm:px-8 flex flex-col gap-8">
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-slate-300">
              {t.aboutP}
            </p>
            <RollButton variant="cyan">{t.aboutBtn}</RollButton>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <img
                src={itEngineer}
                alt="IT engineer workstation"
                loading="lazy"
                className="sm:w-[45%] w-full aspect-[438/346] object-cover rounded-xl sm:rounded-2xl ring-1 ring-white/5"
              />
              <img
                src={itNocWide}
                alt="Network operations center"
                loading="lazy"
                className="sm:w-[55%] w-full aspect-[900/600] object-cover rounded-xl sm:rounded-2xl ring-1 ring-white/5"
              />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-12">
            <img
              src={itEngineer}
              alt="IT engineer workstation"
              loading="lazy"
              className="self-end w-full aspect-[438/346] object-cover rounded-2xl ring-1 ring-white/5"
            />
            <div className="self-start flex flex-col justify-end items-end gap-6">
              <p className="text-[16px] sm:text-[18px] leading-[1.65] font-medium text-slate-300 text-right max-w-[28rem]">
                {t.aboutP}
              </p>
              <RollButton variant="cyan">{t.aboutBtn}</RollButton>
            </div>
            <img
              src={itNocWide}
              alt="Network operations center"
              loading="lazy"
              className="self-end w-full aspect-[3/2] object-cover rounded-2xl ring-1 ring-white/5"
            />
          </div>
        </div>
      </section></SectionGlow></div>

      {/* ===================== CASE STUDIES ===================== */}
      <div className="px-3 sm:px-5 md:px-8"><SectionGlow><section className="bg-[#070b15] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-400 text-slate-950 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
              2
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium border border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-slate-200">
              {t.cases}
            </span>
          </div>

          <h2
            className="px-5 sm:px-8 lg:px-12 font-medium text-slate-50 mb-10 sm:mb-14 lg:mb-16"
            style={{
              fontSize: "clamp(1.75rem,7vw,4.2rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            {t.projects}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
            {/* Card 1 */}
            <div>
              <div className="relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#0b1424] group cursor-pointer ring-1 ring-white/5">
                <img
                  src={itCardNetwork}
                  alt="Network mesh visualization"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] bg-cyan-400 rounded-full flex items-center px-2.5 overflow-hidden transition-all duration-300 ease-in-out">
                  <LinkIcon
                    size={14}
                    className="text-slate-950 -rotate-45 group-hover:rotate-0 transition-transform duration-300 shrink-0"
                  />
                  <span className="ml-2 text-[13px] font-medium text-slate-950 opacity-0 group-hover:opacity-100 delay-100 transition-opacity whitespace-nowrap">
                    {t.learn}
                  </span>
                </div>
              </div>
              <p className="text-[13px] sm:text-[14px] text-slate-400 mt-4 leading-relaxed">
                {t.c1desc}
              </p>
              <p className="text-[14px] sm:text-[15px] font-semibold text-slate-100 mt-1">
                {t.c1title}
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#0b1424] group cursor-pointer ring-1 ring-white/5">
                <img
                  src={itCardHelpdesk}
                  alt="Help desk dashboard"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[168px] bg-slate-950/80 backdrop-blur border border-cyan-400/40 rounded-full flex items-center px-2.5 overflow-hidden transition-all duration-300 ease-in-out">
                  <ArrowRight
                    size={14}
                    className="text-cyan-300 -rotate-45 group-hover:rotate-0 transition-transform duration-300 shrink-0"
                  />
                  <span className="ml-2 text-[13px] font-medium text-cyan-100 opacity-0 group-hover:opacity-100 delay-100 transition-opacity whitespace-nowrap">
                    {t.view}
                  </span>
                </div>
              </div>
              <p className="text-[13px] sm:text-[14px] text-slate-400 mt-4 leading-relaxed">
                {t.c2desc}
              </p>
              <p className="text-[14px] sm:text-[15px] font-semibold text-slate-100 mt-1">
                {t.c2title}
              </p>
            </div>
          </div>
        </div>
      </section></SectionGlow></div>

      <div className="px-3 sm:px-5 md:px-8 py-6"><SectionGlow><PersianITSections /></SectionGlow></div>
    </div>
  );
};

const ITSupportPage = () => (
  <LanguageProvider>
    <ITSupportInner />
  </LanguageProvider>
);

export default ITSupportPage;
