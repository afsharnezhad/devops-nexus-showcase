import { useState, useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SocialStoriesBar from "@/components/layout/SocialStoriesBar";
import NavigationBubble from "@/components/layout/NavigationBubble";
import HeroCinematic from "@/components/cinema/HeroCinematic";
import AboutCinematic from "@/components/cinema/AboutCinematic";
import FeaturesCinematic from "@/components/cinema/FeaturesCinematic";
import Clients from "@/components/sections/Clients";
import ServicesBanner from "@/components/sections/ServicesBanner";
import BlogCtaBanner from "@/components/sections/BlogCtaBanner";
import Footer from "@/components/layout/Footer";

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
        <main>
          <section id="home">
            <HeroCinematic />
          </section>
          <section id="about">
            <AboutCinematic />
          </section>
          <section id="features">
            <FeaturesCinematic />
          </section>
          <section id="services">
            <ServicesBanner />
          </section>
          <section id="clients">
            <Clients />
          </section>
          <section id="blog-cta">
            <BlogCtaBanner />
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Portfolio;
