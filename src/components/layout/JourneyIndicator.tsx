import { motion } from "framer-motion";
import { Home, Headphones, GitBranch, Users, User } from "lucide-react";

interface Section {
  id: string;
  label: string;
  icon: React.ElementType;
}

const sections: Section[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "it-support", label: "IT Support", icon: Headphones },
  { id: "devops", label: "DevOps", icon: GitBranch },
  { id: "clients", label: "Clients", icon: Users },
  { id: "about", label: "About Me", icon: User },
];

interface JourneyIndicatorProps {
  activeIndex: number;
  onNavigate: (index: number) => void;
}

const JourneyIndicator = ({ activeIndex, onNavigate }: JourneyIndicatorProps) => {
  const progress = sections.length > 1 ? (activeIndex / (sections.length - 1)) * 100 : 0;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-2xl">
      <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl px-6 py-4 shadow-xl">
        {/* Percentage */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono text-primary bg-card/90 backdrop-blur-sm border border-border/50 rounded-full px-3 py-1"
          >
            {Math.round(progress)}%
          </motion.div>
        </div>

        {/* Track */}
        <div className="relative h-1 bg-border/50 rounded-full mb-5 overflow-hidden">
          {/* Animated fill */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
            }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
          {/* Sliding light effect */}
          <motion.div
            className="absolute inset-y-0 w-16 rounded-full opacity-40"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
            }}
            animate={{ left: [`-10%`, `${progress}%`] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            key={activeIndex}
          />
        </div>

        {/* Nodes */}
        <div className="flex items-center justify-between relative">
          {sections.map((section, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;
            const Icon = section.icon;

            return (
              <button
                key={section.id}
                onClick={() => onNavigate(index)}
                className="flex flex-col items-center gap-1.5 group relative focus:outline-none"
                aria-label={`Navigate to ${section.label}`}
              >
                {/* Node */}
                <motion.div
                  className={`relative w-9 h-9 rounded-full flex items-center justify-center border-2 transition-colors duration-300 cursor-pointer
                    ${isActive
                      ? "border-primary bg-primary/20 shadow-[0_0_16px_hsl(var(--primary)/0.5)]"
                      : isCompleted
                        ? "border-primary/60 bg-primary/10"
                        : "border-border bg-card hover:border-muted-foreground"
                    }`}
                  animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                  transition={isActive ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
                >
                  <Icon className={`w-4 h-4 transition-colors duration-300 ${
                    isActive ? "text-primary" : isCompleted ? "text-primary/70" : "text-muted-foreground"
                  }`} />

                  {/* Active pulse ring */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/40"
                      animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                </motion.div>

                {/* Label */}
                <span className={`text-[10px] font-medium transition-colors duration-300 whitespace-nowrap ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}>
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { sections };
export default JourneyIndicator;
