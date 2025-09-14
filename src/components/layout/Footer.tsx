import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold bg-gradient-button bg-clip-text text-transparent mb-4">
                DevOps Pro
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Transforming infrastructure with expertise in DevOps, cloud technologies, 
                and modern system architecture. Building scalable, secure, and efficient solutions.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary p-2"
                  asChild
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary p-2"
                  asChild
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary p-2"
                  asChild
                >
                  <a
                    href="mailto:info@mysite.com"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in delay-200">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#clients" },
                  { name: "Blog", href: "#blog" },
                  { name: "Contact", href: "#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-in delay-400">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>DevOps Automation</li>
                <li>Cloud Migration</li>
                <li>Infrastructure Management</li>
                <li>Security & Compliance</li>
                <li>CI/CD Implementation</li>
                <li>Monitoring & Optimization</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Mohammad Sadegh Afsharnezhad Mehrabi. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm mt-2 md:mt-0 flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-primary" /> and modern web technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;