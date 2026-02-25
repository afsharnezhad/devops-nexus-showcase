import { useState } from "react";
import CorporateNavigation from "@/components/corporate/CorporateNavigation";
import CorporateHero from "@/components/corporate/CorporateHero";
import CorporateClients from "@/components/corporate/CorporateClients";

import CorporateLearningHub from "@/components/corporate/CorporateLearningHub";
import CorporateBlog from "@/components/corporate/CorporateBlog";
import CorporateAbout from "@/components/corporate/CorporateAbout";
import CorporateContact from "@/components/corporate/CorporateContact";
import CorporateFooter from "@/components/corporate/CorporateFooter";

const CorporateDevOps = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <CorporateNavigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <CorporateHero />
        <CorporateClients />
        
        <CorporateLearningHub />
        <CorporateBlog />
        <CorporateAbout />
        <CorporateContact />
        <CorporateFooter />
      </div>
    </div>
  );
};

export default CorporateDevOps;
