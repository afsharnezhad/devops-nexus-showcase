import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useClients } from "@/hooks/useStrapi";
import ClientCard from "@/components/strapi/ClientCard";
import ContentSkeleton from "@/components/strapi/ContentSkeleton";
import ErrorState from "@/components/strapi/ErrorState";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CorporateClients = () => {
  const { data, isLoading, isError, refetch } = useClients();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const clients = data?.data || [];

  // Fallback testimonials (shown always)
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

  // Merge Strapi client testimonials if available
  const clientTestimonials = clients
    .filter((c) => c.attributes.testimonial)
    .map((c) => ({
      quote: c.attributes.testimonial!,
      author: c.attributes.name,
      role: c.attributes.project_type,
      rating: 5,
    }));

  const allTestimonials = clientTestimonials.length > 0 ? clientTestimonials : testimonials;

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

        {/* Dynamic Clients from Strapi */}
        {isLoading && <ContentSkeleton count={6} />}
        {isError && <ErrorState message="Could not load clients from CMS." onRetry={refetch} />}

        {clients.length > 0 && (
          <>
            {/* Grid View */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {clients.map((client, index) => (
                <ClientCard key={client.id} client={client} index={index} />
              ))}
            </div>

            {/* Slider View */}
            <div className="relative mb-20">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6">
                  {clients.map((client, index) => (
                    <div key={client.id} className="flex-[0_0_280px] min-w-0">
                      <ClientCard client={client} index={index} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <Button variant="outline" size="icon" className="rounded-full" disabled={!canScrollPrev} onClick={() => emblaApi?.scrollPrev()}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" disabled={!canScrollNext} onClick={() => emblaApi?.scrollNext()}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
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
