import React from "react";
import StepCard from "./StepCard";
import { motion } from "framer-motion";

export default function StepsSection() {
  const steps = [
    {
      title: "Initialize Environment",
      command: "pip install -r requirements.txt",
      description: "Install all necessary dependencies. Ensure you have Python 3.8+ installed on your system. This step pulls down the machine learning libraries required to detect and strip the invisible watermark."
    },
    {
      title: "Launch Protocol",
      command: "python app.py",
      description: "Boot up the local server. The terminal will display a startup sequence. Once online, open your browser and navigate to http://localhost:5000 to access the UI."
    },
    {
      title: "Upload Target",
      command: "> AWAITING_PAYLOAD",
      description: "Drag and drop your AI-generated image into the dropzone, or click to select a file. The system accepts PNG, JPG, and WEBP formats. The image will be pre-processed securely in your local environment."
    },
    {
      title: "Execute Removal",
      command: "> EXECUTE_STRIP()",
      description: "Click REMOVE. The algorithm will scan the pixel data, identify the embedded SynthID frequency pattern, and reconstruct the image without the watermark. Download the clean file."
    }
  ];

  return (
    <section className="w-full relative">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 inline-block"
        >
          Execution <span className="text-primary text-glow-cyan">Steps</span>
        </motion.h2>
        <div className="h-px w-full bg-gradient-to-r from-primary via-primary/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <StepCard 
            key={index}
            stepNumber={index + 1}
            title={step.title}
            command={step.command}
            description={step.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
