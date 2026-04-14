"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/kastoil-face.png", label: "Vue face" },
  { src: "/kastoil-lifestyle.svg", label: "Lifestyle" },
  { src: "/kastoil-texture.svg", label: "Texture" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="galerie"
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
            Produit
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] tracking-tight">
            Kastoil en détail
          </h2>
        </motion.div>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {images.map(({ src, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="w-full bg-[#111318] border border-[#D4A017]/20 rounded-2xl overflow-hidden flex flex-col items-center hover:border-[#D4A017]/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,160,23,0.08)] transition-all duration-300 group"
            >
              <div className="aspect-square w-full flex items-center justify-center p-8">
                <Image
                  src={src}
                  alt={`Kastoil — ${label}`}
                  width={280}
                  height={280}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pb-5 text-center">
                <span className="text-[#D4A017]/40 text-xs font-light tracking-widest uppercase">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
