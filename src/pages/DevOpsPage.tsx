import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Cloud, Server, GitBranch, Activity, Bot, ShieldCheck,
  GitCommit, Hammer, FlaskConical, Package, Rocket, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceNavigation from "@/components/layout/ServiceNavigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import BlogCtaBanner from "@/components/sections/BlogCtaBanner";

import CinematicHero from "@/components/devops/CinematicHero";
import devopsOffice from "@/assets/devops-office.png";

const techIcons = [
  { i: "🐳", n: "Docker" }, { i: "⎈", n: "Kubernetes" }, { i: "🌍", n: "Terraform" },
  { i: "▲", n: "AWS" }, { i: "☁️", n: "Azure" }, { i: "🐧", n: "Linux" },
  { i: "📜", n: "Ansible" }, { i: "⚙️", n: "GitHub Actions" }, { i: "🤵", n: "Jenkins" },
  { i: "🔥", n: "Prometheus" },
];

const DevOpsPageInner = () => {
  const navigate = useNavigate();
  const { t, isRTL, formatNum } = useTranslation();
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Force dark mode on this page for proper visibility
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const services = [
    { icon: Cloud, t: t("nxSrvCloudT"), d: t("nxSrvCloudD") },
    { icon: Server, t: t("nxSrvK8sT"), d: t("nxSrvK8sD") },
    { icon: GitBranch, t: t("nxSrvCICDT"), d: t("nxSrvCICDD") },
    { icon: Activity, t: t("nxSrvObsT"), d: t("nxSrvObsD") },
    { icon: Bot, t: t("nxSrvAIT"), d: t("nxSrvAID") },
    { icon: ShieldCheck, t: t("nxSrvSecT"), d: t("nxSrvSecD") },
  ];

  const stages = [
    { icon: GitCommit, label: t("nxStageCommit") },
    { icon: Hammer, label: t("nxStageBuild") },
    { icon: FlaskConical, label: t("nxStageTest") },
    { icon: Package, label: t("nxStagePackage") },
    { icon: Rocket, label: t("nxStageDeploy") },
  ];

  // Pipeline state
  const [activeStage, setActiveStage] = useState(-1);
  const [passedStages, setPassedStages] = useState<Set<number>>(new Set());
  const pipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let intervalIds: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      if (cancelled) return;
      setPassedStages(new Set());
      setActiveStage(-1);
      stages.forEach((_, i) => {
        intervalIds.push(setTimeout(() => {
          if (cancelled) return;
          setActiveStage(i);
          setPassedStages((prev) => {
            const ns = new Set(prev);
            if (i > 0) ns.add(i - 1);
            return ns;
          });
        }, i * 1300 + 300));
      });
      intervalIds.push(setTimeout(() => {
        if (cancelled) return;
        setPassedStages((prev) => new Set([...prev, stages.length - 1]));
        setActiveStage(-1);
      }, stages.length * 1300 + 600));
      intervalIds.push(setTimeout(run, stages.length * 1300 + 2800));
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { run(); io.disconnect(); }
    });
    if (pipeRef.current) io.observe(pipeRef.current);
    return () => { cancelled = true; intervalIds.forEach(clearTimeout); io.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const metrics = [
    { val: 99.99, suffix: "%", lbl: t("nxMetricUptime"), w: 99 },
    { val: 420, suffix: "+", lbl: t("nxMetricDeploys"), w: 84 },
    { val: 38, suffix: "ms", lbl: t("nxMetricLatency"), w: 72 },
    { val: 12, suffix: "k", lbl: t("nxMetricPods"), w: 90 },
  ];

  const projects = [
    { tag: t("nxProj1Tag"), title: t("nxProj1T"), desc: t("nxProj1D"), s1: t("nxProj1S1"), s2: t("nxProj1S2") },
    { tag: t("nxProj2Tag"), title: t("nxProj2T"), desc: t("nxProj2D"), s1: t("nxProj2S1"), s2: t("nxProj2S2") },
    { tag: t("nxProj3Tag"), title: t("nxProj3T"), desc: t("nxProj3D"), s1: t("nxProj3S1"), s2: t("nxProj3S2") },
  ];

  return (
    <div className="dark" dir={isRTL ? "rtl" : "ltr"}>
      <div className="relative min-h-screen text-[#dbe7ff] overflow-x-hidden" style={{ background: "#05070f" }}>
        {/* Three.js animated background */}
        <DevOpsScene />

        {/* Vignette overlay */}
        <div
          className="fixed inset-0 z-[1] pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 0%, transparent 60%, rgba(0,0,0,.6) 100%)" }}
        />

        <div className="relative z-[2]">
          <ServiceNavigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* CINEMATIC HERO */}
          <CinematicHero />

          {/* LEGACY HERO META */}
          <section className="relative pt-20 pb-28 px-[8vw] flex flex-col justify-center">

            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-8 gap-2 w-fit text-[#7e8bb0] hover:text-white hover:bg-white/5"
            >
              <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} /> {t("backBtn")}
            </Button>

            {/* Hero supporting image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 relative rounded-3xl overflow-hidden border border-[rgba(120,160,255,.18)] max-w-[1100px]"
              style={{ boxShadow: "0 40px 120px rgba(0,229,255,.15)" }}
            >
              <img src={devopsOffice} alt="DevOps command center" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-[#05070f]/40 to-transparent" />
            </motion.div>


            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-[880px]">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl border border-[rgba(120,160,255,.18)] backdrop-blur-xl"
                  style={{ background: "rgba(18,26,48,.45)" }}
                >
                  <div className="text-3xl font-extrabold text-white">
                    {formatNum(m.val)}<span className="text-[#00e5ff]">{m.suffix}</span>
                  </div>
                  <div className="text-[11px] text-[#7e8bb0] mt-1.5 tracking-widest">{m.lbl}</div>
                  <div className="h-1 rounded-full bg-white/5 mt-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.w}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg,#00e5ff,#19ffd0)" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section className="py-32 px-[8vw]">
            <div className="flex items-center gap-3 text-xs tracking-[4px] uppercase text-[#00e5ff] mb-5">
              <span className="w-9 h-px bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
              {t("nxServicesEyebrow")}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t("nxServicesTitle")}</h2>
            <p className="text-[#7e8bb0] max-w-2xl">{t("nxServicesLead")}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -8 }}
                    className="group p-8 rounded-2xl border border-[rgba(120,160,255,.18)] backdrop-blur-xl transition-all hover:border-[rgba(0,229,255,.4)] relative overflow-hidden"
                    style={{ background: "rgba(18,26,48,.45)" }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl grid place-items-center mb-5 border border-[rgba(120,160,255,.18)]"
                      style={{ background: "linear-gradient(135deg,rgba(0,229,255,.18),rgba(124,92,255,.18))" }}
                    >
                      <Icon className="w-7 h-7 text-[#00e5ff]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2.5">{s.t}</h3>
                    <p className="text-[#7e8bb0] text-sm">{s.d}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* PIPELINE */}
          <section className="py-32 px-[8vw]" ref={pipeRef}>
            <div className="flex items-center gap-3 text-xs tracking-[4px] uppercase text-[#00e5ff] mb-5">
              <span className="w-9 h-px bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
              {t("nxPipeEyebrow")}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">{t("nxPipeTitle")}</h2>

            <div
              className="p-8 md:p-10 rounded-3xl border border-[rgba(120,160,255,.18)] backdrop-blur-xl"
              style={{ background: "rgba(18,26,48,.45)" }}
            >
              <div className="flex items-center gap-2 flex-wrap" dir="ltr">
                {stages.map((s, i) => {
                  const Icon = s.icon;
                  const active = activeStage === i;
                  const passed = passedStages.has(i);
                  const status = passed ? t("nxStatusPassed") : active ? t("nxStatusRunning") : t("nxStatusQueued");
                  return (
                    <div key={i} className="flex items-center flex-1 min-w-[100px]">
                      <div className="flex-1 text-center">
                        <div
                          className={`w-14 h-14 rounded-full mx-auto mb-3 grid place-items-center border-2 transition-all duration-500 ${
                            active || passed
                              ? "border-[#00e5ff] shadow-[0_0_26px_rgba(0,229,255,.6)]"
                              : "border-[rgba(120,160,255,.18)]"
                          }`}
                          style={{
                            background: active || passed
                              ? "linear-gradient(135deg,rgba(0,229,255,.25),rgba(124,92,255,.2))"
                              : "rgba(10,18,38,.8)",
                          }}
                        >
                          <Icon className={`w-5 h-5 ${active || passed ? "text-[#19ffd0]" : "text-[#7e8bb0]"}`} />
                        </div>
                        <div className="text-sm font-semibold text-white">{s.label}</div>
                        <div className={`text-[11px] mt-0.5 ${active || passed ? "text-[#19ffd0]" : "text-[#7e8bb0]"}`}>
                          {status}
                        </div>
                      </div>
                      {i < stages.length - 1 && (
                        <div className="w-[60px] h-[3px] rounded-full bg-white/5 relative overflow-hidden mb-9 mx-1">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-1000"
                            style={{
                              width: passed ? "100%" : "0%",
                              background: "linear-gradient(90deg,#00e5ff,#19ffd0)",
                              boxShadow: "0 0 12px #00e5ff",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cluster pods */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[t("nxCluster1"), t("nxCluster2")].map((name, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl border border-[rgba(120,160,255,.18)] backdrop-blur-xl"
                  style={{ background: "rgba(18,26,48,.45)" }}
                >
                  <h4 className="text-xs text-[#7e8bb0] tracking-[2px] uppercase mb-5">{name}</h4>
                  <div className="grid grid-cols-6 gap-2.5">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg border border-[rgba(120,160,255,.18)] relative overflow-hidden"
                        style={{ background: "rgba(0,229,255,.06)" }}
                      >
                        <div
                          className="absolute inset-0 rounded-lg"
                          style={{
                            background: "linear-gradient(135deg,#00e5ff,#19ffd0)",
                            animation: `nxPod 4s infinite`,
                            animationDelay: `${Math.random() * 4}s`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PORTFOLIO */}
          <section className="py-32 px-[8vw]">
            <div className="flex items-center gap-3 text-xs tracking-[4px] uppercase text-[#00e5ff] mb-5">
              <span className="w-9 h-px bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
              {t("nxWorkEyebrow")}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">{t("nxWorkTitle")}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-3xl border border-[rgba(120,160,255,.18)] backdrop-blur-xl cursor-pointer hover:border-[rgba(0,229,255,.4)] transition-all"
                  style={{ background: "rgba(18,26,48,.45)" }}
                >
                  <div className="text-[11px] text-[#00e5ff] tracking-[2px] uppercase">{p.tag}</div>
                  <h3 className="text-xl font-bold text-white mt-3 mb-3">{p.title}</h3>
                  <p className="text-[#7e8bb0] text-sm">{p.desc}</p>
                  <div className="flex gap-4 mt-5 text-xs text-[#19ffd0] font-semibold">
                    <span>{p.s1}</span>
                    <span>{p.s2}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* TECH STACK */}
          <section className="py-32 px-[8vw] text-center">
            <div className="flex items-center justify-center gap-3 text-xs tracking-[4px] uppercase text-[#00e5ff] mb-5">
              <span className="w-9 h-px bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
              {t("nxStackEyebrow")}
              <span className="w-9 h-px bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t("nxStackTitle")}</h2>
            <p className="text-[#7e8bb0] max-w-xl mx-auto">{t("nxStackLead")}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-14">
              {techIcons.map((tk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="p-6 rounded-2xl border border-[rgba(120,160,255,.18)] backdrop-blur-xl transition-all hover:border-[rgba(0,229,255,.45)]"
                  style={{ background: "rgba(18,26,48,.45)" }}
                >
                  <div className="text-3xl mb-3">{tk.i}</div>
                  <div className="text-sm font-semibold text-white">{tk.n}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-28 px-[8vw] text-center">
            <Sparkles className="w-8 h-8 text-[#00e5ff] mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              {t("nxFooterTitle")}
            </h2>
            <p className="text-[#7e8bb0] mb-8">{t("nxFooterLead")}</p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-[15px] text-[#04101a]"
              style={{
                background: "linear-gradient(135deg,#00e5ff,#7c5cff)",
                boxShadow: "0 0 30px rgba(0,229,255,.35)",
              }}
            >
              {t("nxFooterCTA")}
            </button>
          </section>

          <BlogCtaBanner />
        </div>

        <style>{`
          @keyframes nxPod {
            0%, 100% { opacity: 0; transform: scale(.6); }
            50% { opacity: .5; transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  );
};

const DevOpsPage = () => (
  <LanguageProvider>
    <DevOpsPageInner />
  </LanguageProvider>
);

export default DevOpsPage;
