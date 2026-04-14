"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Aminata",
    age: 28,
    initials: "A",
    text: "En 3 semaines mes cheveux sont vraiment plus denses.",
    tag: "Pousse",
  },
  {
    name: "Soraya",
    age: 34,
    initials: "S",
    text: "Mes pointes ne cassent plus. Résultat net et rapide.",
    tag: "Anti-casse",
  },
  {
    name: "Fatoumata",
    age: 25,
    initials: "F",
    text: "Mes sourcils ont doublé de volume en un mois.",
    tag: "Sourcils",
  },
  {
    name: "Nadia",
    age: 31,
    initials: "N",
    text: "Résultats visibles. Parfait.",
    tag: "Qualité",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-[#D4A017]" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="avis"
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
            Avis
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] tracking-tight">
            Elles ont essayé Kastoil
          </h2>
          <p className="text-[#D4A017]/30 text-xs font-light tracking-wide">
            Note moyenne 5/5 — 427 avis vérifiés
          </p>
        </motion.div>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full bg-[#111318] border border-[#D4A017]/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-[#D4A017]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center text-[#D4A017] font-bold text-sm">
                {r.initials}
              </div>
              <Stars />
              <p className="text-[#D4A017]/70 text-sm leading-relaxed font-light italic flex-1">
                "{r.text}"
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-[#D4A017] font-semibold text-sm">{r.name}</span>
                <span className="text-[#D4A017]/30 text-xs font-light">{r.age} ans</span>
              </div>
              <span className="border border-[#D4A017]/20 text-[#D4A017]/40 text-xs px-3 py-1 rounded-full font-light">
                {r.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
