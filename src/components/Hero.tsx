import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/portfolio-hero.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Portfolio Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-glow/60 to-transparent"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-glow/30 rounded-full blur-lg animate-bounce"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="inline-block p-1 bg-gradient-primary rounded-full mb-6">
              <div className="bg-card px-6 py-2 rounded-full">
                <span className="text-sm font-medium text-muted-foreground">
                  👋 Welcome to my portfolio
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-card animate-slide-up delay-100">
            Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-card/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-200">
            Crafting beautiful, responsive web applications with modern technologies. 
            I bring ideas to life through clean code and intuitive user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in delay-300">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="xl"
              className="group"
            >
              <Download className="group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in delay-500">
            <Button variant="ghost" size="icon" className="text-card hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-card hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-card hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-card/60" />
      </div>
    </section>
  );
};