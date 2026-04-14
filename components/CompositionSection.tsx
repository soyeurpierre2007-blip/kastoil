"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ingredients = [
  {
    num: "01",
    name: "Ricin Jamaïcain torréfié",
    desc: "Graines grillées à la main selon la méthode traditionnelle jamaïcaine — à l'origine de la couleur foncée et des propriétés uniques de l'huile.",
  },
  {
    num: "02",
    name: "Acide Ricinoléique 85%",
    desc: "L'acide gras oméga-9 le plus concentré de la nature. Stimule la microcirculation du cuir chevelu et renforce la racine du cheveu.",
  },
  {
    num: "03",
    name: "Vitamine E naturelle",
    desc: "Antioxydant puissant qui protège le cheveu des agressions extérieures et nourrit chaque follicule en profondeur.",
  },
];

export default function CompositionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="composition"
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
            Formule
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] tracking-tight">
            Ce que contient Kastoil
          </h2>
          <p className="text-[#D4A017]/40 text-sm leading-relaxed font-light max-w-xl">
            Ricinus Communis Seed Oil — pressée à froid, torréfiée traditionnellement.
            Un seul ingrédient, une pureté absolue.
          </p>
        </motion.div>

        <div className="w-full flex flex-col gap-4">
          {ingredients.map((ing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="w-full bg-[#111318] border border-[#D4A017]/20 rounded-2xl p-8 flex items-center gap-6 text-left hover:border-[#D4A017]/40 transition-all duration-300"
            >
              <span className="text-[#D4A017]/20 font-bold text-3xl shrink-0 leading-none">
                {ing.num}
              </span>
              <div>
                <h3 className="text-[#D4A017] font-semibold text-base mb-1">{ing.name}</h3>
                <p className="text-[#D4A017]/40 text-sm leading-relaxed font-light">{ing.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 pt-4"
        >
          {["Sans paraben", "Sans sulfate", "Vegan", "Pressé à froid"].map((b) => (
            <span
              key={b}
              className="border border-[#D4A017]/20 text-[#D4A017]/40 text-xs px-5 py-2 rounded-full font-light tracking-wider"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
