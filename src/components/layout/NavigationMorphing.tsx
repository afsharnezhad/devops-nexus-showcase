import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/lib/i18n";

interface NavigationMorphingProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavigationMorphing = ({ darkMode, toggleDarkMode }: NavigationMorphingProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [hoverItem, setHoverItem] = useState<number | null>(null);
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
    { name: t('home'), href: "#home" },
    { name: t('about'), href: "#about" },
    { name: t('services'), href: "#services" },
    { name: t('clients'), href: "#clients" },
    { name: t('blog'), href: "#blog" },
    { name: t('contact'), href: "#contact" },
  ];

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'fa' : 'en';
    setLanguage(newLanguage);
  };

  const scrollToSection = (href: string, index: number) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveItem(index);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-border/20"
          : "bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Animated Logo */}
          <div className="flex-shrink-0 group">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              DevOps Pro
            </h1>
          </div>

          {/* Desktop Navigation with Morphing Bar */}
          <div className="hidden md:block relative">
            <div className="flex items-center space-x-1 p-2 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/20">
              {/* Morphing Background Indicator */}
              <div 
                className="absolute h-10 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-xl transition-all duration-500 ease-out"
                style={{
                  width: `${100 / menuItems.length}%`,
                  left: `${(hoverItem !== null ? hoverItem : activeItem) * (100 / menuItems.length)}%`,
                  opacity: hoverItem !== null || activeItem >= 0 ? 1 : 0,
                }}
              />
              
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, index)}
                  onMouseEnter={() => setHoverItem(index)}
                  onMouseLeave={() => setHoverItem(null)}
                  className={`
                    relative z-10 px-6 py-2 text-sm font-medium transition-all duration-300
                    ${index === activeItem ? 'text-primary' : 'text-foreground'}
                    hover:text-primary
                  `}
                >
                  {/* Individual Item Glow */}
                  <div className={`
                    absolute inset-0 rounded-lg opacity-0 transition-all duration-300
                    ${index === hoverItem ? 'opacity-100 bg-primary/10 scale-110' : ''}
                  `} />
                  
                  {/* Text with Letter Spacing Animation */}
                  <span className={`
                    transition-all duration-300
                    ${index === hoverItem ? 'tracking-wider' : 'tracking-normal'}
                  `}>
                    {item.name}
                  </span>
                  
                  {/* Active Indicator Dot */}
                  {index === activeItem && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Control Panel */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 p-2 rounded-xl bg-background/30 backdrop-blur-sm border border-border/20">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="px-3 py-1.5 rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                <Globe className="h-4 w-4 mr-1" />
                <span className="text-xs font-medium">{language.toUpperCase()}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-1.5 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-background/30 backdrop-blur-sm border border-border/20"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div className={`
        md:hidden overflow-hidden transition-all duration-500 ease-out
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-4 py-6 bg-background/95 backdrop-blur-xl border-t border-border/20">
          {menuItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href, index)}
              className={`
                block w-full text-left px-4 py-3 mb-2 rounded-xl text-base font-medium
                transition-all duration-300 transform
                ${index === activeItem ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'}
                hover:translate-x-2
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </button>
          ))}
          
          <div className="flex gap-2 mt-6 pt-4 border-t border-border/20">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex-1 rounded-xl bg-background/50"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="flex-1 rounded-xl bg-background/50"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMorphing;