import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Hls from "hls.js";
import { useTranslation } from "@/hooks/useTranslation";
import devopsLogo from "@/assets/devops-logo-white.png";

const VIDEO_SRC = "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";

const NAV_LINKS = [
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "TECH STACK", href: "#stack" },
  { label: "CONTACT", href: "#contact" },
];

/**
 * Afshar DevOps — cinematic infrastructure command-center hero.
 * HLS background video + liquid-glass status card + gradient grid + enterprise nav.
 */
const CinematicHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isRTL } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls: Hls | null = null;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_SRC;
    } else if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: false });
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
    }
    video.play().catch(() => {});
    return () => { hls?.destroy(); };
  }, []);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "#050807", fontFamily: "'Plus Jakarta Sans','Inter',sans-serif" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* HLS Background video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.6 }}
      />

      {/* Gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(90deg,#050807 0%, rgba(5,8,7,0.4) 50%, transparent 100%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(0deg,#050807 0%, rgba(5,8,7,0.2) 40%, transparent 100%)" }}
      />

      {/* Vertical grid lines + particles (desktop) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {[25, 50, 75].map((p) => (
          <div
            key={p}
            className="absolute top-0 bottom-0 w-px"
            style={{ left: `${p}%`, background: "rgba(255,255,255,0.1)" }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#5ed29c] opacity-70"
            style={{
              left: `${[25, 50, 75][i % 3]}%`,
              top: `${(i * 13) % 100}%`,
              boxShadow: "0 0 8px #5ed29c",
              animation: `nxParticle ${6 + (i % 4)}s linear infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Cloud core glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[120%] h-[60%] max-w-[1600px]">
        <svg viewBox="0 0 1200 600" className="w-full h-full">
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5ed29c" stopOpacity="0.55" />
              <stop offset="45%" stopColor="#00c8ff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0d3b33" stopOpacity="0" />
            </radialGradient>
            <filter id="coreBlur"><feGaussianBlur stdDeviation="25" /></filter>
          </defs>
          <ellipse cx="600" cy="300" rx="520" ry="160" fill="url(#coreGlow)" filter="url(#coreBlur)">
            <animate attributeName="rx" values="500;560;500" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.85;1;0.85" dur="4s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>

      {/* ============ ENTERPRISE NAV ============ */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span
              className="relative w-11 h-11 rounded-xl grid place-items-center p-1.5"
              style={{
                background: "linear-gradient(135deg,rgba(94,210,156,0.18),rgba(0,200,255,0.12))",
                border: "1px solid rgba(94,210,156,0.35)",
              }}
            >
              <img src={devopsLogo} alt="Devops" className="w-full h-full object-contain" />
              <span className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ boxShadow: "0 0 14px #5ed29c" }} />
            </span>
            <span
              className="text-white font-bold tracking-[3px] text-[13px]"
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              AFSHAR<span className="text-[#5ed29c]">·</span>DEVOPS
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-[13px] tracking-[1.5px] font-medium text-white/80 hover:text-[#5ed29c] transition-colors group"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5ed29c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-white/10 text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center md:hidden"
          style={{ background: "rgba(5,8,7,0.92)", backdropFilter: "blur(20px)" }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="absolute top-5 right-6 w-10 h-10 grid place-items-center rounded-lg border border-white/10 text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-bold tracking-[3px] hover:text-[#5ed29c] transition-colors"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  animation: `nxFadeUp 0.5s ${i * 0.08}s both`,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* ============ CONTENT ============ */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 md:px-10 flex flex-col items-center text-center pt-24">
        {/* Floating liquid-glass status card */}
        <div
          className="relative w-[200px] h-[200px] rounded-2xl mb-10 -translate-y-[50px] p-5 flex flex-col justify-between"
          style={{
            background: "rgba(255,255,255,0.01)",
            backgroundBlendMode: "luminosity",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          <span
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              padding: "1.4px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0))",
              WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="relative">
            <div className="text-[12px] tracking-[2px] text-[#5ed29c] font-semibold" style={{ fontFamily: "'Inter',sans-serif" }}>
              [ LIVE SYSTEM ]
            </div>
            <div className="mt-3 text-[18px] text-white font-medium leading-snug" style={{ fontFamily: "'Inter',sans-serif" }}>
              Cloud{" "}
              <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontWeight: 400 }}>
                Infrastructure
              </span>{" "}
              Online
            </div>
          </div>
          <p className="relative text-[11px] leading-relaxed text-white/70" style={{ fontFamily: "'Inter',sans-serif" }}>
            Kubernetes clusters, CI/CD pipelines, and cloud services monitored in real-time.
          </p>
        </div>

        {/* Eyebrow */}
        <div
          className="text-[11px] font-bold tracking-[3px] mb-5"
          style={{ color: "#5ed29c", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
        >
          CLOUD • AUTOMATION • DEVOPS ENGINEERING
        </div>

        {/* Headline */}
        <h1
          className="font-extrabold uppercase tracking-tight text-white max-w-[1000px]"
          style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 1.02 }}
        >
          Build the future of cloud infrastructure<span style={{ color: "#5ed29c" }}>.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-[14px] leading-relaxed text-white/70 max-w-[512px]" style={{ fontFamily: "'Inter',sans-serif" }}>
          Design scalable cloud architectures, automate deployments, and engineer resilient
          infrastructure using Kubernetes, CI/CD pipelines, and modern DevOps practices.
        </p>

        {/* CTA */}
        <button
          className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold uppercase text-[13px] tracking-wider transition-all duration-300 hover:scale-[1.03]"
          style={{
            background: "#5ed29c",
            color: "#070b0a",
            boxShadow: "0 0 0 rgba(94,210,156,0)",
            fontFamily: "'Inter',sans-serif",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px rgba(94,210,156,0.55)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 rgba(94,210,156,0)")}
        >
          Enter the Command Center
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <style>{`
        @keyframes nxParticle {
          0% { transform: translateY(0); opacity: 0; }
          15% { opacity: 0.9; }
          85% { opacity: 0.9; }
          100% { transform: translateY(-80vh); opacity: 0; }
        }
        @keyframes nxFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default CinematicHero;
