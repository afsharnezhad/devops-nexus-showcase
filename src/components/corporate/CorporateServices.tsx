import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GitBranch, TestTube, Container, FileCode, Activity, 
  GitMerge, Cloud, BookOpen, Shield, Search, Flame,
  AlertTriangle, Lock, Key, Network, FileCheck,
  Coins, FileText, Wallet, Globe, Server as ServerIcon, Rocket,
  Wifi, Headphones, HardDrive, Database, Monitor, MessageSquare
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CorporateServices = () => {
  const [activeTab, setActiveTab] = useState("devops");

  const serviceCategories = [
    {
      id: "devops",
      title: "DevOps",
      icon: GitBranch,
      color: "from-blue-500 to-cyan-500",
      services: [
        { icon: GitMerge, title: "CI/CD Pipelines", desc: "Automated build, test, and deployment workflows" },
        { icon: TestTube, title: "Automated Testing", desc: "Comprehensive testing strategies and implementation" },
        { icon: Container, title: "Containerization", desc: "Docker & Kubernetes orchestration" },
        { icon: FileCode, title: "Infrastructure as Code", desc: "Terraform, Ansible automation" },
        { icon: Activity, title: "Monitoring & Logging", desc: "Prometheus, Grafana, ELK Stack" },
        { icon: GitBranch, title: "Version Control", desc: "Git workflows and best practices" },
        { icon: Cloud, title: "Cloud Deployment", desc: "AWS, Azure, Google Cloud expertise" },
        { icon: BookOpen, title: "DevOps Consulting", desc: "Best practices and team training" },
      ],
    },
    {
      id: "security",
      title: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        { icon: Search, title: "Vulnerability Scanning", desc: "Comprehensive security assessments" },
        { icon: Flame, title: "Penetration Testing", desc: "Ethical hacking and exploit testing" },
        { icon: Shield, title: "Firewall Management", desc: "Network perimeter security" },
        { icon: AlertTriangle, title: "Incident Response", desc: "24/7 threat detection and mitigation" },
        { icon: Lock, title: "Encryption Protocols", desc: "End-to-end data protection" },
        { icon: Key, title: "Multi-Factor Auth", desc: "Advanced identity verification" },
        { icon: Network, title: "Network Monitoring", desc: "Real-time traffic analysis" },
        { icon: FileCheck, title: "Compliance & Risk", desc: "SOC2, HIPAA, GDPR compliance" },
      ],
    },
    {
      id: "blockchain",
      title: "Smart Contracts",
      icon: Coins,
      color: "from-purple-500 to-pink-500",
      services: [
        { icon: FileCode, title: "Solidity Development", desc: "Custom smart contract development" },
        { icon: FileText, title: "Contract Templates", desc: "Pre-built payment and agreement contracts" },
        { icon: Monitor, title: "Contract UI Builder", desc: "User-friendly contract interfaces" },
        { icon: Wallet, title: "Wallet Integration", desc: "MetaMask, WalletConnect support" },
        { icon: Globe, title: "Web3 APIs", desc: "ethers.js and web3.js integration" },
        { icon: ServerIcon, title: "Testnet Deployment", desc: "Sepolia, Goerli testing" },
        { icon: Rocket, title: "Mainnet Launch", desc: "Production blockchain deployment" },
        { icon: Coins, title: "Crypto Payments", desc: "Automated payment processing" },
      ],
    },
    {
      id: "itsupport",
      title: "IT Support",
      icon: Headphones,
      color: "from-green-500 to-emerald-500",
      services: [
        { icon: Wifi, title: "Networking Support", desc: "LAN/WAN setup and optimization" },
        { icon: Headphones, title: "Remote Support", desc: "24/7 helpdesk and troubleshooting" },
        { icon: HardDrive, title: "Server Hardening", desc: "Security-focused server configuration" },
        { icon: Database, title: "Backup & Recovery", desc: "Disaster recovery planning" },
        { icon: Monitor, title: "OS Configuration", desc: "Linux and Windows administration" },
        { icon: Cloud, title: "Cloud Migration", desc: "Seamless infrastructure transitions" },
        { icon: MessageSquare, title: "IT Consultation", desc: "Strategic technology planning" },
        { icon: ServerIcon, title: "Managed Services", desc: "Complete IT infrastructure management" },
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Enterprise-Grade <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions designed for modern enterprises. From infrastructure to security, we've got you covered.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent mb-12">
            {serviceCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={`flex items-center gap-2 px-4 py-4 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:${category.color} data-[state=active]:text-white transition-all`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-semibold">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm group">
                        <CardContent className="p-6">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                          <p className="text-muted-foreground text-sm">{service.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default CorporateServices;
