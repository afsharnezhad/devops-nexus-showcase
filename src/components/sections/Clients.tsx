import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useTranslation } from "@/hooks/useTranslation";

const Clients = () => {
  const { t } = useTranslation();
  const projects = [
    {
      client: "TechCorp Solutions",
      project: "Cloud Migration & DevOps Implementation",
      description: "Led the complete migration of legacy infrastructure to AWS, implementing automated CI/CD pipelines and reducing deployment time by 80%.",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      duration: "6 months",
      logo: "TC"
    },
    {
      client: "StartupVenture Inc",
      project: "Scalable Microservices Architecture",
      description: "Designed and implemented a containerized microservices architecture that improved system scalability and reduced operational costs by 60%.",
      technologies: ["Docker", "Kubernetes", "Azure", "Redis", "PostgreSQL"],
      duration: "4 months",
      logo: "SV"
    },
    {
      client: "Enterprise Systems Ltd",
      project: "Security & Compliance Audit",
      description: "Conducted comprehensive security assessment and implemented compliance frameworks, achieving SOC 2 Type II certification.",
      technologies: ["Security", "Compliance", "Monitoring", "Ansible", "Linux"],
      duration: "3 months",
      logo: "ES"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('clientsTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t('clientsSubtitle')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.client}
                className={`relative hover-lift shadow-professional animate-slide-up delay-${index * 200}`}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <CardHeader className="text-center pb-4">
                  {/* Logo Placeholder */}
                  <div className="mx-auto w-16 h-16 bg-gradient-button rounded-full flex items-center justify-center mb-4 hover-glow">
                    <span className="text-white font-bold text-xl">
                      {project.logo}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.client}
                  </CardTitle>
                  <p className="text-primary font-semibold">
                    {project.project}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Duration:</span> {project.duration}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;