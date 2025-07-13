import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chaitanyasnegi@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=chaitanyasnegi@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8800872518",
      href: "tel:+918800872518"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dwarka, New Delhi, India",
      href: "https://www.google.com/maps/search/?api=1&query=Dwarka,+Delhi,+India"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/CSNegi27", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chaitanya-singh-negi-81a915288/", label: "LinkedIn" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=chaitanyasnegi@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Get In <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Interested in collaboration or have questions about my projects? I'd love to connect and discuss opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full group" variant="gradient" size="lg">
                  <Send className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-scale-in">
            <Card className="bg-gradient-primary border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  I'm a passionate student always eager to learn and contribute to innovative projects. 
                  Whether you have internship opportunities, project collaborations, or just want to connect, feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
                    >
                      <div className="p-3 bg-primary-foreground/10 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-sm opacity-80">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h4 className="text-lg font-semibold mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="hover:shadow-card transition-all duration-300 hover:scale-110"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-5 h-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Available for new projects</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Open to internships, projects, and learning opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};