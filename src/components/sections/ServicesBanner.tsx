import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Server, Headphones, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import devopsPipeline from "@/assets/devops-pipeline.png";
import devopsLogo from "@/assets/devops-logo-dark.png";

const ServicesBanner = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useTranslation();

  const cards = [
    {
      key: "it",
      tag: t("itBannerTag"),
      title: t("itBannerTitle"),
      subtitle: t("itBannerSubtitle"),
      icon: Headphones,
      route: "/it-support",
      gradient: "from-accent/30 via-background to-primary/20",
      iconColor: "text-accent",
      borderHover: "hover:border-accent/60",
      bgIcon: "bg-accent/10 group-hover:bg-accent/20",
      blob: "bg-accent/30",
    },
    {
      key: "devops",
      tag: t("devopsBannerTag"),
      title: t("devopsBannerTitle"),
      subtitle: t("devopsBannerSubtitle"),
      icon: Server,
      route: "/devops",
      image: devopsPipeline,
      gradient: "from-primary/30 via-background to-accent/20",
      iconColor: "text-primary",
      borderHover: "hover:border-primary/60",
      bgIcon: "bg-primary/10 group-hover:bg-primary/20",
      blob: "bg-primary/30",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 gap-1.5 px-3 py-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {t("servicesTitle")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("servicesSubtitle")}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.button
                key={c.key}
                onClick={() => navigate(c.route)}
                aria-label={`${c.title} — ${t("readMore")}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border border-border/50 ${c.borderHover} bg-card/50 backdrop-blur-sm p-8 sm:p-10 text-${isRTL ? "right" : "left"} transition-all hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-60`} />
                <div className={`absolute -top-24 ${isRTL ? "-left-24" : "-right-24"} w-72 h-72 rounded-full ${c.blob} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl ${c.bgIcon} flex items-center justify-center mb-6 transition-colors`}>
                    <Icon className={`w-8 h-8 ${c.iconColor}`} />
                  </div>
                  {(c as any).image && (
                    <div className="relative mb-6 rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
                      <img
                        src={(c as any).image}
                        alt={c.title}
                        loading="lazy"
                        className="w-full h-44 sm:h-52 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                    </div>
                  )}
                  <Badge variant="outline" className="mb-4 self-start">
                    {c.tag}
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed line-clamp-3">
                    {c.subtitle}
                  </p>
                  <span
                    role="presentation"
                    className={`mt-auto inline-flex items-center gap-2 self-start rounded-full border border-border/60 bg-background/70 backdrop-blur-md px-5 py-2.5 text-sm font-semibold ${c.iconColor} shadow-sm transition-all group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30`}
                  >
                    {t("readMore")}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""}`} />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
