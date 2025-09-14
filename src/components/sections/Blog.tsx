import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      title: "Implementing Zero-Downtime Deployments with Kubernetes",
      excerpt: "Learn how to achieve zero-downtime deployments using Kubernetes rolling updates, health checks, and proper resource management strategies.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "DevOps",
      tags: ["Kubernetes", "Deployment", "DevOps"]
    },
    {
      title: "AWS Cost Optimization: 10 Proven Strategies",
      excerpt: "Discover practical techniques to reduce your AWS costs without compromising performance, including reserved instances, spot instances, and more.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Cloud",
      tags: ["AWS", "Cost Optimization", "Cloud"]
    },
    {
      title: "Docker Security Best Practices for Production",
      excerpt: "Essential security practices for containerized applications, including image scanning, runtime security, and secrets management.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Security",
      tags: ["Docker", "Security", "Containers"]
    },
    {
      title: "Infrastructure as Code with Terraform",
      excerpt: "Complete guide to managing infrastructure with Terraform, including best practices, modules, and state management strategies.",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "Infrastructure",
      tags: ["Terraform", "IaC", "DevOps"]
    },
    {
      title: "Monitoring and Alerting with Prometheus and Grafana",
      excerpt: "Set up comprehensive monitoring for your applications using Prometheus for metrics collection and Grafana for visualization.",
      date: "2023-12-20",
      readTime: "11 min read",
      category: "Monitoring",
      tags: ["Prometheus", "Grafana", "Monitoring"]
    },
    {
      title: "CI/CD Pipeline Optimization Techniques",
      excerpt: "Speed up your CI/CD pipelines with parallel execution, caching strategies, and efficient testing methodologies.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "CI/CD",
      tags: ["CI/CD", "Jenkins", "GitLab"]
    }
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Latest Blog Posts
            </h2>
            <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Insights, tutorials, and best practices from the world of DevOps
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12 animate-slide-up">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={post.title}
                className={`hover-lift shadow-professional animate-slide-up delay-${index * 100}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground leading-tight hover:text-primary transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="hover:text-primary">
                      Read more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-muted-foreground text-lg">
                No blog posts found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;