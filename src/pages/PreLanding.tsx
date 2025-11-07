import ShaderBackground from "@/components/ui/shader-background";
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
  return <div className="relative min-h-screen w-full overflow-hidden">
      {/* Shader Background */}
      <ShaderBackground />
      
      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} className="fixed top-6 right-6 z-50 w-12 h-12 bg-card/30 backdrop-blur-md border border-border hover:bg-card/50 transition-all rounded-full flex items-center justify-center group" aria-label="Toggle dark mode">
        {darkMode ? <Sun className="w-5 h-5 text-foreground group-hover:rotate-45 transition-transform duration-300" /> : <Moon className="w-5 h-5 text-foreground group-hover:-rotate-12 transition-transform duration-300" />}
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Trust Badge */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-lg sm:text-xl">✨</span>
            <span className="text-xs sm:text-sm text-foreground/90 font-medium text-center">
              متخصص پشتیبانی فناوری اطلاعات و علاقه‌مند به DevOps | IT Support & DevOps Professional
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-4 sm:mb-6 animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Mohammad Sadegh Afsharnezhad
          </div>
          <div className="mt-2 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            محمدصادق افشارنژاد
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-foreground/80 mb-8 sm:mb-12 max-w-3xl animate-fade-in-up px-4"> 💡 Docker | Kubernetes | Linux | Cloud Infrastructure | CI/CD Pipelines | Network Automation</p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-4xl animate-fade-in-up">
          {/* Primary Button */}
          <GradientButton onClick={() => navigate('/home')} className="text-base sm:text-lg font-semibold">
            Enter My Website
          </GradientButton>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="group relative" aria-label={link.label}>
                <FancyButton icon={link.icon} variant={link.variant} ariaLabel={link.label} />
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {link.label}
                </span>
              </a>)}
          </div>

          {/* Tech Icons Carousel */}
          <div className="mt-6 w-full max-w-3xl mx-auto">
            <TechIconsCarousel />
          </div>
        </div>
      </div>
    </div>;
};
export default PreLanding;