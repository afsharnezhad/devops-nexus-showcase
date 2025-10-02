import React from "react";
import { Mail } from "lucide-react";
import { SiLinkedin, SiGithub, SiTelegram, SiX, SiInstagram, SiYoutube } from "react-icons/si";

// Types
interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  hoverText: string;
}

interface SocialCardProps {
  title?: string;
  socialLinks?: SocialLink[];
}

// Default Social Links
const defaultSocialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/afsharnezhad",
    icon: SiLinkedin,
    gradient: "from-[#0077B5] to-[#00A0DC]",
    hoverText: "Professional Network"
  },
  {
    name: "GitHub",
    href: "https://github.com/afsharnezhad",
    icon: SiGithub,
    gradient: "from-[#333] to-[#6e5494]",
    hoverText: "Code Portfolio"
  },
  {
    name: "X",
    href: "https://x.com/autoopsai",
    icon: SiX,
    gradient: "from-[#1DA1F2] to-[#14171A]",
    hoverText: "Thoughts & Updates"
  },
  {
    name: "Instagram",
    href: "#",
    icon: SiInstagram,
    gradient: "from-[#833AB4] via-[#C13584] via-[#E1306C] via-[#FD1D1D] to-[#F77737]",
    hoverText: "Visual Journey"
  },
  {
    name: "YouTube",
    href: "#",
    icon: SiYoutube,
    gradient: "from-[#FF0000] to-[#CC0000]",
    hoverText: "Video Content"
  },
  {
    name: "Email",
    href: "mailto:mo.afsharnezhad@gmail.com",
    icon: Mail,
    gradient: "from-[#EA4335] to-[#FBBC04]",
    hoverText: "Get in Touch"
  }
];

export const SocialCard = ({
  title = "Connect With Me",
  socialLinks = defaultSocialLinks
}: SocialCardProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
      </div>

      {/* Social Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target={social.name !== "Email" ? "_blank" : undefined}
              rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient Ring Container */}
              <div className={`
                relative p-[3px] rounded-full 
                bg-gradient-to-br ${social.gradient}
                hover:scale-110 hover:shadow-2xl
                transition-all duration-500 ease-out
                animate-fade-in
              `}>
                {/* Inner White Circle */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-card rounded-full flex items-center justify-center border-2 border-background">
                  {/* Icon */}
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-foreground group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Glow Effect on Hover */}
                  <div className={`
                    absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 
                    transition-opacity duration-500 blur-xl
                    bg-gradient-to-br ${social.gradient}
                  `} />
                </div>

                {/* Pulse Animation Ring */}
                <div className={`
                  absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 
                  transition-all duration-700 animate-pulse
                  bg-gradient-to-br ${social.gradient}
                `} />
              </div>

              {/* Hover Tooltip */}
              <div className={`
                absolute -bottom-8 left-1/2 -translate-x-1/2 
                opacity-0 group-hover:opacity-100 
                transition-all duration-300 pointer-events-none
                whitespace-nowrap text-xs font-medium text-muted-foreground
              `}>
                {social.hoverText}
              </div>

              {/* Platform Name */}
              <div className="text-center mt-3">
                <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {social.name}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialCard;
