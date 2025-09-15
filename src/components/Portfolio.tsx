import { useState, useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference or default to light mode
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedMode) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save preference
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <TechStack />
          <About />
          <Skills />
          <Services />
          <Clients />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Portfolio;