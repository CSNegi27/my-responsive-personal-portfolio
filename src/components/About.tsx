import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MapPin, Calendar, Coffee } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Calendar, label: "Current Year", value: "3rd Year" },
    { icon: Coffee, label: "CGPA", value: "8.16/10" },
    { icon: MapPin, label: "Based In", value: "New Delhi" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              B. Tech student passionate about technology, competitive programming, and building innovative solutions
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture and Content */}
          <div className="animate-slide-up">
            <div className="flex flex-col items-center lg:items-start mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 shadow-glow">
                <img 
                  src="/lovable-uploads/92a77d82-b1ea-48f5-9662-782468f4ff51.png" 
                  alt="Chaitanya Singh Negi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-6">Hello! I'm Chaitanya Singh Negi</h3>
            </div>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a passionate 3rd year B. Tech student in Information Technology at Netaji Subhas 
                University of Technology, New Delhi. My journey in tech started with academic excellence, 
                maintaining a strong CGPA of 8.16/10 while exploring various domains of technology.
              </p>
              <p>
                I specialize in Java, C++, and web technologies including HTML, CSS, JavaScript, PHP, 
                and Laravel. Through multiple internships and training programs, I've gained hands-on 
                experience in AI, machine learning, and full-stack web development.
              </p>
              <p>
                I'm actively involved in competitive programming and have achieved top rankings in 
                algorithmic competitions. I believe in continuous learning and applying theoretical 
                knowledge to real-world projects and challenges.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="gradient" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://drive.google.com/file/d/1EV1_B_GS356o-lhCYsWe0FVIbaYOxPYN/view?usp=sharing', '_blank')}
              >
                <Download className="group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://www.linkedin.com/in/chaitanya-singh-negi-81a915288/', '_blank')}
              >
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