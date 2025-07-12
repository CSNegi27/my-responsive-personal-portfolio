import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and order processing.",
      image: "photo-1556742049-0cfed4f6a45d",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "photo-1611224923853-80b023f02d71",
      technologies: ["Vue.js", "Express", "Socket.io", "MongoDB", "AWS"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using modern APIs.",
      image: "photo-1504608524841-42fe6f032b4b",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive dashboard for social media metrics with real-time data visualization, performance tracking, and automated reporting.",
      image: "photo-1460925895917-afdab827c52f",
      technologies: ["Next.js", "Python", "D3.js", "Redis", "Docker"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Featured <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-scale-in ${
                project.featured 
                  ? 'bg-gradient-to-br from-card/80 to-card/60 border-primary/20 shadow-glow' 
                  : 'bg-card/50 border-border/50'
              } backdrop-blur-sm`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop`}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-primary text-primary-foreground border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className={`${project.featured ? 'text-2xl' : 'text-xl'} mb-2`}>
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="hover:scale-105 transition-transform">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-2">
                      <Button variant="outline" size="sm" className="group">
                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Code
                      </Button>
                      <Button variant="default" size="sm" className="group">
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary border-0 inline-block animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Want to see more?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Check out my GitHub for more projects and contributions
              </p>
              <Button variant="secondary" size="lg" className="group">
                <Github className="group-hover:scale-110 transition-transform" />
                Visit GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};