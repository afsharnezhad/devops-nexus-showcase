import { Server, Cloud, Wrench, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "DevOps Automation",
      description: "Streamline your development workflow with automated CI/CD pipelines, infrastructure as code, and deployment strategies that reduce time-to-market and improve reliability."
    },
    {
      icon: Cloud,
      title: "Cloud & Docker",
      description: "Migrate and optimize your applications with containerization, orchestration, and cloud-native solutions across AWS, Azure, and Google Cloud Platform."
    },
    {
      icon: Wrench,
      title: "IT Support",
      description: "Comprehensive IT infrastructure support including system administration, monitoring, troubleshooting, and performance optimization to keep your systems running smoothly."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Implement robust security measures, vulnerability assessments, compliance frameworks, and security best practices to protect your digital assets."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Services
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive DevOps and IT solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className={`hover-lift shadow-professional animate-slide-up delay-${index * 100}`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-button rounded-full flex items-center justify-center mb-4 hover-glow">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;