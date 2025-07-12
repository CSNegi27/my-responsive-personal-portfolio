import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MapPin, Calendar, Coffee } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "3+" },
    { icon: Coffee, label: "Projects Completed", value: "50+" },
    { icon: MapPin, label: "Based In", value: "San Francisco" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Passionate developer with a love for creating digital experiences that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Hello! I'm Alex Johnson</h3>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience building 
                modern web applications. My journey in tech started during college where I 
                discovered my love for solving complex problems through code.
              </p>
              <p>
                I specialize in React, Node.js, and TypeScript, creating scalable applications 
                that provide exceptional user experiences. I'm constantly learning new technologies 
                and best practices to stay at the forefront of web development.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical blogs, or exploring the latest design trends. I believe in 
                clean code, continuous learning, and collaborative development.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="group">
                <Download className="group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Quote Card */}
            <Card className="bg-gradient-primary border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <blockquote className="text-primary-foreground">
                  <p className="font-medium mb-2">
                    "Code is like humor. When you have to explain it, it's bad."
                  </p>
                  <footer className="text-primary-foreground/80 text-sm">
                    — Cory House
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};