import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendingUp, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CorporateCaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Migration",
      client: "RetailMax",
      category: "DevOps",
      image: "from-blue-600 to-cyan-600",
      challenge: "Legacy infrastructure causing frequent downtime during peak sales periods.",
      solution: "Migrated to Kubernetes with auto-scaling and implemented blue-green deployments.",
      metrics: [
        { icon: TrendingUp, label: "Uptime", value: "99.99%" },
        { icon: Clock, label: "Deploy Time", value: "-85%" },
        { icon: Zap, label: "Performance", value: "+200%" },
      ],
      tags: ["Kubernetes", "AWS", "CI/CD", "Terraform"],
    },
    {
      title: "Banking Security Overhaul",
      client: "FinanceHub",
      category: "Cybersecurity",
      image: "from-red-600 to-orange-600",
      challenge: "Failed compliance audits and concerns about data breach vulnerabilities.",
      solution: "Complete security assessment, implemented zero-trust architecture and achieved SOC2 Type II.",
      metrics: [
        { icon: Shield, label: "Compliance", value: "100%" },
        { icon: Clock, label: "Audit Time", value: "-60%" },
        { icon: TrendingUp, label: "Security Score", value: "+95%" },
      ],
      tags: ["SOC2", "Zero Trust", "Penetration Testing", "Encryption"],
    },
    {
      title: "DeFi Payment System",
      client: "CryptoVentures",
      category: "Smart Contracts",
      image: "from-purple-600 to-pink-600",
      challenge: "Needed secure, automated payment processing with smart contract integration.",
      solution: "Built custom Solidity contracts with automated escrow and multi-sig wallet support.",
      metrics: [
        { icon: Zap, label: "Gas Savings", value: "40%" },
        { icon: Shield, label: "Audit Score", value: "A+" },
        { icon: TrendingUp, label: "Transaction Vol", value: "$50M+" },
      ],
      tags: ["Solidity", "Ethereum", "Web3", "DeFi"],
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Case <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real projects. See how we've helped enterprises transform their operations.
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
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {/* Visual Side */}
                    <div className={`bg-gradient-to-br ${study.image} p-8 lg:p-12 flex flex-col justify-between min-h-[300px]`}>
                      <div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-4">
                          {study.category}
                        </Badge>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{study.title}</h3>
                        <p className="text-white/80">{study.client}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-white/30 text-white bg-white/10">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                          {study.metrics.map((metric) => (
                            <div key={metric.label} className="text-center">
                              <metric.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                              <div className="text-xl font-bold text-foreground">{metric.value}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>

                        <Button variant="ghost" className="mt-4 group">
                          Read Full Case Study
                          <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateCaseStudies;
