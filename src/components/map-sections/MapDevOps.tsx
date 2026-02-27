import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, GitBranch, Cloud, Container, Shield, Zap } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Server, GitBranch, Cloud, Container, Shield, Zap };

const services = [
  { id: 1, title: "CI/CD Pipelines", icon: "GitBranch", description: "Automated build, test and deploy pipelines using GitHub Actions, GitLab CI, Jenkins and ArgoCD.", features: ["Automated Testing", "Blue-Green Deployments", "Rollback Strategies", "Multi-Environment"] },
  { id: 2, title: "Infrastructure as Code", icon: "Server", description: "Terraform, Pulumi and Ansible-based infrastructure automation for reproducible environments.", features: ["Terraform Modules", "State Management", "Drift Detection", "Multi-Cloud"] },
  { id: 3, title: "Container Orchestration", icon: "Container", description: "Kubernetes and Docker-based microservice deployments with auto-scaling and monitoring.", features: ["Kubernetes Clusters", "Helm Charts", "Service Mesh", "Auto-scaling"] },
  { id: 4, title: "Cloud Architecture", icon: "Cloud", description: "AWS, Azure and GCP cloud architecture design, migration and optimization.", features: ["Multi-Cloud Strategy", "Cost Optimization", "High Availability", "Disaster Recovery"] },
];

const MapDevOps = () => (
  <div className="min-h-screen bg-background">
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">DevOps Services</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DevOps</span> Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">End-to-end DevOps consulting, CI/CD automation, infrastructure as code, container orchestration and cloud architecture.</p>
        </motion.div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Server;
            return (
              <motion.div key={s.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground mb-6">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.features.map(f => <Badge key={f} variant="outline" className="text-xs">{f}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

export default MapDevOps;
