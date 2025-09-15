import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Testimonials = () => {
  const { t, isRTL } = useTranslation();
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp Solutions",
      content: "Mohammad's expertise in DevOps transformation was exceptional. Our deployment process went from hours to minutes, and system reliability improved dramatically. A true professional.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Founder at StartupVenture Inc",
      content: "Working with Mohammad was a game-changer for our startup. His scalable architecture solutions saved us months of development time and thousands in operational costs.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director at Enterprise Systems",
      content: "Mohammad's security audit and compliance implementation were thorough and professional. We achieved SOC 2 certification ahead of schedule thanks to his expertise.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "VP Engineering at CloudTech",
      content: "Outstanding cloud migration expertise. Mohammad guided us through a complex AWS migration with zero downtime. His attention to detail and planning were impressive.",
      rating: 5,
      avatar: "DK"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('testimonialsTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t('testimonialsSubtitle')}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`hover-lift shadow-professional animate-slide-up delay-${index * 150}`}
              >
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className={`flex mb-4 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Client Info */}
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="w-12 h-12 bg-gradient-button rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;