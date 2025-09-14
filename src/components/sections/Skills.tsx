import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "DevOps & Automation",
      skills: [
        { name: "Docker & Kubernetes", level: 95 },
        { name: "CI/CD Pipelines", level: 92 },
        { name: "Infrastructure as Code", level: 88 },
        { name: "Configuration Management", level: 85 }
      ]
    },
    {
      category: "Cloud Platforms",
      skills: [
        { name: "Amazon Web Services", level: 90 },
        { name: "Microsoft Azure", level: 85 },
        { name: "Google Cloud Platform", level: 80 },
        { name: "Cloud Security", level: 87 }
      ]
    },
    {
      category: "System Administration",
      skills: [
        { name: "Linux Administration", level: 95 },
        { name: "Network Configuration", level: 88 },
        { name: "System Monitoring", level: 92 },
        { name: "Performance Tuning", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Technical proficiency levels based on years of hands-on experience
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.category}
                className={`hover-lift shadow-professional animate-slide-up delay-${categoryIndex * 200}`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-center text-foreground">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`animate-fade-in delay-${(categoryIndex * 200) + (skillIndex * 100)}`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;