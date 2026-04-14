"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    title: "Stimule la pousse",
    desc: "L'acide ricinoléique améliore la microcirculation du cuir chevelu.",
  },
  {
    title: "Réduit la casse",
    desc: "Scelle l'humidité et renforce la fibre capillaire en profondeur.",
  },
  {
    title: "Hydrate en profondeur",
    desc: "Pénètre jusqu'au cœur du cheveu pour une hydratation longue durée.",
  },
  {
    title: "Renforce sourcils et cils",
    desc: "Volume et densité visibles en 4 semaines d'application quotidienne.",
  },
  {
    title: "100% naturel",
    desc: "Un seul ingrédient. Sans paraben, sans sulfate, sans compromis.",
  },
  {
    title: "Résultats dès 4 semaines",
    desc: "Des centaines de clientes ont constaté une différence réelle.",
  },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="benefices"
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
            Bénéfices
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] tracking-tight">
            Kastoil change tout
          </h2>
        </motion.div>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="w-full bg-[#111318] border border-[#D4A017]/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 hover:border-[#D4A017]/50 hover:bg-[#141720] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-[#D4A017]/15 font-bold text-5xl leading-none select-none group-hover:text-[#D4A017]/25 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[#D4A017] font-semibold text-base">{b.title}</h3>
              <p className="text-[#D4A017]/40 text-sm leading-relaxed font-light">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
