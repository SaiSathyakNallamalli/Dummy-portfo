import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "JavaScript", "Java", "SQL", "C++"],
      color: "neon-cyan"
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
      color: "neon-pink"
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Django", "FastAPI", "REST APIs", "GraphQL"],
      color: "neon-purple"
    },
    {
      title: "Data Science & Analytics",
      icon: "📊",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Warehousing"],
      color: "neon-green"
    },
    {
      title: "Cloud Technologies",
      icon: "☁️",
      skills: ["AWS (EC2, S3)", "Azure", "Firebase", "MongoDB"],
      color: "neon-cyan"
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: ["Git", "Docker", "Jenkins", "Agile", "Testing"],
      color: "neon-pink"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`p-6 bg-dark-elevated border border-${category.color}/30 hover:border-${category.color} hover:shadow-glow-${category.color.split('-')[1]} transition-all duration-300 animate-fade-in-up group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className={`text-xl font-semibold text-${category.color} group-hover:animate-neon-flicker`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className={`border-${category.color}/50 text-${category.color} hover:bg-${category.color}/10 transition-all duration-300`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-neon-purple">
            Certifications & Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-dark-elevated border-neon-cyan text-neon-cyan px-4 py-2 text-sm">
              AWS Certified Cloud Practitioner
            </Badge>
            <Badge className="bg-dark-elevated border-neon-pink text-neon-pink px-4 py-2 text-sm">
              2nd Place - Best Leader Award
            </Badge>
            <Badge className="bg-dark-elevated border-neon-purple text-neon-purple px-4 py-2 text-sm">
              HEG Camp 2018 Winner
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;