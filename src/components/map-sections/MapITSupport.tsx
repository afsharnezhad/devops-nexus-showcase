import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Wifi, HardDrive, Headphones, ShieldCheck, Settings } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Monitor, Wifi, HardDrive, Headphones, ShieldCheck, Settings };

const services = [
  { id: 1, title: "Network Infrastructure", icon: "Wifi", description: "Enterprise networking design, implementation, monitoring and troubleshooting.", features: ["Network Design", "VPN Setup", "Firewall Config", "Performance Monitoring"] },
  { id: 2, title: "Server Hardening & Management", icon: "HardDrive", description: "Linux and Windows server administration, hardening and patch management.", features: ["OS Hardening", "Patch Management", "Backup Strategy", "Disaster Recovery"] },
  { id: 3, title: "Help Desk & Remote Support", icon: "Headphones", description: "24/7 help desk, ticketing system and remote desktop support for your team.", features: ["24/7 Support", "Ticketing System", "Remote Access", "SLA Management"] },
  { id: 4, title: "Endpoint Security", icon: "ShieldCheck", description: "Endpoint protection, antivirus management and device compliance policies.", features: ["Antivirus Management", "Device Compliance", "MDM", "Zero Trust"] },
];

const MapITSupport = () => (
  <div className="min-h-screen bg-background">
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">IT Support Services</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">IT Support</span> Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">Comprehensive IT support services including networking, server management, help desk and endpoint security.</p>
        </motion.div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Monitor;
            return (
              <motion.div key={s.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all hover:shadow-lg group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground mb-6">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.features.map(f => <Badge key={f} variant="outline" className="text-xs">{f}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

export default MapITSupport;
