import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sai.sathyak@nalamalli.ac.in",
      href: "mailto:sai.sathyak@nalamalli.ac.in",
      color: "neon-cyan"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "425-358-0640",
      href: "tel:+14253580640",
      color: "neon-pink"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Redmond, WA",
      href: "#",
      color: "neon-purple"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/saisathyak",
      color: "neon-cyan"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/saisathyakanallamalli",
      color: "neon-pink"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on the next big thing? Let's build the future together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <Card className="p-8 bg-dark-elevated border border-neon-cyan/30 hover:shadow-glow-cyan transition-all duration-300 mb-8">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">Get In Touch</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborative ventures. Whether you have a question or just want to say hi, 
                I'll get back to you!
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-dark-bg border border-${info.color}/30 hover:border-${info.color} hover:shadow-glow-${info.color.split('-')[1]} transition-all duration-300 group`}
                  >
                    <div className={`text-${info.color} group-hover:animate-glow-pulse`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className={`font-semibold text-${info.color}`}>{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-dark-bg border border-${social.color}/30 hover:border-${social.color} hover:shadow-glow-${social.color.split('-')[1]} transition-all duration-300 group`}
                  >
                    <div className={`text-${social.color} group-hover:animate-glow-pulse`}>
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Status Badge */}
            <div className="flex justify-center">
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50 px-4 py-2 animate-glow-pulse">
                🟢 Available for new opportunities
              </Badge>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-8 bg-dark-elevated border border-neon-pink/30 hover:shadow-glow-pink transition-all duration-300">
              <h3 className="text-2xl font-bold text-neon-pink mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Name
                    </label>
                    <Input 
                      placeholder="Your Name"
                      className="bg-dark-bg border-neon-cyan/30 focus:border-neon-cyan text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-dark-bg border-neon-cyan/30 focus:border-neon-cyan text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="Let's collaborate on..."
                    className="bg-dark-bg border-neon-cyan/30 focus:border-neon-cyan text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="bg-dark-bg border-neon-cyan/30 focus:border-neon-cyan text-foreground resize-none"
                  />
                </div>

                <Button 
                  variant="cyber" 
                  size="lg" 
                  className="w-full"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;