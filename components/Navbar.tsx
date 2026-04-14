"use client";
import { useEffect, useState } from "react";
import { NeonButton } from "@/components/ui/neon-button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0E11]/95 backdrop-blur-md border-b border-[#D4A017]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18">
        <a
          href="#hero"
          className="text-[#D4A017] font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
        >
          Kastoil
        </a>

        <NeonButton variant="solid" size="default" href="#commander" className="px-6 py-2 text-sm tracking-wide">
          Commander
        </NeonButton>
      </div>
    </nav>
  );
}
