import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { 
  Server, 
  Cloud, 
  Container, 
  Database, 
  Settings, 
  Shield, 
  GitBranch, 
  Activity,
  Layers,
  Package,
  Workflow,
  FileCode
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";


const TechStack = () => {
  const { t } = useTranslation();
  
  const technologies = [
    {
      icon: Container,
      name: "Docker & Kubernetes",
      description: "Container orchestration and microservices management"
    },
    {
      icon: Cloud,
      name: "AWS & Azure",
      description: "Multi-cloud infrastructure and deployment"
    },
    {
      icon: Server,
      name: "Linux Administration",
      description: "System configuration and optimization"
    },
    {
      icon: Database,
      name: "Database Management",
      description: "SQL, NoSQL, and data optimization"
    },
    {
      icon: GitBranch,
      name: "CI/CD Pipelines",
      description: "Automated testing and deployment"
    },
    {
      icon: Settings,
      name: "Terraform & Ansible",
      description: "Infrastructure as Code and automation"
    },
    {
      icon: Activity,
      name: "Monitoring & Logging",
      description: "Prometheus, Grafana, and ELK stack"
    },
    {
      icon: Shield,
      name: "Security & Compliance",
      description: "Security best practices and auditing"
    },
    {
      icon: Workflow,
      name: "Jenkins & GitLab CI",
      description: "Continuous integration platforms"
    },
    {
      icon: Package,
      name: "Package Management",
      description: "Artifact repositories and versioning"
    },
    {
      icon: Layers,
      name: "Networking",
      description: "Load balancing and traffic management"
    },
    {
      icon: FileCode,
      name: "Scripting",
      description: "Bash, Python, and automation scripts"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('techStackTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('techStackSubtitle')}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <Card
                key={tech.name}
                className={`relative hover-lift shadow-professional animate-slide-up delay-${index * 50}`}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto w-14 h-14 bg-gradient-button rounded-full flex items-center justify-center mb-3 hover-glow">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-base font-bold text-foreground">
                    {tech.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;