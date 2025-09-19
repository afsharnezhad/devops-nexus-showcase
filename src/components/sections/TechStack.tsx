import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  SiLinux,
  SiDocker, 
  SiKubernetes, 
  SiAmazonwebservices, 
  SiGooglecloud,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGitlab,
  SiPrometheus,
  SiGrafana
} from "react-icons/si";
import { Cloud } from "lucide-react";

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  const technologies = [
    {
      name: "Linux",
      icon: SiLinux,
      color: "#FCC624",
      experienceYears: 9,
      category: "Operating System"
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
      experienceYears: 6,
      category: "Containerization"
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      color: "#326CE5",
      experienceYears: 5,
      category: "Container Orchestration"
    },
    {
      name: "AWS",
      icon: SiAmazonwebservices,
      color: "#FF9900",
      experienceYears: 7,
      category: "Cloud Platform"
    },
    {
      name: "Azure",
      icon: Cloud,
      color: "#0078D4",
      experienceYears: 5,
      category: "Cloud Platform"
    },
    {
      name: "Google Cloud Platform",
      icon: SiGooglecloud,
      color: "#4285F4",
      experienceYears: 4,
      category: "Cloud Platform"
    },
    {
      name: "Terraform",
      icon: SiTerraform,
      color: "#7B42BC",
      experienceYears: 6,
      category: "Infrastructure as Code"
    },
    {
      name: "Ansible",
      icon: SiAnsible,
      color: "#EE0000",
      experienceYears: 7,
      category: "Configuration Management"
    },
    {
      name: "Jenkins",
      icon: SiJenkins,
      color: "#D33833",
      experienceYears: 8,
      category: "CI/CD"
    },
    {
      name: "GitLab CI/CD",
      icon: SiGitlab,
      color: "#FC6D26",
      experienceYears: 6,
      category: "CI/CD"
    },
    {
      name: "Prometheus",
      icon: SiPrometheus,
      color: "#E6522C",
      experienceYears: 5,
      category: "Monitoring"
    },
    {
      name: "Grafana",
      icon: SiGrafana,
      color: "#F46800",
      experienceYears: 5,
      category: "Visualization"
    }
  ];

  const renderStars = (years: number) => {
    return "⭐".repeat(years);
  };

  return (
    <TooltipProvider>
      <section 
        ref={ref as React.RefObject<HTMLElement>}
        className="py-20 bg-muted/30 dark:bg-muted/10 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technologies I Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise in modern DevOps tools and cloud technologies with years of hands-on experience in enterprise environments.
            </p>
          </div>

          {/* Technologies Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Tooltip key={tech.name}>
                  <TooltipTrigger asChild>
                    <div
                      className={`
                        relative group flex flex-col items-center justify-center p-4
                        hover:scale-110 transition-all duration-500 ease-out
                        cursor-pointer
                        ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-4'}
                      `}
                      style={{
                        animationDelay: `${index * 150}ms`,
                      }}
                    >
                      {/* Tech Icon */}
                      <div 
                        className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 group-hover:border-primary/30 shadow-lg group-hover:shadow-xl transition-all duration-500"
                        style={{ 
                          color: tech.color,
                          filter: 'brightness(1.1) saturate(1.2)'
                        }}
                      >
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      
                      {/* Tech Name */}
                      <h3 className="font-medium text-foreground text-xs md:text-sm mt-3 text-center max-w-20 leading-tight">
                        {tech.name}
                      </h3>
                      
                      {/* Experience Stars */}
                      <div className="text-xs mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {renderStars(tech.experienceYears)}
                      </div>

                      {/* Hover Glow Effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 transition-all duration-500 blur-2xl scale-150"
                        style={{
                          background: `radial-gradient(circle, ${tech.color} 0%, transparent 70%)`
                        }}
                      />
                      
                      {/* Pulse Ring Animation */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-700 animate-pulse"
                        style={{
                          border: `2px solid ${tech.color}`,
                          animation: 'pulse 2s infinite'
                        }}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-center">
                      <p className="font-semibold">{tech.name}</p>
                      <p className="text-sm text-muted-foreground">{tech.category}</p>
                      <p className="text-sm font-medium text-primary">{tech.experienceYears} years experience</p>
                      <div className="text-lg mt-1">{renderStars(tech.experienceYears)}</div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default TechStack;