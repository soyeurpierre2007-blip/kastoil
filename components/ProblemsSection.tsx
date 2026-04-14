"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    title: "Tes cheveux poussent lentement",
    desc: "Ta longueur n'évolue plus depuis des mois malgré tes soins réguliers.",
  },
  {
    title: "Tes pointes sont sèches et cassantes",
    desc: "Les fourches s'accumulent, la casse est constante.",
  },
  {
    title: "Tu perds tes cheveux",
    desc: "La brosse, la douche, l'oreiller — les cheveux tombent et tu ne sais plus quoi faire.",
  },
  {
    title: "Tes sourcils manquent de densité",
    desc: "Clairsemés ou affaiblis, ils ne retrouvent pas leur volume naturel.",
  },
];

export default function ProblemsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problemes"
      className="w-full flex flex-col items-center justify-center text-center px-6 py-32 bg-[#0B0E11]"
    >
      <div
        ref={ref}
        className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="inline-block border border-[#D4A017]/30 text-[#D4A017]/60 px-5 py-1.5 rounded-full text-xs tracking-widest uppercase">
            Problèmes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] tracking-tight">
            Tu te reconnais ?
          </h2>
        </motion.div>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full bg-[#111318] border border-[#D4A017]/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-[#D4A017]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-8 h-px bg-[#D4A017]/30" />
              <h3 className="text-[#D4A017] font-semibold text-base leading-snug">
                {p.title}
              </h3>
              <p className="text-[#D4A017]/40 text-sm leading-relaxed font-light">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
