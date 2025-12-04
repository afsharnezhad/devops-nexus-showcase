import { motion } from "framer-motion";
import { ArrowRight, Shield, Server, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CorporateHero = () => {
  const floatingIcons = [
    { icon: Shield, delay: 0, x: "10%", y: "20%" },
    { icon: Server, delay: 0.2, x: "85%", y: "30%" },
    { icon: Code, delay: 0.4, x: "15%", y: "70%" },
    { icon: Zap, delay: 0.6, x: "80%", y: "75%" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ icon: Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay }}
          >
            <Icon className="w-16 h-16 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Enterprise IT Solutions</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Secure.</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Scalable.</span>{" "}
            <span className="text-foreground">Smart.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your infrastructure with enterprise-grade DevOps, Cybersecurity, 
            Smart Contracts, and IT Support solutions. We build systems that scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-xl px-8 h-14 text-lg font-semibold group"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl px-8 h-14 text-lg font-semibold border-2"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border"
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CorporateHero;
