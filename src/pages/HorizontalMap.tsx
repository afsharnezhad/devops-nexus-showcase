import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JourneyIndicator, { sections } from "@/components/layout/JourneyIndicator";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Section content components
import HeroSection from "@/components/map-sections/MapHome";
import ITSupportSection from "@/components/map-sections/MapITSupport";
import DevOpsSection from "@/components/map-sections/MapDevOps";
import ClientsSection from "@/components/map-sections/MapClients";
import AboutSection from "@/components/map-sections/MapAbout";

const sectionComponents = [HeroSection, ITSupportSection, DevOpsSection, ClientsSection, AboutSection];

const HorizontalMap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const [darkMode, setDarkMode] = useState(true);
  const isAnimating = useRef(false);
  const touchStart = useRef<number | null>(null);

  // Dark mode
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) setDarkMode(saved === "true");
    else setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const navigateTo = useCallback((index: number) => {
    if (index < 0 || index >= sections.length || index === activeIndex || isAnimating.current) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    isAnimating.current = true;
    setTimeout(() => { isAnimating.current = false; }, 600);
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") navigateTo(activeIndex + 1);
      else if (e.key === "ArrowLeft") navigateTo(activeIndex - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, navigateTo]);

  // Touch/swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) navigateTo(activeIndex + 1);
      else navigateTo(activeIndex - 1);
    }
    touchStart.current = null;
  };

  // Mouse wheel horizontal navigation
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (Math.abs(e.deltaY) > 30) {
          if (e.deltaY > 0) navigateTo(activeIndex + 1);
          else navigateTo(activeIndex - 1);
        }
      }, 50);
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => { window.removeEventListener("wheel", handleWheel); clearTimeout(timeout); };
  }, [activeIndex, navigateTo]);

  const ActiveComponent = sectionComponents[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden bg-background text-foreground relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dark mode toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full bg-card/30 backdrop-blur-md border border-border/50 hover:bg-card/50"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      {/* Arrow navigation hints */}
      {activeIndex > 0 && (
        <button
          onClick={() => navigateTo(activeIndex - 1)}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-card/30 backdrop-blur-md border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card/50 transition-all"
        >
          ←
        </button>
      )}
      {activeIndex < sections.length - 1 && (
        <button
          onClick={() => navigateTo(activeIndex + 1)}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-card/30 backdrop-blur-md border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card/50 transition-all"
        >
          →
        </button>
      )}

      {/* Sliding content */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.8 }}
          className="absolute inset-0 overflow-y-auto pb-28"
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>

      {/* Journey indicator */}
      <JourneyIndicator activeIndex={activeIndex} onNavigate={navigateTo} />
    </div>
  );
};

export default HorizontalMap;
