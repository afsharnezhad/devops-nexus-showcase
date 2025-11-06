import Hero from "@/components/ui/animated-shader-hero";
import { Linkedin, Github, Send, Mail, Phone, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import FancyButton from "@/components/ui/shiny-button";
import TechIconsCarousel from "@/components/ui/tech-icons-carousel";
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
  const socialLinks = [{
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://linkedin.com/in/afsharnezhad",
    label: "LinkedIn",
    variant: "indigo" as const
  }, {
    icon: <Github className="w-6 h-6" />,
    href: "https://github.com/afsharnezhad",
    label: "GitHub",
    variant: "default" as const
  }, {
    icon: <Send className="w-6 h-6" />,
    href: "https://t.me/eafshar",
    label: "Telegram",
    variant: "indigo" as const
  }, {
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:mo.afsharnezhad@gmail.com",
    label: "Email",
    variant: "red" as const
  }, {
    icon: <Phone className="w-6 h-6" />,
    href: "tel:+989126626282",
    label: "Phone",
    variant: "green" as const
  }];

  return (
    <>
      {/* Dark Mode Toggle */}
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

      {/* Animated Hero with Shader Background */}
      <Hero
        trustBadge={{
          text: "متخصص پشتیبانی فناوری اطلاعات و علاقه‌مند به DevOps | IT Support & DevOps Professional",
          icons: ["✨"]
        }}
        headline={{
          line1: "Mohammad Sadegh Afsharnezhad",
          line2: "محمدصادق افشارنژاد"
        }}
        subtitle="Helping people solve technical problems and build smarter systems | به افراد کمک می‌کنم مشکلات فنی‌شان را حل کنند و سیستم‌های هوشمندتری بسازند"
        buttons={{
          primary: (
            <>
              <GradientButton onClick={() => navigate('/home')} className="text-lg font-semibold">
                Enter My Website / ورود به سایت من
              </GradientButton>
              {/* Tech Icons Carousel */}
              <div className="mt-6 w-full max-w-3xl mx-auto">
                <TechIconsCarousel />
              </div>
            </>
          ),
          secondary: (
            <div className="flex gap-3">
              {socialLinks.map(link => (
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
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          )
        }}
      />
    </>
  );
};
export default PreLanding;