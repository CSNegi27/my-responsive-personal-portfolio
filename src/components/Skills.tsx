import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

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
                  description: "Currently pursuing 3rd year with CGPA 8.16/10, specializing in modern programming languages, web technologies, and software development"
                },
                {
                  year: "Jun-Jul 2025",
                  title: "6-week AI Training Program",
                  company: "Edunet Foundation & IBM SkillsBuild",
                  description: "Comprehensive AI training program covering machine learning fundamentals, practical applications, and industry best practices"
                },
                {
                  year: "Dec 2024",
                  title: "NLP & Generative AI Workshop",
                  company: "Professional Development",
                  description: "Advanced workshop on Natural Language Processing and Generative AI technologies, exploring cutting-edge applications"
                },
                {
                  year: "Aug-Sep 2024",
                  title: "Full Stack Web Development",
                  company: "6-week Back-end Development with ConnWell & Coding Raja Internship",
                  description: "Intensive training in back-end web development, followed by front-end development internship focusing on practical project implementation"
                },
                {
                  year: "Jul-Aug 2024",
                  title: "Java Programming & Development",
                  company: "4-week Programs with Encryptix & NetPreneur Courses",
                  description: "Comprehensive Java programming training covering core concepts, OOP principles, and practical application development"
                },
                {
                  year: "May-Jun 2024",
                  title: "Software Development Internship",
                  company: "KUCH FARZ HAMARA BHI (NGO)",
                  description: "Real-world software development experience working on projects for social impact and community development"
                },
                {
                  year: "2023",
                  title: "Higher Secondary Education (12th)",
                  company: "Central Board of Secondary Education",
                  description: "Achieved 96% marks in Senior Secondary Examination, demonstrating exceptional academic performance in sciences and mathematics"
                },
                {
                  year: "2021",
                  title: "Secondary Education (10th)",
                  company: "Central Board of Secondary Education", 
                  description: "Secured 96.8% marks in Secondary Examination, establishing a strong foundation in core academic subjects"
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

          {/* Achievements Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
              Achievements & <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Recognition</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Naukri Campus Young Turks",
                  achievement: "99.83 Percentile",
                  description: "Achieved exceptional performance ranking among thousands of participants in Round-1, securing Rank 9557",
                  icon: "🏆",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  title: "InnoVortex 2.0 Participation",
                  achievement: "Top Participant Certificate",
                  description: "Recognized for outstanding participation and innovative thinking in technical competitions by TechNeeds GDTUW",
                  icon: "🎯",
                  color: "from-blue-500 to-purple-500",
                  github: "https://github.com/CSNegi27/InnoVortex-2.0-REIMAGINE-",
                  live: "https://orflaxindia.vercel.app/"
                },
                {
                  title: "ATF Stage-I Qualifier",
                  achievement: "Top 4000 Selection",
                  description: "Successfully cleared ATF Stage-I, being among top 4000 candidates selected from over 20,000+ applicants across India",
                  icon: "🚀",
                  color: "from-green-500 to-teal-500"
                }
              ].map((achievement, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                    <div className="text-primary font-semibold mb-3">{achievement.achievement}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{achievement.description}</p>
                    
                    {/* Project Links for InnoVortex 2.0 */}
                    {achievement.github && achievement.live && (
                      <div className="flex gap-3 justify-center">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group"
                          onClick={() => window.open(achievement.github, '_blank')}
                        >
                          <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Code
                        </Button>
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="group"
                          onClick={() => window.open(achievement.live, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};