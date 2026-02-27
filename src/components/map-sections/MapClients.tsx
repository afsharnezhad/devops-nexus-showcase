import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const projects = [
  { client: "TechCorp Solutions", project: "Cloud Migration & DevOps Implementation", description: "Led the complete migration of legacy infrastructure to AWS, implementing automated CI/CD pipelines and reducing deployment time by 80%.", technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"], duration: "6 months", logo: "TC" },
  { client: "StartupVenture Inc", project: "Scalable Microservices Architecture", description: "Designed and implemented a containerized microservices architecture that improved system scalability and reduced operational costs by 60%.", technologies: ["Docker", "Kubernetes", "Azure", "Redis", "PostgreSQL"], duration: "4 months", logo: "SV" },
  { client: "Enterprise Systems Ltd", project: "Security & Compliance Audit", description: "Conducted comprehensive security assessment and implemented compliance frameworks, achieving SOC 2 Type II certification.", technologies: ["Security", "Compliance", "Monitoring", "Ansible", "Linux"], duration: "3 months", logo: "ES" },
];

const MapClients = () => (
  <div className="min-h-screen bg-background flex items-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Client Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Delivering exceptional results through infrastructure automation and cloud solutions.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Card key={p.client} className="relative hover-lift shadow-professional">
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4 hover-glow">
                  <span className="text-primary-foreground font-bold text-xl">{p.logo}</span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{p.client}</CardTitle>
                <p className="text-primary font-semibold">{p.project}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map(t => <Badge key={t} variant="outline" className="text-xs">{t}</Badge>)}
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground"><span className="font-semibold">Duration:</span> {p.duration}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MapClients;
