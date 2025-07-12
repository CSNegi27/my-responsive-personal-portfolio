import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "SASS"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Postman"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Problem Solving", "Team Leadership", "Communication", "Agile", "Mentoring", "Code Review"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            My <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="hover:shadow-card transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Professional Journey
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              {[
                {
                  year: "2024 - Present",
                  title: "Senior Full Stack Developer",
                  company: "TechCorp Inc.",
                  description: "Leading development of enterprise web applications using React and Node.js"
                },
                {
                  year: "2022 - 2024",
                  title: "Full Stack Developer",
                  company: "StartupXYZ",
                  description: "Built and maintained multiple client applications with modern web technologies"
                },
                {
                  year: "2021 - 2022",
                  title: "Frontend Developer",
                  company: "WebAgency",
                  description: "Specialized in creating responsive, user-friendly interfaces for various clients"
                }
              ].map((job, index) => (
                <div key={index} className="relative flex items-start mb-8 animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="ml-16">
                    <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-sm text-primary font-semibold mb-1">{job.year}</div>
                        <h4 className="text-lg font-bold mb-1">{job.title}</h4>
                        <div className="text-muted-foreground font-medium mb-2">{job.company}</div>
                        <p className="text-sm text-muted-foreground">{job.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};