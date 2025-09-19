import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/lib/i18n";

interface NavigationMagneticProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavigationMagnetic = ({ darkMode, toggleDarkMode }: NavigationMagneticProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { language, setLanguage } = useLanguage();
  const { t, isRTL } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const menuItems = [
    { name: t('home'), href: "#home", id: "home" },
    { name: t('about'), href: "#about", id: "about" },
    { name: t('services'), href: "#services", id: "services" },
    { name: t('clients'), href: "#clients", id: "clients" },
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
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${isScrolled 
        ? 'bg-background/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-b border-border/10' 
        : 'bg-transparent'
      }
    `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Minimalist Logo */}
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="relative">
              <h1 className="text-xl font-light tracking-wide text-foreground group-hover:text-primary transition-all duration-300">
                DevOps<span className="font-semibold text-primary">Pro</span>
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
            </div>
          </div>

          {/* Desktop Magnetic Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.id)}
                  className={`
                    relative group px-3 py-2 text-sm font-medium transition-all duration-300
                    ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}
                  `}
                  style={{
                    transform: `translate(${Math.sin(mousePosition.x * 0.001 + index) * 2}px, ${Math.cos(mousePosition.y * 0.001 + index) * 1}px)`,
                  }}
                >
                  {/* Magnetic Field Effect */}
                  <div className="absolute inset-0 rounded-lg bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  
                  {/* Underline Animation */}
                  <div className={`
                    absolute -bottom-1 left-0 h-px bg-gradient-to-r from-primary via-secondary to-primary
                    transition-all duration-300 origin-left
                    ${isActive ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-0 group-hover:opacity-100'}
                  `} />
                  
                  {/* Text with Letter Spacing */}
                  <span className={`
                    relative z-10 transition-all duration-300
                    ${isActive ? 'tracking-wide' : 'tracking-normal group-hover:tracking-wide'}
                  `}>
                    {item.name}
                  </span>
                  
                  {/* Active Dot Indicator */}
                  {isActive && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  )}
                  
                  {/* Magnetic Particles */}
                  <div className={`
                    absolute top-0 right-0 w-px h-px bg-primary rounded-full opacity-0 
                    group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping
                  `} style={{ animationDelay: `${index * 100}ms` }} />
                </button>
              );
            })}
          </div>

          {/* Minimalist Controls */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="p-2 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
              >
                <Globe className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="ml-1 text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {language.toUpperCase()}
                </span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="relative">
                  {darkMode ? (
                    <Sun className="h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
                  ) : (
                    <Moon className="h-4 w-4 group-hover:-rotate-12 transition-transform duration-300" />
                  )}
                </div>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-all duration-300"
              >
                <div className="relative w-5 h-5">
                  <div className={`
                    absolute w-5 h-px bg-foreground transition-all duration-300 origin-center
                    ${isOpen ? 'rotate-45 top-2' : 'top-1'}
                  `} />
                  <div className={`
                    absolute w-5 h-px bg-foreground transition-all duration-300 top-2
                    ${isOpen ? 'opacity-0' : 'opacity-100'}
                  `} />
                  <div className={`
                    absolute w-5 h-px bg-foreground transition-all duration-300 origin-center
                    ${isOpen ? '-rotate-45 top-2' : 'top-3'}
                  `} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Magnetic Effect */}
      <div className={`
        md:hidden overflow-hidden transition-all duration-500 ease-out
        ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="bg-background/98 backdrop-blur-2xl border-t border-border/10">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.id)}
                  className={`
                    block w-full text-left px-4 py-3 rounded-lg text-base font-medium
                    transition-all duration-300 group relative
                    ${activeItem === item.id 
                      ? 'text-primary bg-primary/5' 
                      : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                  }}
                >
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 rounded-r" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="flex gap-2 mt-6 pt-4 border-t border-border/10">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex-1 rounded-lg hover:bg-primary/5"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language.toUpperCase()}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="flex-1 rounded-lg hover:bg-primary/5"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMagnetic;