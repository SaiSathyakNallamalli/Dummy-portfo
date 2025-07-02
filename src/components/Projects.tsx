import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Virtual Mouse Using Webcam",
      description: "Built a hands-free navigation system using Python, OpenCV and gaze tracking. Revolutionary interface allowing users to control computers through eye movements and gestures.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Gaze Tracking"],
      features: ["Hands-free control", "Real-time tracking", "Gesture recognition"],
      color: "neon-cyan",
      category: "AI/ML"
    },
    {
      title: "Smart Healthcare AI (GARFIELD)",
      description: "IoT-based system to manage senior care with embedded sensors. Advanced monitoring system providing real-time health analytics and emergency alerts.",
      technologies: ["IoT", "Embedded Systems", "Health Analytics", "Sensors"],
      features: ["Real-time monitoring", "Emergency alerts", "Health analytics"],
      color: "neon-pink", 
      category: "IoT/Healthcare"
    },
    {
      title: "Smart Band for Seniors",
      description: "Geriatric-controlled wearable device designed for non-verbal communication. Innovative wearable enabling seniors to communicate through gesture-based interfaces.",
      technologies: ["Wearable Tech", "Embedded Systems", "Gesture Control", "IoT"],
      features: ["Gesture communication", "Senior-friendly design", "Emergency features"],
      color: "neon-purple",
      category: "Wearable Tech"
    },
    {
      title: "Agricultural Security System",
      description: "Created a drone-based alert system for intrusion detection in rural farms. Advanced surveillance system protecting agricultural assets through intelligent monitoring.",
      technologies: ["Drone Technology", "Computer Vision", "Alert Systems", "Rural Tech"],
      features: ["Drone surveillance", "Intrusion detection", "Alert notifications"],
      color: "neon-green",
      category: "Agricultural Tech"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Innovation Lab
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into cutting-edge solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`p-8 bg-dark-elevated border border-${project.color}/30 hover:border-${project.color} hover:shadow-glow-${project.color.split('-')[1]} transition-all duration-300 group animate-fade-in-up overflow-hidden relative`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${project.color}/5 rounded-full -translate-y-16 translate-x-16`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Badge className={`bg-${project.color}/20 text-${project.color} border-${project.color}/50`}>
                    {project.category}
                  </Badge>
                </div>

                <h3 className={`text-2xl font-bold text-${project.color} group-hover:animate-neon-flicker mb-4`}>
                  {project.title}
                </h3>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neon-purple mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground/70 flex items-center">
                        <span className={`text-${project.color} mr-2`}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className={`border-${project.color}/50 text-${project.color}/80 hover:bg-${project.color}/10 transition-all duration-300 text-xs`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="neon" 
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button 
                    variant="cyber" 
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://github.com/saisathyak', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;