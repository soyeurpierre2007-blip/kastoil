"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NeonButton } from "@/components/ui/neon-button";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.53V6.77a4.85 4.85 0 01-1.01-.08z" />
    </svg>
  );
}

export default function TikTokSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="tiktok"
      className="w-full flex flex-col items-center justify-center text-center px-6 py-32 bg-[#0B0E11]"
    >
      <div
        ref={ref}
        className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="inline-block border border-[#D4A017]/30 text-[#D4A017]/60 px-5 py-1.5 rounded-full text-xs tracking-widest uppercase">
            Communauté
          </span>

          <div className="w-14 h-14 bg-[#111318] border border-[#D4A017]/20 rounded-2xl flex items-center justify-center">
            <TikTokIcon className="w-7 h-7 text-[#D4A017]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] tracking-tight">
            Retrouve-nous sur TikTok
          </h2>

          <p className="text-3xl md:text-4xl font-bold text-[#D4A017]/70 tracking-tight">
            @huile_jam
          </p>

          <p className="text-[#D4A017]/40 text-sm font-light leading-relaxed max-w-sm">
            Tutoriels, avant/après et conseils capillaires — du contenu chaque semaine pour prendre soin de tes cheveux naturellement.
          </p>

          <NeonButton
            variant="default"
            size="lg"
            href="https://www.tiktok.com/@huile_jam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suivre @huile_jam
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
}
