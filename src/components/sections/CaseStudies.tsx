import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Cloud Migration for FinTech Startup",
      client: "PayFlow Solutions",
      category: "DevOps",
      challenge: "Legacy monolithic application with frequent downtime and slow deployment cycles.",
      solution: "Migrated to AWS with Kubernetes, implemented CI/CD pipelines, and containerized microservices.",
      results: [
        { metric: "99.99%", label: "Uptime" },
        { metric: "85%", label: "Faster Deployments" },
        { metric: "60%", label: "Cost Reduction" },
      ],
      technologies: ["AWS", "Kubernetes", "Docker", "Jenkins", "Terraform"],
      duration: "4 months",
      image: "bg-gradient-to-br from-primary/20 to-accent/20",
    },
    {
      title: "Security Overhaul for Healthcare Provider",
      client: "MedSecure Corp",
      category: "Cybersecurity",
      challenge: "Non-compliant infrastructure vulnerable to cyber attacks with no incident response plan.",
      solution: "Implemented comprehensive security framework, HIPAA compliance, and 24/7 monitoring.",
      results: [
        { metric: "100%", label: "HIPAA Compliant" },
        { metric: "0", label: "Security Breaches" },
        { metric: "50%", label: "Risk Reduction" },
      ],
      technologies: ["SIEM", "WAF", "MFA", "Encryption", "Compliance"],
      duration: "6 months",
      image: "bg-gradient-to-br from-destructive/20 to-primary/20",
    },
    {
      title: "DeFi Platform Smart Contract Development",
      client: "CryptoVault DAO",
      category: "Blockchain",
      challenge: "Needed secure and audited smart contracts for staking and governance.",
      solution: "Developed Solidity contracts with comprehensive testing and third-party audit.",
      results: [
        { metric: "$2M+", label: "TVL Secured" },
        { metric: "100%", label: "Audit Passed" },
        { metric: "3", label: "Gas Optimized" },
      ],
      technologies: ["Solidity", "Hardhat", "ethers.js", "OpenZeppelin", "IPFS"],
      duration: "3 months",
      image: "bg-gradient-to-br from-accent/20 to-secondary/20",
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Case Studies
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Real-world success stories showcasing our expertise in delivering transformative solutions
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="relative overflow-hidden hover-lift shadow-professional">
                  <GlowingEffect
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={80}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Visual Side */}
                    <div className={`${study.image} p-8 lg:p-12 flex flex-col justify-center min-h-[300px]`}>
                      <Badge className="w-fit mb-4" variant="secondary">
                        {study.category}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Client: <span className="text-foreground font-medium">{study.client}</span>
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {study.duration}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12 bg-card">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>

                        {/* Results */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-4">Results</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {study.results.map((result) => (
                              <div key={result.label} className="text-center p-4 bg-muted/50 rounded-lg">
                                <div className="text-2xl font-bold text-primary">{result.metric}</div>
                                <div className="text-xs text-muted-foreground">{result.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;