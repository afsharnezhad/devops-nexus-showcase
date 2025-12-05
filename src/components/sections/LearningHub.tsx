import { motion } from "framer-motion";
import { BookOpen, Video, Users, Calendar, ArrowRight, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const LearningHub = () => {
  const categories = [
    { icon: BookOpen, title: "Tutorials", count: "25+", description: "Step-by-step guides" },
    { icon: Video, title: "Courses", count: "12", description: "In-depth video series" },
    { icon: Users, title: "Workshops", count: "8", description: "Hands-on sessions" },
    { icon: Calendar, title: "Webinars", count: "Monthly", description: "Live Q&A sessions" },
  ];

  const featuredContent = [
    {
      type: "Course",
      title: "Kubernetes Mastery: From Zero to Hero",
      description: "Complete guide to container orchestration with real-world projects",
      duration: "12 hours",
      level: "Intermediate",
      rating: 4.9,
      students: 1250,
      image: "bg-gradient-to-br from-primary/30 to-accent/30",
    },
    {
      type: "Tutorial",
      title: "Building CI/CD Pipelines with GitHub Actions",
      description: "Automate your deployment workflow with modern DevOps practices",
      duration: "2 hours",
      level: "Beginner",
      rating: 4.8,
      students: 890,
      image: "bg-gradient-to-br from-accent/30 to-secondary/30",
    },
    {
      type: "Workshop",
      title: "Smart Contract Security Best Practices",
      description: "Learn to identify and prevent common vulnerabilities",
      duration: "3 hours",
      level: "Advanced",
      rating: 4.9,
      students: 456,
      image: "bg-gradient-to-br from-destructive/20 to-primary/30",
    },
  ];

  const upcomingWebinars = [
    { title: "Zero Trust Security Architecture", date: "Dec 15, 2024", spots: 45 },
    { title: "AWS Cost Optimization Strategies", date: "Dec 20, 2024", spots: 32 },
    { title: "Introduction to Web3 Development", date: "Jan 5, 2025", spots: 60 },
  ];

  return (
    <section id="learning" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Learning Hub
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Expand your skills with our comprehensive learning resources
            </p>
          </motion.div>

          {/* Category Cards */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="relative text-center p-6 hover-lift cursor-pointer group">
                    <GlowingEffect
                      spread={30}
                      glow={true}
                      disabled={false}
                      proximity={50}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <div className="w-14 h-14 bg-gradient-button rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{category.title}</h3>
                    <p className="text-2xl font-bold text-primary mb-1">{category.count}</p>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Featured Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Featured Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map((content, index) => (
                <motion.div
                  key={content.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="relative h-full overflow-hidden hover-lift group">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <div className={`${content.image} h-40 flex items-end p-4`}>
                      <Badge variant="secondary">{content.type}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {content.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {content.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {content.duration}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {content.level}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span className="font-medium">{content.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {content.students.toLocaleString()} students
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Webinars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden">
              <GlowingEffect
                spread={60}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Upcoming Webinars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {upcomingWebinars.map((webinar) => (
                    <div 
                      key={webinar.title}
                      className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                    >
                      <h4 className="font-medium text-foreground mb-2">{webinar.title}</h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{webinar.date}</span>
                        <Badge variant="outline">{webinar.spots} spots left</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningHub;