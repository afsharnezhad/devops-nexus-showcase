import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialStory {
  id: string;
  platform: string;
  url: string;
  icon: React.ReactNode;
  gradientStart: string;
  gradientEnd: string;
  hoverText: string;
  hasNew?: boolean;
}

const socialStories: SocialStory[] = [
  {
    id: "linkedin",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/YOUR_PROFILE",
    icon: <FaLinkedin className="w-8 h-8 text-[#0077B5]" />,
    gradientStart: "#0077B5",
    gradientEnd: "#00A0DC",
    hoverText: "Professional Network",
    hasNew: true,
  },
  {
    id: "github",
    platform: "GitHub",
    url: "https://github.com/YOUR_PROFILE",
    icon: <FaGithub className="w-8 h-8 text-[#333] dark:text-white" />,
    gradientStart: "#333",
    gradientEnd: "#6e5494",
    hoverText: "Code Portfolio",
    hasNew: true,
  },
  {
    id: "twitter",
    platform: "X (Twitter)",
    url: "https://twitter.com/YOUR_PROFILE",
    icon: <FaXTwitter className="w-7 h-7 text-[#000] dark:text-white" />,
    gradientStart: "#1DA1F2",
    gradientEnd: "#14171A",
    hoverText: "Thoughts & Updates",
  },
  {
    id: "instagram",
    platform: "Instagram",
    url: "https://instagram.com/YOUR_PROFILE",
    icon: <FaInstagram className="w-8 h-8 text-[#E1306C]" />,
    gradientStart: "#833AB4",
    gradientEnd: "#FD1D1D",
    hoverText: "Visual Journey",
  },
  {
    id: "youtube",
    platform: "YouTube",
    url: "https://youtube.com/@YOUR_CHANNEL",
    icon: <FaYoutube className="w-9 h-9 text-[#FF0000]" />,
    gradientStart: "#FF0000",
    gradientEnd: "#CC0000",
    hoverText: "Video Content",
  },
  {
    id: "email",
    platform: "Email",
    url: "mailto:your.email@example.com",
    icon: <Mail className="w-7 h-7 text-[#EA4335]" />,
    gradientStart: "#EA4335",
    gradientEnd: "#FBBC04",
    hoverText: "Get in Touch",
  },
];

export default function SocialStoriesBar() {
  const [viewedStories, setViewedStories] = useState<Set<string>>(
    new Set(JSON.parse(localStorage.getItem("viewedStories") || "[]"))
  );
  const [hoveredStory, setHoveredStory] = useState<string | null>(null);

  const handleStoryClick = (story: SocialStory) => {
    // Mark as viewed
    const newViewed = new Set(viewedStories);
    newViewed.add(story.id);
    setViewedStories(newViewed);
    localStorage.setItem("viewedStories", JSON.stringify(Array.from(newViewed)));

    // Open URL
    window.open(story.url, "_blank", "noopener,noreferrer");
  };

  const getGradient = (story: SocialStory) => {
    if (story.id === "instagram") {
      return "linear-gradient(45deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F77737)";
    }
    return `linear-gradient(45deg, ${story.gradientStart}, ${story.gradientEnd})`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[50] h-[72px] bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 sm:gap-6 py-2 overflow-x-auto scrollbar-hide">
          {socialStories.map((story) => {
            const isViewed = viewedStories.has(story.id);
            const isHovered = hoveredStory === story.id;

            return (
              <motion.div
                key={story.id}
                className="relative flex-shrink-0"
                onHoverStart={() => setHoveredStory(story.id)}
                onHoverEnd={() => setHoveredStory(null)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  y: isHovered ? -2 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* New Indicator */}
                {story.hasNew && !isViewed && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full z-10 border-2 border-background"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}

                {/* Story Circle */}
                <button
                  onClick={() => handleStoryClick(story)}
                  className={cn(
                    "relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[3px] cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    isViewed && "opacity-60"
                  )}
                  style={{
                    background: isViewed ? "#ccc" : getGradient(story),
                    boxShadow: isHovered
                      ? "0 10px 25px rgba(0,0,0,0.2)"
                      : "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                  aria-label={`Open ${story.platform}: ${story.hoverText}`}
                >
                  {/* Inner Circle */}
                  <div className="w-full h-full rounded-full bg-background dark:bg-background flex items-center justify-center border-2 border-background">
                    {story.icon}
                  </div>
                </button>

                {/* Hover Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground text-background px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg pointer-events-none"
                  >
                    {story.hoverText}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
