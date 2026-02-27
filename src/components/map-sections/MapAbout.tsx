import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import professionalHeadshot from "@/assets/professional-headshot.jpg";

const skills = ["DevOps", "Linux", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "Ansible", "Jenkins", "GitLab CI/CD", "Monitoring"];

const MapAbout = () => (
  <div className="min-h-screen bg-background flex items-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="hover-lift shadow-professional">
            <CardContent className="p-8">
              <div className="aspect-square bg-gradient-to-br from-card to-muted rounded-2xl overflow-hidden">
                <img src={professionalHeadshot} alt="Professional headshot" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </CardContent>
          </Card>
          <Card className="hover-lift shadow-professional">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Passionate DevOps Engineer</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With years of experience in cloud infrastructure, automation, and DevOps practices, I help organizations build reliable, scalable, and secure systems. My expertise spans across major cloud platforms, container orchestration, and CI/CD pipelines.
              </p>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Core Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="hover-lift">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default MapAbout;
