import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Espire Infolabs Pvt Ltd",
      location: "Hyderabad, India",
      period: "July 2021 - December 2022",
      description: [
        "Designed and deployed dynamic templates using Spring Boot for scalable enterprise solutions",
        "Integrated Thunderhead workflows for enhanced customer engagement and optimized systems",
        "Achieved 95% testing accuracy through comprehensive QA testing and functional validation",
        "Supported team in test cases and provided technical resolution ensuring system reliability"
      ],
      technologies: ["Spring Boot", "Java", "Thunderhead", "QA Testing", "Enterprise Solutions"],
      color: "neon-cyan"
    },
    {
      title: "Implementation Associate",
      company: "Altruista Health Service Pvt Ltd",
      location: "Hyderabad, India", 
      period: "Jan 2021 - December 2022",
      description: [
        "Built dynamic templates using SMARTCOMM and Thunderhead for streamlined customer processes",
        "Practiced in cross-team collaboration for campaign management and system optimization"
      ],
      technologies: ["SMARTCOMM", "Thunderhead", "Campaign Management", "Cross-team Collaboration"],
      color: "neon-pink"
    },
    {
      title: "Software Developer Intern",
      company: "Cedar Info Tech Pvt Ltd",
      location: "Hyderabad, India",
      period: "Jan 2020 - June 2020", 
      description: [
        "Developed a comprehensive mobile application using the Ionic framework",
        "Integrated front-end interfaces with RESTful APIs and implemented local storage solutions"
      ],
      technologies: ["Ionic", "Mobile Development", "RESTful APIs", "Local Storage"],
      color: "neon-purple"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-cyber hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className={`relative animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 bg-${exp.color} rounded-full border-4 border-dark-surface shadow-glow-${exp.color.split('-')[1]} hidden md:block`}></div>
                
                <div className="md:ml-20">
                  <Card className={`p-8 bg-dark-elevated border border-${exp.color}/30 hover:border-${exp.color} hover:shadow-glow-${exp.color.split('-')[1]} transition-all duration-300 group`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold text-${exp.color} group-hover:animate-neon-flicker mb-2`}>
                          {exp.title}
                        </h3>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {exp.company}
                        </h4>
                        <p className="text-muted-foreground">
                          {exp.location}
                        </p>
                      </div>
                      <Badge className={`bg-dark-bg border-${exp.color} text-${exp.color} mt-2 md:mt-0`}>
                        {exp.period}
                      </Badge>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-foreground/80 flex items-start">
                          <span className={`text-${exp.color} mr-2 mt-1`}>▶</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className={`border-${exp.color}/50 text-${exp.color}/80 hover:bg-${exp.color}/10 transition-all duration-300`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;