import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t, isRTL } = useTranslation();
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block animate-slide-up">
              Mohammad Sadegh
            </span>
            <span className="block animate-slide-up delay-200">
              Afsharnezhad Mehrabi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 animate-slide-up delay-300">
            {t('heroTitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-400">
            {t('heroDescription')}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 animate-bounce-in delay-500 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-hero hover-lift"
            >
              {t('getStarted')}
              <ArrowRight className={`${isRTL ? 'mr-2 flip-rtl' : 'ml-2'} h-5 w-5`} />
            </Button>
            
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-white hover:bg-white/10 p-3"
                asChild
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-white hover:bg-white/10 p-3"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-white hover:bg-white/10 p-3"
                asChild
              >
                <a
                  href="mailto:info@mysite.com"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;