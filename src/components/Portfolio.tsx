import { useState, useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SocialStoriesBar from "@/components/layout/SocialStoriesBar";
import NavigationBubble from "@/components/layout/NavigationBubble";
import HeroCinematic from "@/components/cinema/HeroCinematic";
import AboutCinematic from "@/components/cinema/AboutCinematic";
import Clients from "@/components/sections/Clients";
import ServicesBanner from "@/components/sections/ServicesBanner";
import BlogCtaBanner from "@/components/sections/BlogCtaBanner";
import Footer from "@/components/layout/Footer";
import SectionGlow from "@/components/ui/section-glow";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-foreground font-almarai">
        <SocialStoriesBar />
        <NavigationBubble darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="space-y-6 md:space-y-10 px-3 sm:px-5 md:px-8 py-6">
          <SectionGlow>
            <section id="home">
              <HeroCinematic />
            </section>
          </SectionGlow>
          <SectionGlow>
            <section id="about">
              <AboutCinematic />
            </section>
          </SectionGlow>
          <SectionGlow>
            <section id="services">
              <ServicesBanner />
            </section>
          </SectionGlow>
          <SectionGlow>
            <section id="clients">
              <Clients />
            </section>
          </SectionGlow>
          <SectionGlow>
            <section id="blog-cta">
              <BlogCtaBanner />
            </section>
          </SectionGlow>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Portfolio;

