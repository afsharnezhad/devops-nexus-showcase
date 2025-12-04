import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const CorporateClients = () => {
  const clients = [
    { name: "TechCorp", industry: "Technology" },
    { name: "FinanceHub", industry: "Financial Services" },
    { name: "HealthPlus", industry: "Healthcare" },
    { name: "RetailMax", industry: "E-Commerce" },
    { name: "EduLearn", industry: "Education" },
    { name: "LogiTrans", industry: "Logistics" },
  ];

  const testimonials = [
    {
      quote: "Corporate DevOps transformed our infrastructure. Our deployment time went from hours to minutes.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      rating: 5,
    },
    {
      quote: "The cybersecurity audit they performed helped us achieve SOC2 compliance in record time.",
      author: "Michael Roberts",
      role: "CISO, FinanceHub",
      rating: 5,
    },
    {
      quote: "Their smart contract expertise saved us months of development time. Highly recommended!",
      author: "David Kim",
      role: "CEO, CryptoVentures",
      rating: 5,
    },
  ];

  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Trusted Partners</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by industry leaders across technology, finance, healthcare, and more.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-primary">{client.name[0]}</span>
              </div>
              <span className="font-semibold text-foreground">{client.name}</span>
              <span className="text-xs text-muted-foreground">{client.industry}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

export default CorporateClients;
