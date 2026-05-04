import { useState } from "react";
import { motion } from "framer-motion";
import { useServices } from "@/hooks/useStrapi";
import ContentSkeleton from "@/components/strapi/ContentSkeleton";
import ErrorState from "@/components/strapi/ErrorState";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Server, GitBranch, Cloud, Container, Shield, Zap, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ServiceNavigation from "@/components/layout/ServiceNavigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import BlogCtaBanner from "@/components/sections/BlogCtaBanner";
import devopsPipeline from "@/assets/devops-pipeline.png";

const iconMap: Record<string, React.ElementType> = {
  Server, GitBranch, Cloud, Container, Shield, Zap,
};

const DevOpsPageInner = () => {
  const { data, isLoading, error, refetch } = useServices("DevOps");
  const navigate = useNavigate();
  const { t, isRTL } = useTranslation();
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

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
    <div className={darkMode ? "dark" : ""} dir={isRTL ? "rtl" : "ltr"}>
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ServiceNavigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Banner — DevOps pipeline themed (cool blue/slate) */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-background to-background dark:from-slate-950 dark:via-background dark:to-background">
        {/* Layered gradients matching pipeline image palette */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/15 via-background to-blue-600/10" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-500/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8 gap-2">
            <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} /> {t("backBtn")}
          </Button>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge className="mb-5 bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30 gap-1.5 px-3 py-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {t("devopsBannerTag")}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {t("devopsBannerTitle")}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {t("devopsBannerSubtitle")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/30 to-blue-600/20 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-sm shadow-2xl">
                <img
                  src={devopsPipeline}
                  alt="DevOps pipeline — Plan, Build, Test, Release, Deploy, Operate, Monitor"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
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

      {/* Blog CTA Banner */}
      <BlogCtaBanner />
    </div>
    </div>
  );
};

const DevOpsPage = () => (
  <LanguageProvider>
    <DevOpsPageInner />
  </LanguageProvider>
);

export default DevOpsPage;
