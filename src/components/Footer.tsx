import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-neon-cyan/30 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4 animate-glow-pulse">
            &lt;SNK/&gt;
          </div>
          
          {/* Quote */}
          <p className="text-xl text-neon-purple mb-8 font-semibold">
            "Crafting the future through code"
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/saisathyak"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-elevated border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-neon-cyan group-hover:animate-glow-pulse" />
            </a>
            <a
              href="https://linkedin.com/in/saisathyakanallamalli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-elevated border border-neon-pink/30 hover:border-neon-pink hover:shadow-glow-pink transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-neon-pink group-hover:animate-glow-pulse" />
            </a>
            <a
              href="mailto:sai.sathyak@nalamalli.ac.in"
              className="p-3 rounded-lg bg-dark-elevated border border-neon-purple/30 hover:border-neon-purple hover:shadow-glow-purple transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-neon-purple group-hover:animate-glow-pulse" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-neon-cyan/20 pt-8">
            <p className="text-muted-foreground">
              © {currentYear} Sai Sathyak Nallamalli. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;