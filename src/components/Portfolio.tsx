import { useState, useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NavigationShowcase from "@/components/NavigationShowcase";

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
        <NavigationShowcase />
      </div>
    </LanguageProvider>
  );
};

export default Portfolio;