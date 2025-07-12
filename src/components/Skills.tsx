import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Java", "C++", "JavaScript", "PHP", "HTML", "CSS"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: ["Laravel", "Bootstrap", "Data Structures", "Algorithms", "REST APIs", "Web Development"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Specializations",
      icon: "🚀",
      skills: ["Machine Learning", "Artificial Intelligence", "NLP", "Competitive Programming", "Software Development"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Academic Excellence",
      icon: "🎓",
      skills: ["Problem Solving", "Algorithm Design", "Project Management", "Research & Development"],
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
            Education & Training Journey
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              {[
                {
                  year: "2023 - Present",
                  title: "B. Tech Information Technology",
                  company: "Netaji Subhas University of Technology, New Delhi",
                  description: "3rd Year student with CGPA 8.16/10, focusing on modern programming languages and web technologies"
                },
                {
                  year: "Jun-Jul 2024",
                  title: "AI & ML Training Programs",
                  company: "Multiple Organizations",
                  description: "Completed 6-week AI training with IBM SkillsBuild, NLP & Generative AI workshops, and various web development internships"
                },
                {
                  year: "2021",
                  title: "Higher Secondary Education",
                  company: "Central Board of Secondary Education",
                  description: "Completed 12th grade with 96% marks, demonstrating strong academic foundation in sciences"
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