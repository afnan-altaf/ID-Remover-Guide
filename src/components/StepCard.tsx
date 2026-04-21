import React from "react";
import { motion } from "framer-motion";

interface StepCardProps {
  stepNumber: number;
  title: string;
  command?: string;
  description: string;
  delay?: number;
}

export default function StepCard({ stepNumber, title, command, description, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, rotateY: 10 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      className="relative group perspective-1000"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded opacity-20 group-hover:opacity-50 transition duration-500 blur-sm"></div>
      <div className="relative bg-card border border-primary/20 p-8 rounded flex flex-col h-full overflow-hidden transition-transform duration-500 hover:scale-[1.02] box-glow-cyan">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -z-10" />
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded bg-background border border-primary text-primary font-bold text-xl text-glow-cyan">
            0{stepNumber}
          </div>
          <h3 className="text-xl font-bold uppercase tracking-wider">{title}</h3>
        </div>

        {command && (
          <div className="bg-background border border-primary/30 p-4 rounded mb-6 font-mono text-sm relative overflow-hidden group/code">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <code className="text-green-400 break-all">{command}</code>
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/code:opacity-100 transition-opacity" />
          </div>
        )}

        <p className="text-muted-foreground flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="mt-8 flex justify-end">
          <div className="h-1 w-12 bg-primary/50" />
        </div>
      </div>
    </motion.div>
  );
}
