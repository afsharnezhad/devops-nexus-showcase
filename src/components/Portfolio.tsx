import { useState, useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SocialStoriesBar from "@/components/layout/SocialStoriesBar";
import NavigationBubble from "@/components/layout/NavigationBubble";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import BlogCtaBanner from "@/components/sections/BlogCtaBanner";
import Footer from "@/components/layout/Footer";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedMode) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <SocialStoriesBar />
        <NavigationBubble darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="pt-[160px] lg:pt-[170px]">
          <section id="home">
            <Hero />
          </section>
          <section id="clients">
            <Clients />
          </section>
          <section id="about">
            <About />
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
