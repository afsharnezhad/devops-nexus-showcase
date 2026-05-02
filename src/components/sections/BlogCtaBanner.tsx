import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const BlogCtaBanner = () => {
  const { t, isRTL } = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/15 via-background to-accent/15 p-10 sm:p-14 lg:p-20 shadow-2xl"
        >
          {/* Decorative gradient blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {t("blogCtaTag")}
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                {t("blogCtaTitle")}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                {t("blogCtaSubtitle")}
              </p>
            </div>

            <Button
              size="lg"
              className="gap-2 group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/30 px-8"
              onClick={() => {
                const el = document.querySelector("#blog");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("blogCtaButton")}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCtaBanner;
