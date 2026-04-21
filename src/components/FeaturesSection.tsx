import React from "react";
import { motion } from "framer-motion";
import { Lock, ShieldAlert, Zap, Cpu } from "lucide-react";

const features = [
  {
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    title: "100% Local Processing",
    description: "No cloud APIs. No data logging. Your images never leave your machine."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "High-Speed Stripping",
    description: "Optimized tensor operations remove watermarks in milliseconds."
  },
  {
    icon: <Lock className="w-8 h-8 text-secondary" />,
    title: "Metadata Scrubbing",
    description: "Removes EXIF data, AI generation tags, and embedded software signatures."
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "Format Agnostic",
    description: "Processes PNG, JPG, and WEBP formats seamlessly without quality loss."
  }
];

export default function FeaturesSection() {
  return (
    <section className="w-full relative">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 inline-block"
        >
          System <span className="text-secondary text-glow-pink">Capabilities</span>
        </motion.h2>
        <div className="flex justify-center">
          <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-card border border-border p-6 rounded hover:border-secondary/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              {feature.icon}
            </div>
            <div className="mb-4 bg-background w-16 h-16 flex items-center justify-center rounded border border-border group-hover:border-secondary transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 uppercase">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
