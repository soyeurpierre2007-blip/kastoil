"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Sur quel type de cheveux fonctionne Kastoil ?",
    a: "Tous types de cheveux. Particulièrement efficace sur les cheveux bouclés, afro et fragilisés. Sa texture dense convient également aux cheveux fins qui manquent de densité.",
  },
  {
    q: "En combien de temps vais-je voir des résultats ?",
    a: "Entre 3 et 6 semaines d'utilisation régulière. Pour la pousse, comptez 4 à 8 semaines selon votre cycle capillaire naturel.",
  },
  {
    q: "Puis-je utiliser Kastoil sur mes sourcils et cils ?",
    a: "Oui, c'est l'un de ses usages les plus populaires. Appliquez avec un coton-tige propre chaque soir. Résultats visibles en 4 semaines.",
  },
  {
    q: "Le produit est-il naturel ?",
    a: "Kastoil est 100% naturel. Un seul ingrédient : Ricinus Communis Seed Oil. Sans paraben, sans sulfate, sans additif.",
  },
  {
    q: "Quelle est votre politique de retour ?",
    a: "Satisfait ou remboursé sous 14 jours, sans justification. Contactez-nous et nous vous remboursons intégralement.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
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
          className="flex flex-col items-center gap-4"
        >
          <span className="inline-block border border-[#D4A017]/30 text-[#D4A017]/60 px-5 py-1.5 rounded-full text-xs tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] tracking-tight">
            Questions fréquentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3 w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[#111318] border border-[#D4A017]/20 rounded-2xl px-6 text-left data-[state=open]:border-[#D4A017]/40 transition-colors duration-200"
              >
                <AccordionTrigger className="text-[#D4A017] font-medium text-sm text-left hover:no-underline py-5 hover:text-[#D4A017]/80 transition-colors duration-200">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#D4A017]/50 text-sm leading-relaxed font-light pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
