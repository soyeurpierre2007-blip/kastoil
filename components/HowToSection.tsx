"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Prélevez",
    desc: "Une noisette avec le bout des doigts suffit pour tout le cuir chevelu.",
  },
  {
    num: "02",
    title: "Massez",
    desc: "5 minutes de massage doux activent la circulation et favorisent l'absorption.",
  },
  {
    num: "03",
    title: "Laissez poser",
    desc: "30 minutes ou toute la nuit. Rincez ensuite à l'eau et shampooinez.",
  },
];

export default function HowToSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="utilisation"
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
            Mode d'emploi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] tracking-tight">
            Comment utiliser Kastoil ?
          </h2>
        </motion.div>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="w-full bg-[#111318] border border-[#D4A017]/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 hover:border-[#D4A017]/40 transition-all duration-300"
            >
              <div className="text-6xl font-bold text-[#D4A017]/10 leading-none select-none">
                {step.num}
              </div>
              <h3 className="text-[#D4A017] font-semibold text-base">{step.title}</h3>
              <p className="text-[#D4A017]/40 text-sm leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full max-w-xl mx-auto border-t border-[#D4A017]/15 pt-8 flex flex-col items-center gap-3"
        >
          <p className="text-[#D4A017]/40 text-xs tracking-widest uppercase font-medium">
            Conseil
          </p>
          <p className="text-[#D4A017]/55 text-sm leading-relaxed font-light">
            Pour sourcils et cils, appliquez avec un coton-tige propre chaque soir.
            Résultats visibles en 3 à 4 semaines d'application régulière.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
