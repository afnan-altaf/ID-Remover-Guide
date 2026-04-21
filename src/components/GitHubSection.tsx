import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function GitHubSection() {
  return (
    <section className="w-full relative py-20 border-y border-primary/20 bg-primary/5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwyNDAsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-50" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        <div className="w-24 h-24 mb-8 bg-background border-2 border-primary flex items-center justify-center rounded-full box-glow-cyan shadow-[0_0_50px_rgba(0,240,255,0.2)]">
          <Github className="w-12 h-12 text-primary" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
          Access the <span className="text-primary text-glow-cyan">Source</span>
        </h2>
        
        <p className="text-muted-foreground text-lg mb-10 max-w-xl">
          The SynthID Remover is open-source and available for audit. Review the code, submit pull requests, or fork the repository for your own research.
        </p>
        
        <a 
          href="https://github.com/afnan-altaf/ID-ID-Remover" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-background bg-primary uppercase tracking-widest overflow-hidden box-glow-cyan hover:bg-primary/90 transition-colors"
          data-testid="link-github"
        >
          <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative flex items-center gap-3">
            <Github className="w-5 h-5" />
            Clone Repository
          </span>
        </a>
      </motion.div>
    </section>
  );
}
