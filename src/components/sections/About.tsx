import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "DevOps",
    "Linux",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "Terraform",
    "Ansible",
    "Jenkins",
    "GitLab CI/CD",
    "Monitoring"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="animate-slide-up">
              <Card className="hover-lift shadow-professional">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-card rounded-2xl flex items-center justify-center">
                    <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center">
                      <span className="text-muted-foreground text-lg font-medium">
                        Professional Photo
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="animate-slide-up delay-200">
              <Card className="hover-lift shadow-professional">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Passionate DevOps Engineer
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    With 9 years of experience in IT, I specialize in DevOps practices, 
                    Linux system administration, networking, and cloud technologies. 
                    I'm passionate about automating processes, optimizing infrastructure, 
                    and helping teams deliver better software faster.
                  </p>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    My expertise spans across multiple cloud platforms and I focus on 
                    creating scalable, secure, and efficient solutions that drive 
                    business success.
                  </p>

                  {/* Skills */}
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      Core Skills
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`hover-lift animate-scale-in delay-${100 + index * 50}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;