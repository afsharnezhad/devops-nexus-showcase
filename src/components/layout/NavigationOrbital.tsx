import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/lib/i18n";

interface NavigationOrbitalProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavigationOrbital = ({ darkMode, toggleDarkMode }: NavigationOrbitalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const { language, setLanguage } = useLanguage();
  const { t, isRTL } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: t('home'), href: "#home", id: "home", angle: -60 },
    { name: t('about'), href: "#about", id: "about", angle: -36 },
    { name: t('services'), href: "#services", id: "services", angle: -12 },
    { name: t('clients'), href: "#clients", id: "clients", angle: 12 },
    { name: t('blog'), href: "#blog", id: "blog", angle: 36 },
    { name: t('contact'), href: "#contact", id: "contact", angle: 60 },
  ];

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'fa' : 'en';
    setLanguage(newLanguage);
  };

  const scrollToSection = (href: string, id: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveItem(id);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Orbital Navigation */}
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-700
        ${isScrolled ? 'bg-background/90 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}
      `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo with Orbital Ring */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 animate-pulse" />
              <div className="absolute inset-2 w-12 h-12 rounded-full border border-primary/10 group-hover:border-primary/30 transition-all duration-700" style={{ animationDelay: '0.3s' }} />
              <h1 className="relative z-10 text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent p-4">
                DevOps Pro
              </h1>
            </div>

            {/* Desktop Orbital Navigation */}
            <div className="hidden md:block relative">
              <div className="relative w-96 h-20 flex items-center justify-center">
                {/* Orbital Path */}
                <div className="absolute inset-0 border border-primary/10 rounded-full opacity-50" />
                <div className="absolute inset-2 border border-primary/5 rounded-full opacity-30" />
                
                {menuItems.map((item, index) => {
                  const isActive = activeItem === item.id;
                  const radius = 150;
                  const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((item.angle * Math.PI) / 180) * 20;
                  
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href, item.id)}
                      className={`
                        absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500
                        px-4 py-2 rounded-full text-sm font-medium group
                        ${isActive ? 'text-primary-foreground bg-primary shadow-lg' : 'text-foreground hover:text-primary'}
                        hover:scale-110 hover:-translate-y-1
                      `}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        animationDelay: `${index * 150}ms`,
                      }}
                    >
                      {/* Orbital Glow */}
                      <div className={`
                        absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500
                        bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-sm scale-150
                      `} />
                      
                      {/* Connection Line */}
                      <div className={`
                        absolute w-px bg-gradient-to-r from-transparent via-primary/30 to-transparent
                        transition-all duration-500 opacity-0 group-hover:opacity-100
                        ${x > 0 ? 'left-0 -translate-x-full' : 'right-0 translate-x-full'}
                      `} 
                      style={{ 
                        height: `${Math.abs(x / 3)}px`,
                        transform: `rotate(${item.angle}deg)`
                      }} />
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/60 rounded-full animate-pulse" />
                      )}
                      
                      <span className="relative z-10">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Controls with Orbital Theme */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="relative p-3 rounded-full hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                  <Globe className="h-4 w-4 relative z-10" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {language.toUpperCase()}
                  </span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="relative p-3 rounded-full hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                  {darkMode ? <Sun className="h-4 w-4 relative z-10" /> : <Moon className="h-4 w-4 relative z-10" />}
                </Button>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-3 rounded-full bg-background/30 backdrop-blur-sm border border-border/20"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/20 animate-fade-in">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href, item.id)}
                    className={`
                      block w-full text-left px-4 py-3 rounded-xl text-base font-medium
                      transition-all duration-300 transform hover:translate-x-2
                      ${activeItem === item.id ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'}
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              
              <div className="flex gap-2 mt-6 pt-4 border-t border-border/20">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex-1 rounded-xl"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="flex-1 rounded-xl"
                >
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavigationOrbital;