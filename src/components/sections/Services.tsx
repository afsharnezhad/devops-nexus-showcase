import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Server, Cloud, Shield, Wrench, GitBranch, Container, 
  Monitor, Database, Lock, Bug, Flame, Eye, Key, Network,
  FileCode, Wallet, Globe, Zap, HardDrive, RefreshCw, Settings
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useTranslation } from "@/hooks/useTranslation";

const Services = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("devops");

  const categories = [
    { id: "devops", label: "DevOps", icon: Server },
    { id: "security", label: "Cybersecurity", icon: Shield },
    { id: "blockchain", label: "Smart Contracts", icon: FileCode },
    { id: "support", label: "IT Support", icon: Wrench },
  ];

  const services = {
    devops: [
      { icon: GitBranch, title: "CI/CD Pipelines", description: "Automated build, test, and deployment workflows using Jenkins, GitLab CI, GitHub Actions" },
      { icon: Container, title: "Containerization", description: "Docker & Kubernetes orchestration for scalable microservices architecture" },
      { icon: Cloud, title: "Infrastructure as Code", description: "Terraform, Ansible, and Pulumi for reproducible infrastructure" },
      { icon: Monitor, title: "Monitoring & Logging", description: "Prometheus, Grafana, ELK Stack for comprehensive observability" },
      { icon: Database, title: "Cloud Deployment", description: "AWS, Azure, Google Cloud - multi-cloud strategies and optimization" },
      { icon: RefreshCw, title: "DevOps Consulting", description: "Best practices implementation and team training" },
    ],
    security: [
      { icon: Bug, title: "Vulnerability Scanning", description: "Automated security testing and vulnerability assessment" },
      { icon: Lock, title: "Penetration Testing", description: "Ethical hacking and security audits" },
      { icon: Flame, title: "Firewall Management", description: "Network security and access control configuration" },
      { icon: Eye, title: "Incident Response", description: "24/7 security monitoring and rapid incident handling" },
      { icon: Key, title: "Encryption & MFA", description: "End-to-end encryption and multi-factor authentication" },
      { icon: Network, title: "Compliance", description: "SOC 2, ISO 27001, GDPR compliance frameworks" },
    ],
    blockchain: [
      { icon: FileCode, title: "Solidity Development", description: "Custom smart contract development in Solidity & Vyper" },
      { icon: Wallet, title: "Wallet Integration", description: "MetaMask, WalletConnect, and multi-wallet support" },
      { icon: Globe, title: "Web3 Integration", description: "ethers.js and Web3.js API implementation" },
      { icon: Zap, title: "Testnet & Mainnet", description: "Deployment on Sepolia, Goerli, and production networks" },
      { icon: Lock, title: "Contract Auditing", description: "Security audits and gas optimization" },
      { icon: RefreshCw, title: "DeFi Solutions", description: "Automated payments and token management" },
    ],
    support: [
      { icon: Network, title: "Networking Support", description: "Network design, VPN setup, and troubleshooting" },
      { icon: Monitor, title: "Remote Support", description: "24/7 remote monitoring and assistance" },
      { icon: Shield, title: "Server Hardening", description: "Security hardening for Linux and Windows servers" },
      { icon: HardDrive, title: "Backup & Recovery", description: "Disaster recovery planning and implementation" },
      { icon: Settings, title: "OS Configuration", description: "Linux and Windows server administration" },
      { icon: Cloud, title: "Cloud Migration", description: "Seamless migration to cloud infrastructure" },
    ],
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('servicesTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card hover:bg-accent text-muted-foreground hover:text-foreground border border-border"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-5 h-5" />
                  {category.label}
                </motion.button>
              );
            })}
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services[activeCategory as keyof typeof services].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="relative h-full hover-lift shadow-professional group">
                      <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={2}
                      />
                      <CardHeader className="pb-4">
                        <div className="w-14 h-14 bg-gradient-button rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-lg font-bold text-foreground">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Stats Bar */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "99.9%", label: "Uptime Guaranteed" },
              { value: "24/7", label: "Support Available" },
              { value: "15+", label: "Certifications" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;