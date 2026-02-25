import { motion } from "framer-motion";
import { useServices } from "@/hooks/useStrapi";
import { getMediaFromField } from "@/lib/strapi";
import ContentSkeleton from "@/components/strapi/ContentSkeleton";
import ErrorState from "@/components/strapi/ErrorState";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Server, GitBranch, Cloud, Container, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = {
  Server, GitBranch, Cloud, Container, Shield, Zap,
};

const DevOpsPage = () => {
  const { data, isLoading, error, refetch } = useServices("DevOps");
  const navigate = useNavigate();

  const fallbackServices = [
    {
      id: 1,
      attributes: {
        title: "CI/CD Pipelines",
        slug: "cicd",
        category: "DevOps" as const,
        description: "Automated build, test and deploy pipelines using GitHub Actions, GitLab CI, Jenkins and ArgoCD.",
        details: [],
        icon_name: "GitBranch",
        features: ["Automated Testing", "Blue-Green Deployments", "Rollback Strategies", "Multi-Environment"],
        cover_image: { data: null },
        order: 1,
        publishedAt: new Date().toISOString(),
      },
    },
    {
      id: 2,
      attributes: {
        title: "Infrastructure as Code",
        slug: "iac",
        category: "DevOps" as const,
        description: "Terraform, Pulumi and Ansible-based infrastructure automation for reproducible environments.",
        details: [],
        icon_name: "Server",
        features: ["Terraform Modules", "State Management", "Drift Detection", "Multi-Cloud"],
        cover_image: { data: null },
        order: 2,
        publishedAt: new Date().toISOString(),
      },
    },
    {
      id: 3,
      attributes: {
        title: "Container Orchestration",
        slug: "containers",
        category: "DevOps" as const,
        description: "Kubernetes and Docker-based microservice deployments with auto-scaling and monitoring.",
        details: [],
        icon_name: "Container",
        features: ["Kubernetes Clusters", "Helm Charts", "Service Mesh", "Auto-scaling"],
        cover_image: { data: null },
        order: 3,
        publishedAt: new Date().toISOString(),
      },
    },
    {
      id: 4,
      attributes: {
        title: "Cloud Architecture",
        slug: "cloud",
        category: "DevOps" as const,
        description: "AWS, Azure and GCP cloud architecture design, migration and optimization.",
        details: [],
        icon_name: "Cloud",
        features: ["Multi-Cloud Strategy", "Cost Optimization", "High Availability", "Disaster Recovery"],
        cover_image: { data: null },
        order: 4,
        publishedAt: new Date().toISOString(),
      },
    },
  ];

  const services = data?.data?.length ? data.data : fallbackServices;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" /> بازگشت
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">DevOps Services</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DevOps</span>{" "}
              Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              End-to-end DevOps consulting, CI/CD automation, infrastructure as code, container orchestration and cloud architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <ContentSkeleton key={i} variant="card" />
              ))}
            </div>
          ) : error && !fallbackServices.length ? (
            <ErrorState message="خطا در بارگذاری سرویس‌ها" onRetry={refetch} />
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const s = service.attributes;
                const IconComp = iconMap[s.icon_name] || Server;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group">
                      <CardContent className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                          <IconComp className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                        <p className="text-muted-foreground mb-6">{s.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {(s.features || []).map((f) => (
                            <Badge key={f} variant="outline" className="text-xs">
                              {f}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DevOpsPage;
