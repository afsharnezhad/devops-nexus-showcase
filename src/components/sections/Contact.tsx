import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GlassIcons } from "@/components/ui/glass-icons";
import { SiLinkedin, SiGithub, SiX, SiInstagram, SiYoutube } from "react-icons/si";

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

  const socialIcons = [
    { 
      icon: <SiLinkedin />, 
      color: 'blue', 
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/afsharnezhad'
    },
    { 
      icon: <SiGithub />, 
      color: 'purple', 
      label: 'GitHub',
      href: 'https://github.com/afsharnezhad'
    },
    { 
      icon: <SiX />, 
      color: 'indigo', 
      label: 'X / Twitter',
      href: 'https://x.com/autoopsai'
    },
    { 
      icon: <SiInstagram />, 
      color: 'red', 
      label: 'Instagram',
      href: '#'
    },
    { 
      icon: <SiYoutube />, 
      color: 'orange', 
      label: 'YouTube',
      href: '#'
    },
    { 
      icon: <Mail />, 
      color: 'green', 
      label: 'Email',
      href: 'mailto:mo.afsharnezhad@gmail.com'
    },
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
            className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Connect With Me</h3>
            <div className="flex justify-center">
              <GlassIcons items={socialIcons} />
            </div>
            
            {/* Divider */}
            <div className="mt-16 mb-8">
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
                          href="mailto:mo.afsharnezhad@gmail.com" 
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          mo.afsharnezhad@gmail.com
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