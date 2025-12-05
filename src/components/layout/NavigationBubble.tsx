import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/lib/i18n";

interface NavigationBubbleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavigationBubble = ({ darkMode, toggleDarkMode }: NavigationBubbleProps) => {
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
    { name: t('home'), href: "#home", id: "home" },
    { name: t('about'), href: "#about", id: "about" },
    { name: t('services'), href: "#services", id: "services" },
    { name: t('clients'), href: "#clients", id: "clients" },
    { name: "Case Studies", href: "#case-studies", id: "case-studies" },
    { name: "Learning", href: "#learning", id: "learning" },
    { name: t('blog'), href: "#blog", id: "blog" },
    { name: t('contact'), href: "#contact", id: "contact" },
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
      {/* Floating Bubble Navigation */}
      <nav className="fixed top-[88px] left-1/2 transform -translate-x-1/2 z-[100]">
        <div 
          className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 ${
            isScrolled 
              ? "bg-background/90 backdrop-blur-xl shadow-2xl border border-border/50" 
              : "bg-background/70 backdrop-blur-lg shadow-lg border border-border/30"
          }`}
        >
          {menuItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href, item.id)}
              className={`
                relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-500
                hover:scale-110 hover:-translate-y-1 group
                ${activeItem === item.id ? 'text-primary-foreground' : 'text-foreground hover:text-primary'}
              `}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Bubble Background */}
              <div 
                className={`
                  absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20
                  ${activeItem === item.id ? 'opacity-100 bg-primary' : ''}
                `}
              />
              
              {/* Magnetic Glow Effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 bg-primary/20 blur-xl scale-150" />
              
              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" />
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-secondary/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce" style={{ animationDelay: '0.2s' }} />
              
              <span className="relative z-10">{item.name}</span>
            </button>
          ))}
          
          {/* Control Bubbles */}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border/30">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/10"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/10"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-[84px] right-4 z-[100] md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-background/80 backdrop-blur-lg shadow-lg border border-border/50"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        
        {isOpen && (
          <div className="absolute top-16 right-0 w-48 p-4 bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 animate-scale-in">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.id)}
                className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
            <div className="flex gap-2 mt-4 pt-4 border-t border-border/30">
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
        )}
      </nav>
    </>
  );
};

export default NavigationBubble;