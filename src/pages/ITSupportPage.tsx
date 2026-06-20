import { useEffect, useState } from "react";
import { Swirl, FlutedGlass, PaperTexture, Warp } from "@paper-design/shaders-react";
import { ArrowRight, Clock, Menu, X, Link as LinkIcon } from "lucide-react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

/* ---------- Partner badge SVG ---------- */
const PartnerIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
  </svg>
);

/* ---------- Reusable hover text-roll button ---------- */
const RollButton = ({
  children,
  variant = "dark",
  className = "",
  onClick,
}: {
  children: string;
  variant?: "dark" | "orange";
  className?: string;
  onClick?: () => void;
}) => {
  const bg =
    variant === "orange"
      ? "bg-[#F26522] hover:bg-[#e05a1a] text-white"
      : "bg-gray-900 hover:bg-gray-800 text-white";
  const circleBg = variant === "orange" ? "bg-white" : "bg-white";
  const arrowColor = variant === "orange" ? "text-[#F26522]" : "text-gray-900";
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-full pl-5 sm:pl-6 pr-2 py-2 text-[13px] sm:text-[14px] font-medium transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${bg} ${className}`}
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

/* ---------- Live London clock ---------- */
const useLondonTime = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const s = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/London",
      }).format(new Date());
      setTime(s);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

/* ============================================================== */
const ITSupportInner = () => {
  const { isRTL } = useTranslation();
  const time = useLondonTime();
  const [menuOpen, setMenuOpen] = useState(false);
  const fa = isRTL;

  const t = {
    nav: fa
      ? ["پروژه‌ها", "استودیو", "ژورنال", "ارتباط"]
      : ["Projects", "Studio", "Journal", "Connect"],
    pitch: fa ? "پذیرش پروژه‌های Q1 2026" : "Taking on projects for Q1 2026",
    book: fa ? "رزرو جلسه مشاوره" : "Book a strategy call",
    brand: fa ? "AUTO|OPS — پشتیبانی فناوری" : "AUTO|OPS — IT Support",
    heroL1: fa ? "زیرساخت IT پایدار طراحی می‌کنیم" : "We build reliable IT infrastructure",
    heroL2: fa ? "برای کسب‌وکارهایی که آماده‌ی" : "for businesses ready to scale",
    heroL3: fa ? "رشد بدون توقف هستند." : "without downtime.",
    start: fa ? "شروع پروژه" : "Start a project",
    partner: fa ? "شریک معتبر" : "Certified Partner",
    featured: fa ? "ویژه" : "Featured",
    menu: fa ? "منو" : "Menu",
    close: fa ? "بستن" : "Close",
    /* About */
    intro: fa ? "معرفی AUTO|OPS" : "Introducing AUTO|OPS",
    aboutTitle: fa
      ? "تیمی استراتژی‌محور، تحویل نتایج\nدر زیرساخت، شبکه و امنیت."
      : "Strategy-led engineers, delivering\nresults in infra, network and security.",
    aboutP: fa
      ? "از طریق تحقیق، مهندسی دقیق و پایش مداوم به کسب‌وکارهای در حال رشد کمک می‌کنیم تا از زیرساخت IT خود حداکثر بهره را ببرند."
      : "Through research, careful engineering and continuous monitoring we help growing brands realize their IT infrastructure full potential.",
    aboutBtn: fa ? "درباره استودیو" : "About our studio",
    /* Cases */
    cases: fa ? "نمونه‌کارهای منتخب" : "Featured client work",
    projects: fa ? "پروژه‌های ما" : "Our projects",
    learn: fa ? "بیشتر" : "Learn more",
    view: fa ? "مشاهده‌ی پروژه" : "View case study",
    c1desc: fa
      ? "برنده‌ی پروژه‌ی سال ۲۰۲۵ — مهاجرت کامل به ابر و کاهش ۹۸٪ Downtime."
      : "Winner of Infra Project 2025 — full cloud migration with 98% downtime reduction.",
    c1title: "NetCore",
    c2desc: fa
      ? "تبدیل یک پلتفرم قدیمی به یک سامانه‌ی Help Desk هوشمند با SLA دقیق."
      : "Transforming a dated platform into a smart help-desk system with tight SLAs.",
    c2title: "HelpHub",
  };

  return (
    <div dir={fa ? "rtl" : "ltr"} className={fa ? "font-vazirmatn" : ""}>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex flex-col bg-[#EFEFEF] overflow-hidden">
        {/* Shader stack */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Swirl
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            colors={["#ffffff", "#f0f0f0"]}
          />
          <Warp
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              mixBlendMode: "screen",
              opacity: 0.85,
            }}
            colors={["#ffffff", "#ff5f03", "#ff5f03"]}
            speed={0.4}
          />
          <FlutedGlass
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            angle={31}
            size={0.4}
            shape="wave"
            speed={0.15}
          />
          <PaperTexture
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}
            roughness={0.05}
          />
        </div>

        {/* Nav */}
        <div className="relative z-20 mx-auto w-full max-w-[1440px] p-2 sm:p-3">
          <nav className="bg-white rounded-full flex items-center justify-between p-[5px]">
            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-tight">AX</span>
              </div>
              <ul className="hidden md:flex items-center gap-6">
                {t.nav.map((n) => (
                  <li key={n}>
                    <a
                      href="#"
                      className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
                    >
                      {n}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5 pr-1">
              <span className="hidden lg:inline text-[13px] text-gray-600">{t.pitch}</span>
              <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
                <Clock size={14} />
                {time} {fa ? "به وقت لندن" : "in London"}
              </span>
              <RollButton variant="dark">{t.book}</RollButton>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center"
              onClick={() => setMenuOpen(true)}
              aria-label={t.menu}
            >
              <Menu size={18} />
            </button>
          </nav>
        </div>

        {/* Hero content */}
        <div className="relative z-20 flex-1 flex flex-col justify-end mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
          <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">
            {t.brand}
          </p>
          <h1
            className="font-medium text-gray-900"
            style={{
              fontSize: "clamp(1.75rem,7vw,4.2rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            {t.heroL1}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            {t.heroL2}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            {t.heroL3}
          </h1>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
            <RollButton variant="orange">{t.start}</RollButton>
            <div
              className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-[4px] px-3 sm:px-4 py-2 transition-shadow"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            >
              <PartnerIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]" />
              <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
                {t.partner}
              </span>
              <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded">
                {t.featured}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMenuOpen(false)}
            />
            <div
              className="absolute left-0 right-0 bottom-0 bg-white rounded-2xl mx-3 mb-3 p-6 animate-in"
              style={{
                animation:
                  "slideUp 0.5s cubic-bezier(0.32,0.72,0,1) forwards",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
                  <Clock size={14} /> {time} {fa ? "لندن" : "London"}
                </span>
                <button
                  className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center"
                  onClick={() => setMenuOpen(false)}
                  aria-label={t.close}
                >
                  <X size={18} />
                </button>
              </div>
              <ul className="flex flex-col gap-3 mb-6">
                {t.nav.map((n) => (
                  <li key={n}>
                    <a href="#" className="text-[28px] leading-[32px] font-medium text-gray-900">
                      {n}
                    </a>
                  </li>
                ))}
              </ul>
              <RollButton variant="orange">{t.start}</RollButton>
            </div>
            <style>{`@keyframes slideUp { from { transform: translateY(100%);} to { transform: translateY(0);} }`}</style>
          </div>
        )}
      </section>

      {/* ===================== ABOUT ===================== */}
      <section className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        <div className="mx-auto max-w-[1440px]">
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
              1
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
              {t.intro}
            </span>
          </div>

          <h2
            className="px-5 sm:px-8 lg:px-12 font-medium text-gray-900 mb-12 sm:mb-16 lg:mb-28 whitespace-pre-line"
            style={{
              fontSize: "clamp(1.5rem,4vw,3.2rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            {t.aboutTitle}
          </h2>

          {/* Mobile/tablet stacked */}
          <div className="lg:hidden px-5 sm:px-8 flex flex-col gap-8">
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900">
              {t.aboutP}
            </p>
            <RollButton variant="orange">{t.aboutBtn}</RollButton>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85"
                alt="Studio"
                className="sm:w-[45%] w-full aspect-[438/346] object-cover rounded-xl sm:rounded-2xl"
              />
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85"
                alt="Studio team"
                className="sm:w-[55%] w-full aspect-[900/600] object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-12">
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85"
              alt="Studio"
              className="self-end w-full aspect-[438/346] object-cover rounded-2xl"
            />
            <div className="self-start flex flex-col justify-end items-end gap-6">
              <p className="text-[16px] sm:text-[18px] leading-[1.65] font-medium text-gray-900 text-right max-w-[28rem]">
                {t.aboutP}
              </p>
              <RollButton variant="orange">{t.aboutBtn}</RollButton>
            </div>
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85"
              alt="Studio team"
              className="self-end w-full aspect-[3/2] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===================== CASE STUDIES ===================== */}
      <section className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
              2
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
              {t.cases}
            </span>
          </div>

          <h2
            className="px-5 sm:px-8 lg:px-12 font-medium text-gray-900 mb-10 sm:mb-14 lg:mb-16"
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
              <div className="relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] group cursor-pointer">
                <video
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] bg-white rounded-full flex items-center px-2.5 overflow-hidden transition-all duration-300 ease-in-out">
                  <LinkIcon
                    size={14}
                    className="text-gray-900 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  />
                  <span className="ml-2 text-[13px] font-medium text-gray-900 opacity-0 group-hover:opacity-100 delay-100 transition-opacity whitespace-nowrap">
                    {t.learn}
                  </span>
                </div>
              </div>
              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
                {t.c1desc}
              </p>
              <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
                {t.c1title}
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] group cursor-pointer">
                <video
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[168px] bg-gray-900 rounded-full flex items-center px-2.5 overflow-hidden transition-all duration-300 ease-in-out">
                  <ArrowRight
                    size={14}
                    className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  />
                  <span className="ml-2 text-[13px] font-medium text-white opacity-0 group-hover:opacity-100 delay-100 transition-opacity whitespace-nowrap">
                    {t.view}
                  </span>
                </div>
              </div>
              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
                {t.c2desc}
              </p>
              <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
                {t.c2title}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ITSupportPage = () => (
  <LanguageProvider>
    <ITSupportInner />
  </LanguageProvider>
);

export default ITSupportPage;
