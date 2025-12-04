import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users, CheckCircle } from "lucide-react";

const CorporateAbout = () => {
  const certifications = [
    "AWS Solutions Architect",
    "Kubernetes Administrator (CKA)",
    "Certified Ethical Hacker (CEH)",
    "CompTIA Security+",
    "HashiCorp Terraform",
    "Google Cloud Professional",
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower enterprises with cutting-edge technology solutions that drive innovation, security, and growth.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading technology partner for enterprises seeking digital transformation and operational excellence.",
    },
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Team Members" },
    { value: "30+", label: "Countries Served" },
    { value: "98%", label: "Client Retention" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Corporate DevOps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to delivering enterprise-grade solutions 
            that help businesses thrive in the digital age.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2014, Corporate DevOps started with a simple mission: bridge the gap between 
                development and operations to help businesses move faster and more securely.
              </p>
              <p>
                Over the years, we've expanded our expertise to include comprehensive cybersecurity solutions, 
                blockchain development, and full-stack IT support services. Today, we serve enterprise clients 
                across 30+ countries.
              </p>
              <p>
                Our team consists of certified experts who bring decades of combined experience in DevOps, 
                security, and emerging technologies. We're not just service providers – we're your strategic 
                technology partners.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((item, index) => (
              <Card key={item.title} className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-12 px-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Our Certifications</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-secondary hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateAbout;
