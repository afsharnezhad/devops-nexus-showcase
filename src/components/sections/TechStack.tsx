import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
import { Cloud, Calendar } from "lucide-react";

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

  const getExperienceLevel = (years: number) => {
    if (years >= 8) return { level: "Expert", color: "hsl(var(--primary))", variant: "default" as const };
    if (years >= 6) return { level: "Advanced", color: "hsl(var(--chart-2))", variant: "secondary" as const };
    if (years >= 4) return { level: "Proficient", color: "hsl(var(--chart-3))", variant: "outline" as const };
    return { level: "Intermediate", color: "hsl(var(--muted-foreground))", variant: "outline" as const };
  };

  const categories = [
    {
      name: "Cloud Platforms",
      techs: technologies.filter(t => t.category === "Cloud Platform")
    },
    {
      name: "DevOps & CI/CD", 
      techs: technologies.filter(t => ["CI/CD", "Configuration Management", "Infrastructure as Code"].includes(t.category))
    },
    {
      name: "Containers & Orchestration",
      techs: technologies.filter(t => ["Containerization", "Container Orchestration"].includes(t.category))
    },
    {
      name: "Monitoring & Systems",
      techs: technologies.filter(t => ["Monitoring", "Visualization", "Operating System"].includes(t.category))
    }
  ];

  return (
    <TooltipProvider>
      <section 
        ref={ref as React.RefObject<HTMLElement>}
        className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Calendar className="w-4 h-4" />
              Years of Experience
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-4'}`}>
              Technologies I Work With
            </h2>
            <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              Comprehensive expertise across modern DevOps, cloud platforms, and infrastructure technologies. Each tool represents years of hands-on experience in enterprise environments.
            </p>
          </div>

          {/* Technologies by Category */}
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <div key={category.name} className="text-center">
                <h3 className={`text-xl font-semibold text-foreground/80 mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                    style={{ animationDelay: `${300 + categoryIndex * 100}ms` }}>
                  {category.name}
                </h3>
                
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                  {category.techs.map((tech, index) => {
                    const IconComponent = tech.icon;
                    const experience = getExperienceLevel(tech.experienceYears);
                    const overallIndex = categoryIndex * 5 + index;
                    
                    return (
                      <Tooltip key={tech.name}>
                        <TooltipTrigger asChild>
                          <Card
                            className={`
                              group relative p-6 w-32 h-36 flex flex-col items-center justify-center
                              bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30
                              hover:scale-105 hover:shadow-2xl hover:shadow-primary/10
                              transition-all duration-500 ease-out cursor-pointer
                              hover:bg-card/80
                              ${isVisible ? 'animate-fade-in animate-scale-in' : 'opacity-0 translate-y-4 scale-95'}
                            `}
                            style={{
                              animationDelay: `${400 + overallIndex * 100}ms`,
                            }}
                          >
                            {/* Tech Icon with Glow Effect */}
                            <div className="relative">
                              <div 
                                className="w-16 h-16 flex items-center justify-center rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300"
                                style={{ 
                                  color: tech.color,
                                  filter: 'brightness(1.1) saturate(1.2)'
                                }}
                              >
                                <IconComponent className="w-8 h-8" />
                              </div>
                              
                              {/* Hover Glow */}
                              <div 
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-lg"
                                style={{
                                  background: `radial-gradient(circle, ${tech.color} 30%, transparent 70%)`,
                                  transform: 'scale(1.5)'
                                }}
                              />
                            </div>
                            
                            {/* Tech Name */}
                            <h4 className="font-medium text-foreground text-sm text-center leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                              {tech.name}
                            </h4>
                            
                            {/* Experience Badge */}
                            <Badge 
                              variant={experience.variant}
                              className="text-xs px-2 py-1 group-hover:scale-105 transition-transform duration-300"
                              style={{ 
                                backgroundColor: experience.variant === 'default' ? experience.color : undefined,
                                borderColor: experience.variant === 'outline' ? experience.color : undefined,
                                color: experience.variant === 'outline' ? experience.color : undefined
                              }}
                            >
                              {tech.experienceYears}y
                            </Badge>

                            {/* Animated Border on Hover */}
                            <div 
                              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700"
                              style={{
                                background: `linear-gradient(45deg, transparent, ${tech.color}20, transparent)`,
                                animation: 'pulse 2s infinite'
                              }}
                            />
                          </Card>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <div className="text-center space-y-2">
                            <p className="font-semibold text-base">{tech.name}</p>
                            <p className="text-sm text-muted-foreground">{tech.category}</p>
                            <div className="flex items-center justify-center gap-2">
                              <Badge variant={experience.variant} className="text-xs">
                                {experience.level}
                              </Badge>
                              <span className="text-sm font-medium" style={{ color: experience.color }}>
                                {tech.experienceYears} years
                              </span>
                            </div>
                            <div className="text-lg">
                              {"⭐".repeat(Math.min(tech.experienceYears, 5))}
                              {tech.experienceYears > 5 && "✨"}
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Legend */}
          <div className={`mt-16 flex flex-wrap justify-center gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary text-sm">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Expert (8+ years)
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm">
              <div className="w-2 h-2 rounded-full bg-chart-2"></div>
              Advanced (6-7 years)
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/50 text-muted-foreground text-sm">
              <div className="w-2 h-2 rounded-full bg-chart-3"></div>
              Proficient (4-5 years)
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default TechStack;