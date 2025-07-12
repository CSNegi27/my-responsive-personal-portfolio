import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Employee Salary Prediction using ML",
      description: "Machine Learning project that predicts employee salaries using various algorithms. Implemented data preprocessing, feature engineering, and model evaluation techniques.",
      image: "photo-1551288049-bebda4e38f71",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Pandas"],
      github: "https://github.com/CSNegi27",
      live: "#",
      featured: true
    },
    {
      title: "Music Player Platform",
      description: "Interactive music player web application with playlist management, audio controls, and responsive design. Features include play/pause, track navigation, volume control, and modern UI.",
      image: "photo-1511671782779-c97d3d27a1d4",
      technologies: ["HTML", "CSS", "JavaScript", "Web Audio API", "Bootstrap"],
      github: "https://github.com/CSNegi27",
      live: "https://my-musicplayer-orpin.vercel.app/",
      featured: true
    },
    {
      title: "Blogging Platform",
      description: "Full-featured blogging platform with content management system, user authentication, and dynamic content delivery. Built with modern web technologies for seamless writing experience.",
      image: "photo-1499750310107-5fef28a66643",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/CSNegi27",
      live: "https://my-blogging-platform-sigma.vercel.app/",
      featured: true
    },
    {
      title: "Java Programming Projects",
      description: "Collection of 3 basic Java programming projects demonstrating core Java concepts, data structures, and algorithm implementation.",
      image: "photo-1587620962725-abab7fe55159",
      technologies: ["Java", "OOP", "Data Structures", "Algorithms", "Problem Solving"],
      github: "https://github.com/CSNegi27",
      live: "https://github.com/CSNegi27/Encryptix-Java-Tasks",
      featured: false
    },
    {
      title: "PHP Simple To-Do List",
      description: "A clean and functional to-do list application built with PHP, demonstrating CRUD operations and database integration.",
      image: "photo-1484480974693-6ca0a78fb36b",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/CSNegi27",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Academic <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Projects developed during internships, training programs, and academic coursework
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
                     <Button 
                        variant="outline" 
                        size="sm" 
                        className="group"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Code
                      </Button>
                      {project.live !== "#" ? (
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="group"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button variant="default" size="sm" disabled>
                          <ExternalLink className="w-4 h-4" />
                          Project Link
                        </Button>
                      )}
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
                Interested in collaboration?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                I'm always eager to learn and contribute to exciting projects and opportunities.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://github.com/CSNegi27', '_blank')}
              >
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