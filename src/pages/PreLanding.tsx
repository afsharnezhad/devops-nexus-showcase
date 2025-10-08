import { PortfolioPage } from "@/components/ui/starfall-portfolio-landing";
import { Linkedin, Github, Send, Mail, Phone, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import autoopsLogo from "@/assets/autoops-logo-new.png";
import { GradientButton } from "@/components/ui/gradient-button";
import FancyButton from "@/components/ui/shiny-button";

const PreLanding = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      // Check system preference
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/afsharnezhad", label: "LinkedIn", variant: "indigo" as const },
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/afsharnezhad", label: "GitHub", variant: "default" as const },
    { icon: <Send className="w-6 h-6" />, href: "https://t.me/eafshar", label: "Telegram", variant: "indigo" as const },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:mo.afsharnezhad@gmail.com", label: "Email", variant: "red" as const },
    { icon: <Phone className="w-6 h-6" />, href: "tel:+989126626282", label: "Phone", variant: "green" as const },
  ];

  const portfolioData = {
    logo: {
      initials: (
        <div className="w-24 h-24 rounded-full border-2 border-primary/30 bg-background/50 backdrop-blur-sm flex items-center justify-center p-3 shadow-lg">
          <img src={autoopsLogo} alt="AutoOps Logo" className="w-full h-full object-contain" />
        </div>
      ),
      name: '',
    },
    navLinks: [],
    darkModeToggle: (
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-card/30 backdrop-blur-md border border-border hover:bg-card/50 transition-all rounded-full flex items-center justify-center group"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-foreground group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-foreground group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </button>
    ),
    hero: {
      titleLine1: (
        <div className="flex items-center justify-between gap-8 max-w-6xl mx-auto px-8">
          {/* Left Side - Social Links */}
          <div className="flex flex-col gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={link.label}
              >
                <FancyButton 
                  icon={link.icon}
                  variant={link.variant}
                  ariaLabel={link.label}
                />
                <span className="absolute left-20 top-1/2 -translate-y-1/2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Center - Text Content */}
          <div className="flex-1 text-center space-y-4">
            {/* English */}
            <div>
              <p className="text-xl font-light mb-2">Hi, I'm</p>
              <p className="text-3xl md:text-4xl font-bold mb-3">Mohammad Sadegh Afsharnezhad Mehrabi</p>
              <p className="text-xl md:text-2xl bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent mb-4">
                IT Support & DevOps Professional
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Helping people solve technical problems and build smarter systems.
              </p>
            </div>
            
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />
            
            {/* Persian Section */}
            <div className="text-center font-vazirmatn" dir="rtl">
              <p className="text-xl font-light mb-2">سلام، من</p>
              <p className="text-3xl md:text-4xl font-bold mb-3">محمدصادق افشارنژاد مهرابی</p>
              <p className="text-xl md:text-2xl bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent mb-4">
                متخصص پشتیبانی فناوری اطلاعات و علاقه‌مند به DevOps
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                به افراد کمک می‌کنم مشکلات فنی‌شان را حل کنند و سیستم‌های هوشمندتری بسازند.
              </p>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex flex-col items-center">
            <div className="w-56 h-72 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg hover:scale-105 transition-transform duration-300">
              <img 
                src="/professional-photo.png" 
                alt="Mohammad Sadegh Afsharnezhad Mehrabi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
      titleLine2Gradient: '',
      subtitle: '',
    },
    ctaButtons: {
      primary: {
        label: (
          <GradientButton 
            onClick={() => navigate('/home')}
            className="text-lg font-semibold"
          >
            Enter My Website / ورود به سایت من
          </GradientButton>
        ),
      },
    },
    projects: [],
    stats: [],
    showAnimatedBackground: true,
  };

  return <PortfolioPage {...portfolioData} />;
};

export default PreLanding;
