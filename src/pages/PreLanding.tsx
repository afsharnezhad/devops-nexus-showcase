import { PortfolioPage } from "@/components/ui/starfall-portfolio-landing";
import { Linkedin, Github, Send, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PreLanding = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/afsharnezhad", label: "LinkedIn", color: "#0077b5" },
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/afsharnezhad", label: "GitHub", color: "#333" },
    { icon: <Send className="w-6 h-6" />, href: "https://t.me/eafshar", label: "Telegram", color: "#0088cc" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:mo.afsharnezhad@gmail.com", label: "Email", color: "#ea4335" },
    { icon: <Phone className="w-6 h-6" />, href: "tel:+989126626282", label: "Phone", color: "#34a853" },
  ];

  const portfolioData = {
    logo: {
      initials: 'MA',
      name: 'محمدصادق افشارنژاد',
    },
    navLinks: [],
    resume: undefined,
    hero: {
      titleLine1: (
        <div className="space-y-4">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img 
                src="/professional-photo.png" 
                alt="Mohammad Sadegh Afsharnezhad Mehrabi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* English */}
          <div className="text-left sm:text-center">
            <p className="text-xl md:text-2xl font-light mb-2">Hi, I'm</p>
            <p className="text-3xl md:text-5xl font-bold mb-4">Mohammad Sadegh Afsharnezhad Mehrabi</p>
          </div>
        </div>
      ),
      titleLine2Gradient: (
        <span className="text-2xl md:text-4xl">IT Support & DevOps Professional</span>
      ),
      subtitle: (
        <div className="space-y-8">
          {/* English Description */}
          <p className="text-base md:text-lg text-left sm:text-center">
            Helping people solve technical problems and build smarter systems.
          </p>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />
          
          {/* Persian Section */}
          <div className="text-right sm:text-center font-vazirmatn" dir="rtl">
            <p className="text-xl md:text-2xl font-light mb-2">سلام، من</p>
            <p className="text-3xl md:text-5xl font-bold mb-4">محمدصادق افشارنژاد مهرابی</p>
            <p className="text-2xl md:text-4xl bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent mb-4">
              متخصص پشتیبانی فناوری اطلاعات و علاقه‌مند به DevOps
            </p>
            <p className="text-base md:text-lg">
              به افراد کمک می‌کنم مشکلات فنی‌شان را حل کنند و سیستم‌های هوشمندتری بسازند.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 bg-card/30 backdrop-blur-md border border-border hover:border-primary/50 rounded-2xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                aria-label={link.label}
              >
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.icon}
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      ),
    },
    ctaButtons: {
      primary: {
        label: 'Enter My Website / ورود به سایت من',
        onClick: () => navigate('/home'),
      },
      secondary: undefined,
    },
    projects: [],
    stats: [],
    showAnimatedBackground: true,
  };

  return <PortfolioPage {...portfolioData} />;
};

export default PreLanding;
