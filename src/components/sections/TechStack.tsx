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
      experience: "9+ years",
      category: "Operating System"
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
      experience: "6+ years",
      category: "Containerization"
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      color: "#326CE5",
      experience: "5+ years",
      category: "Container Orchestration"
    },
    {
      name: "AWS",
      icon: SiAmazonwebservices,
      color: "#FF9900",
      experience: "7+ years",
      category: "Cloud Platform"
    },
    {
      name: "Azure",
      icon: Cloud,
      color: "#0078D4",
      experience: "5+ years",
      category: "Cloud Platform"
    },
    {
      name: "Google Cloud Platform",
      icon: SiGooglecloud,
      color: "#4285F4",
      experience: "4+ years",
      category: "Cloud Platform"
    },
    {
      name: "Terraform",
      icon: SiTerraform,
      color: "#7B42BC",
      experience: "6+ years",
      category: "Infrastructure as Code"
    },
    {
      name: "Ansible",
      icon: SiAnsible,
      color: "#EE0000",
      experience: "7+ years",
      category: "Configuration Management"
    },
    {
      name: "Jenkins",
      icon: SiJenkins,
      color: "#D33833",
      experience: "8+ years",
      category: "CI/CD"
    },
    {
      name: "GitLab CI/CD",
      icon: SiGitlab,
      color: "#FC6D26",
      experience: "6+ years",
      category: "CI/CD"
    },
    {
      name: "Prometheus",
      icon: SiPrometheus,
      color: "#E6522C",
      experience: "5+ years",
      category: "Monitoring"
    },
    {
      name: "Grafana",
      icon: SiGrafana,
      color: "#F46800",
      experience: "5+ years",
      category: "Visualization"
    }
  ];

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

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Tooltip key={tech.name}>
                  <TooltipTrigger asChild>
                    <div
                      className={`
                        relative group bg-card rounded-xl p-6 border border-border
                        hover:shadow-lg hover:scale-105 transition-all duration-300
                        cursor-pointer hover:border-primary/20
                        ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}
                      `}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      {/* Tech Icon */}
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div 
                          className="w-16 h-16 flex items-center justify-center rounded-lg bg-background/50 group-hover:bg-background transition-colors duration-300"
                          style={{ 
                            color: tech.color,
                            filter: 'brightness(1.1) saturate(1.2)'
                          }}
                        >
                          <IconComponent className="w-10 h-10" />
                        </div>
                        
                        {/* Tech Name */}
                        <h3 className="font-semibold text-foreground text-sm">
                          {tech.name}
                        </h3>
                      </div>

                      {/* Hover Glow Effect */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                        style={{
                          background: `radial-gradient(circle, ${tech.color} 0%, transparent 70%)`
                        }}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-center">
                      <p className="font-semibold">{tech.name}</p>
                      <p className="text-sm text-muted-foreground">{tech.category}</p>
                      <p className="text-sm font-medium text-primary">{tech.experience}</p>
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