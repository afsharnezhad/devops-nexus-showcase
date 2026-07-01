import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/lib/i18n";
import devopsLogo from "@/assets/devops-logo-dark.png";

interface ServiceNavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ServiceNavigation = ({ darkMode, toggleDarkMode }: ServiceNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const nav = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t("home"), href: "/home", isRoute: true, hash: "" },
    { label: t("itSupportNav"), href: "/it-support", isRoute: true, hash: "" },
    { label: t("devopsNav"), href: "/devops", isRoute: true, hash: "" },
    { label: t("clients"), href: "/home", isRoute: true, hash: "#clients" },
    { label: t("about"), href: "/home", isRoute: true, hash: "#about" },
  ];

  const toggleLanguage = () => {
    const newLanguage: Language = language === "en" ? "fa" : "en";
    setLanguage(newLanguage);
  };

  const handleNavClick = (item: typeof menuItems[number]) => {
    setIsOpen(false);
    if (item.hash) {
      nav(item.href);
      setTimeout(() => {
        const el = document.querySelector(item.hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return;
    }
    nav(item.href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="/home"
            onClick={(e) => { e.preventDefault(); nav("/home"); }}
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">AUTO<span className="text-primary">|</span>OPS</span>
            </div>
          </motion.a>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-1.5">
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-xl">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl rounded-2xl mt-2 border border-border"
            >
              <div className="flex flex-col p-4 gap-2">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-left px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    whileHover={{ x: 8 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default ServiceNavigation;
