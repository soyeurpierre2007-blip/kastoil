"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { NeonButton } from "@/components/ui/neon-button";

export default function OrderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur serveur");

      window.location.href = data.url;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(err);
      alert("Erreur : " + msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="commander"
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
            Commande
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] tracking-tight">
            Commandez Kastoil
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-lg mx-auto flex flex-col items-center justify-center text-center gap-6 p-12 border border-[#D4A017]/20 rounded-3xl bg-[#111318] hover:border-[#D4A017]/40 hover:shadow-[0_0_60px_rgba(212,160,23,0.06)] transition-all duration-500"
        >
          <div className="w-40 h-40">
            <Image
              src="/kastoil-product.png"
              alt="Kastoil — Jamaican Black Castor Oil"
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-6xl md:text-7xl font-bold text-[#D4A017] tracking-tight">
              23,99€
            </div>
            <p className="text-[#D4A017]/40 text-sm font-light">1 pot Kastoil — 100g</p>
          </div>

          <NeonButton
            variant="solid"
            size="xl"
            onClick={handleCheckout}
            disabled={loading}
            className="w-full justify-center text-[#0B0E11] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Chargement..." : "Commander maintenant — 23,99€"}
          </NeonButton>

          <div className="flex items-center gap-2 text-[#D4A017]/30 text-xs font-light">
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Paiement sécurisé SSL
            </div>

          <p className="text-[#D4A017]/15 text-xs font-light tracking-wide">
            Visa · Mastercard · Apple Pay · Google Pay
          </p>
        </motion.div>
      </div>
    </section>
  );
}
