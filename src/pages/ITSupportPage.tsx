import { motion } from "framer-motion";
import { useServices } from "@/hooks/useStrapi";
import ContentSkeleton from "@/components/strapi/ContentSkeleton";
import ErrorState from "@/components/strapi/ErrorState";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Monitor, Wifi, HardDrive, Headphones, ShieldCheck, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Wifi, HardDrive, Headphones, ShieldCheck, Settings,
};

const ITSupportPage = () => {
  const { data, isLoading, error, refetch } = useServices("IT Support");
  const navigate = useNavigate();

  const fallbackServices = [
    {
      id: 1,
      attributes: {
        title: "Network Infrastructure",
        slug: "network",
        category: "IT Support" as const,
        description: "Enterprise networking design, implementation, monitoring and troubleshooting.",
        details: [],
        icon_name: "Wifi",
        features: ["Network Design", "VPN Setup", "Firewall Config", "Performance Monitoring"],
        cover_image: { data: null },
        order: 1,
        publishedAt: new Date().toISOString(),
      },
    },
    {
      id: 2,
      attributes: {
        title: "Server Hardening & Management",
        slug: "server",
        category: "IT Support" as const,
        description: "Linux and Windows server administration, hardening and patch management.",
        details: [],
        icon_name: "HardDrive",
        features: ["OS Hardening", "Patch Management", "Backup Strategy", "Disaster Recovery"],
        cover_image: { data: null },
        order: 2,
        publishedAt: new Date().toISOString(),
      },
    },
    {
      id: 3,
      attributes: {
        title: "Help Desk & Remote Support",
        slug: "helpdesk",
        category: "IT Support" as const,
        description: "24/7 help desk, ticketing system and remote desktop support for your team.",
        details: [],
        icon_name: "Headphones",
        features: ["24/7 Support", "Ticketing System", "Remote Access", "SLA Management"],
        cover_image: { data: null },
        order: 3,
        publishedAt: new Date().toISOString(),
      },
    },
    {
      id: 4,
      attributes: {
        title: "Endpoint Security",
        slug: "endpoint",
        category: "IT Support" as const,
        description: "Endpoint protection, antivirus management and device compliance policies.",
        details: [],
        icon_name: "ShieldCheck",
        features: ["Antivirus Management", "Device Compliance", "MDM", "Zero Trust"],
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10" />
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
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">IT Support Services</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">IT Support</span>{" "}
              Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive IT support services including networking, server management, help desk and endpoint security.
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
                const IconComp = iconMap[s.icon_name] || Monitor;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all hover:shadow-lg group">
                      <CardContent className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                          <IconComp className="w-7 h-7 text-accent" />
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

export default ITSupportPage;
