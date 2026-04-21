import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="w-full relative">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 inline-block"
        >
          How It <span className="text-accent text-glow-pink">Works</span>
        </motion.h2>
        <div className="h-px w-full bg-gradient-to-r from-accent via-accent/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-card border border-border p-6 rounded relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
            <h3 className="text-xl font-bold mb-2 text-secondary">01 / Frequency Analysis</h3>
            <p className="text-muted-foreground">
              Google's SynthID embeds a digital watermark directly into the pixels of an image during generation. This watermark is imperceptible to the human eye but detectable algorithmically. The tool first performs a frequency domain analysis to isolate these specific patterns.
            </p>
          </div>
          
          <div className="bg-card border border-border p-6 rounded relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <h3 className="text-xl font-bold mb-2 text-primary">02 / Pattern Disruption</h3>
            <p className="text-muted-foreground">
              Once the watermark signature is identified, the algorithm applies a targeted perturbation matrix. This process subtly modifies pixel values to destroy the mathematical coherence of the SynthID signature without noticeably degrading visual quality.
            </p>
          </div>
          
          <div className="bg-card border border-border p-6 rounded relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
            <h3 className="text-xl font-bold mb-2 text-accent">03 / Reconstruction</h3>
            <p className="text-muted-foreground">
              The final pass smooths artifacts and normalizes the image structure, ensuring that metadata is stripped and the pixel data no longer triggers positive hits in SynthID detection models.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square border border-primary/30 rounded bg-background/50 flex items-center justify-center overflow-hidden box-glow-cyan"
        >
          {/* Animated Tech Diagram */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0,transparent_70%)]" />
          
          <div className="relative w-3/4 h-3/4 flex items-center justify-center">
            {/* Center Node */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-32 h-32 border-2 border-dashed border-primary rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 border border-secondary rounded-full opacity-50"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-16 h-16 bg-primary/20 backdrop-blur-md rounded border border-primary flex items-center justify-center text-xs font-bold text-primary"
            >
              IMG
            </motion.div>

            {/* Scanning Lines */}
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-1 bg-accent/50 shadow-[0_0_10px_rgba(255,45,120,0.8)]"
            />
          </div>
          
          <div className="absolute bottom-4 left-4 font-mono text-xs text-primary/70">
            &gt; ANALYZING PIXEL MATRIX...<br/>
            &gt; WATERMARK DETECTED<br/>
            &gt; INITIATING PURGE...
          </div>
        </motion.div>
      </div>
    </section>
  );
}
