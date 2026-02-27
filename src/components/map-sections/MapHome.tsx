import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import {
  SiLinux, SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud,
  SiTerraform, SiAnsible, SiJenkins, SiGitlab, SiPrometheus, SiGrafana,
} from "react-icons/si";
import { useMemo } from "react";

const backgroundIcons = [SiLinux, SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud, SiTerraform, SiAnsible, SiJenkins, SiGitlab, SiPrometheus, SiGrafana];

const MapHome = () => {
  const iconPositions = useMemo(() =>
    Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      Icon: backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)],
    })), []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <ShaderAnimation />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {iconPositions.map((pos, i) => {
          const Icon = pos.Icon;
          return (
            <div key={i} className="absolute animate-float-slow opacity-10" style={{ left: `${pos.left}%`, top: `${pos.top}%`, animationDelay: `${pos.delay}s` }}>
              <Icon className="w-8 h-8 text-foreground/20" />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          <span className="block">Mohammad Sadegh</span>
          <span className="block">Afsharnezhad</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-8">
          DevOps & Cloud Infrastructure Engineer
        </p>
        <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Building scalable, automated infrastructure with modern DevOps practices.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold shadow-hero hover-lift">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="lg" className="text-foreground hover:bg-foreground/10 p-3" asChild>
              <a href="https://linkedin.com/in/afsharnezhad" target="_blank" rel="noopener noreferrer"><Linkedin className="h-6 w-6" /></a>
            </Button>
            <Button variant="ghost" size="lg" className="text-foreground hover:bg-foreground/10 p-3" asChild>
              <a href="https://github.com/afsharnezhad" target="_blank" rel="noopener noreferrer"><Github className="h-6 w-6" /></a>
            </Button>
            <Button variant="ghost" size="lg" className="text-foreground hover:bg-foreground/10 p-3" asChild>
              <a href="mailto:mo.afsharnezhad@gmail.com"><Mail className="h-6 w-6" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapHome;
