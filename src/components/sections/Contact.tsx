import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Loader2, ExternalLink } from "lucide-react";
import { SiLinkedin, SiGithub, SiTelegram, SiX } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();
  const { t, isRTL } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:mo.afsharnezhad@gmail.com",
      icon: Mail,
      color: "hsl(24, 100%, 50%)", // Orange for email
      hoverColor: "hsl(24, 100%, 60%)"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/afsharnezhad",
      icon: SiLinkedin,
      color: "#0A66C2", // LinkedIn blue
      hoverColor: "#0752A8"
    },
    {
      name: "GitHub",
      url: "https://github.com/afsharnezhad", 
      icon: SiGithub,
      color: "hsl(var(--foreground))", // Adaptive to theme
      hoverColor: "hsl(var(--primary))"
    },
    {
      name: "Telegram",
      url: "https://t.me/eafshar",
      icon: SiTelegram,
      color: "#0088CC", // Telegram blue
      hoverColor: "#006BB3"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/autoopsai",
      icon: SiX,
      color: "hsl(var(--foreground))", // Adaptive to theme
      hoverColor: "hsl(var(--primary))"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    try {
      // Here you would integrate with your webhook/API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('contactTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>

          {/* Connect With Me Section */}
          <div 
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Connect With Me</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    className={`
                      group relative p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50
                      hover:border-primary/30 hover:scale-110 hover:shadow-2xl
                      transition-all duration-500 ease-out cursor-pointer
                      hover:bg-card/80 flex flex-col items-center justify-center w-24 h-24
                      ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}
                    `}
                    style={{
                      animationDelay: `${200 + index * 100}ms`,
                    }}
                    aria-label={`Connect with me on ${social.name}`}
                  >
                    {/* Social Icon */}
                    <div className="relative">
                      <IconComponent 
                        className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          color: social.color 
                        }}
                      />
                      
                      {/* Hover Glow Effect */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 blur-lg scale-150"
                        style={{
                          background: `radial-gradient(circle, ${social.color} 30%, transparent 70%)`
                        }}
                      />
                    </div>

                    {/* Hover Text */}
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-2 opacity-0 group-hover:opacity-100">
                      {social.name}
                    </span>

                    {/* External Link Indicator */}
                    {social.name !== "Email" && (
                      <ExternalLink className="w-3 h-3 absolute -top-1 -right-1 text-muted-foreground opacity-0 group-hover:opacity-60 transition-all duration-300" />
                    )}

                    {/* Animated Ring on Hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-700"
                      style={{
                        border: `2px solid ${social.color}`,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  </a>
                );
              })}
            </div>
            
            {/* Divider */}
            <div className="mt-12 mb-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"></div>
            </div>
          </div>

          <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Contact Information */}
            <div className="animate-slide-up">
              <Card className="shadow-professional h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {t('contactTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('contactDescription')}
                  </p>

                  <div className="space-y-6">
                    <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                      <div className="w-12 h-12 bg-gradient-button rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t('email')}</p>
                        <a 
                          href="mailto:info@mysite.com" 
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          info@mysite.com
                        </a>
                      </div>
                    </div>

                    <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                      <div className="w-12 h-12 bg-gradient-button rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <p className="text-muted-foreground">Available on request</p>
                      </div>
                    </div>

                    <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                      <div className="w-12 h-12 bg-gradient-button rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Location</p>
                        <p className="text-muted-foreground">Remote & On-site Available</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Response Time:</strong> I typically respond within 24 hours during business days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up delay-200">
              <Card className="shadow-professional">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {t('send')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('name')} *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t('email')} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('message')} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, challenges, or questions..."
                        rows={6}
                        disabled={isLoading}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-gradient-button hover:opacity-90 transition-opacity duration-200"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className={`${isRTL ? 'ml-2 flip-rtl' : 'mr-2'} h-4 w-4`} />
                          {t('send')}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;