import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border bg-card mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground font-mono">
            SYNTHID REMOVER // V1.0.0
          </span>
        </div>
        
        <div className="text-sm font-mono text-muted-foreground">
          Built by <span className="text-accent text-glow-pink font-bold">Tofazzal Hossain</span>
        </div>
        
        <div className="text-xs text-muted-foreground/50 font-mono">
          FOR EDUCATIONAL PURPOSES ONLY
        </div>
      </div>
    </footer>
  );
}
