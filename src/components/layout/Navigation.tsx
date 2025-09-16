import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/lib/i18n";

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation = ({ darkMode, toggleDarkMode }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-professional"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-button bg-clip-text text-transparent">
              DevOps Pro
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`ml-10 flex items-baseline ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle, Theme Toggle & Mobile Menu Button */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="p-2 flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium">
                {language === 'en' ? (
                  <>EN | <span className="text-muted-foreground">FA</span></>
                ) : (
                  <><span className="text-muted-foreground">EN</span> | FA</>
                )}
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className={`px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border ${isRTL ? 'text-right' : 'text-left'}`}>
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-foreground hover:text-primary hover:bg-muted block px-3 py-2 text-base font-medium w-full rounded-md transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;