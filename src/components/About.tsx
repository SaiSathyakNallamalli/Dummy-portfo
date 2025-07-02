import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6 text-neon-purple">
              Software Developer Engineer
            </h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Multifaceted Software Developer Engineer with proven expertise in Full Stack 
              Development, Data Science, and MLOps/Development. Proficient in developing scalable 
              web applications using React.js, Node.js, and Django, and deploying Python-based 
              solutions for Data Science projects.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Expertise in technologies like AWS, Azure, and cloud platforms, collaborating 
              effectively with cross-functional teams and stakeholders to deliver high-quality 
              solutions. Actively seeking opportunities to enhance my technical skills and 
              contribute to innovative projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="p-4 bg-dark-elevated border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-cyan mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </Card>
              <Card className="p-4 bg-dark-elevated border-neon-pink/30 hover:border-neon-pink transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-pink mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <Card className="p-8 bg-dark-elevated border border-neon-purple/30 hover:shadow-glow-purple transition-all duration-300">
              <h4 className="text-xl font-semibold mb-4 text-neon-purple">Education</h4>
              <div className="mb-6">
                <h5 className="font-semibold text-foreground">Master's in Computer Science</h5>
                <p className="text-neon-cyan">University of Seattle</p>
                <p className="text-muted-foreground text-sm">2021 - 2023</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-4 text-neon-purple">Location</h4>
              <p className="text-foreground/80">Redmond, WA</p>
              
              <div className="mt-6 flex gap-4">
                <a 
                  href="https://github.com/saisathyak" 
                  className="text-neon-cyan hover:text-neon-pink transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/saisathyakanallamalli" 
                  className="text-neon-cyan hover:text-neon-pink transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;