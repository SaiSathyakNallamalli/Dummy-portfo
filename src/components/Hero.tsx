import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-neon-pink rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-neon-green rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-elevated opacity-50"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent animate-glow-pulse">
            SAI SATHYAK
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-neon-cyan animate-neon-flicker">
            NALLAMALLI
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-foreground/80">
            Software Developer Engineer
          </p>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Crafting the future through code • Full Stack Developer • Cloud Architect
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="min-w-[200px]"
            >
              View My Work
            </Button>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="min-w-[200px]"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown 
            className="w-8 h-8 text-neon-cyan cursor-pointer hover:text-neon-pink transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;