import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  SiDocker, 
  SiKubernetes, 
  SiAmazon, 
  SiGooglecloud,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGitlab,
  SiPrometheus,
  SiLinux
} from "react-icons/si";
import { Settings, Cloud } from "lucide-react";

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation();

  const technologies = [
    {
      name: "DevOps",
      icon: Settings,
      color: "#FF6B6B",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      name: "Linux",
      icon: SiLinux,
      color: "#FCC419",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      color: "#326CE5",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      name: "AWS",
      icon: SiAmazon,
      color: "#FF9900",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      name: "Azure",
      icon: Cloud,
      color: "#0078D4",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      name: "Google Cloud",
      icon: SiGooglecloud,
      color: "#4285F4",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      name: "Terraform",
      icon: SiTerraform,
      color: "#7B42BC",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      name: "Ansible",
      icon: SiAnsible,
      color: "#EE0000",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      name: "Jenkins",
      icon: SiJenkins,
      color: "#D33833",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      name: "GitLab CI/CD",
      icon: SiGitlab,
      color: "#FC6D26",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      name: "Monitoring",
      icon: SiPrometheus,
      color: "#E6522C",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Technologies I Work With
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full"></div>
          </div>

          {/* Tech Icons Grid */}
          <div 
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 transition-all duration-1000 ${
              isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
            }`}
          >
            <TooltipProvider>
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <div 
                        className={`
                          group relative flex flex-col items-center p-6 rounded-2xl border border-border/50 
                          ${tech.bgColor} 
                          hover:scale-105 hover:shadow-professional 
                          transition-all duration-300 cursor-pointer
                          animate-scale-in
                        `}
                        style={{ 
                          animationDelay: `${100 + index * 100}ms`,
                          animationFillMode: 'both'
                        }}
                      >
                        {/* Glow Effect */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ 
                            background: `radial-gradient(circle at center, ${tech.color}40, transparent 70%)`
                          }}
                        ></div>
                        
                        {/* Icon */}
                        <div className="relative mb-3">
                          <IconComponent 
                            size={60} 
                            style={{ color: tech.color }}
                            className="drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                          />
                        </div>
                        
                        {/* Name */}
                        <span className="text-sm font-medium text-foreground text-center leading-tight">
                          {tech.name}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;