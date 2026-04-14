"use client";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { NeonButton } from "@/components/ui/neon-button";

export default function HeroSection() {
  const titleComponent = (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-6 pb-10">
      <span className="inline-block border border-[#D4A017]/30 text-[#D4A017]/70 px-5 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium">
        100% Naturel — Origine Jamaïque
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4A017] leading-tight tracking-tight">
        Révèle la force naturelle
        <br />
        <span className="text-[#D4A017]/50 font-light">de tes cheveux</span>
      </h1>

      <p className="text-[#D4A017]/50 text-sm md:text-base max-w-lg leading-relaxed font-light">
        L'huile de ricin jamaïcaine qui nourrit, fortifie et fait pousser tes cheveux
      </p>

      <NeonButton variant="solid" size="lg" href="#commander">
        Découvrir Kastoil — 23,99€
      </NeonButton>

      <div className="flex items-center justify-center gap-2.5">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-[#D4A017]" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <span className="text-[#D4A017]/60 text-sm font-light">427 clientes satisfaites</span>
      </div>
    </div>
  );

  return (
    <section id="hero" className="w-full flex flex-col items-center justify-center text-center bg-[#0B0E11] pt-16">
      <ContainerScroll titleComponent={titleComponent}>
        <div className="flex items-center justify-center w-full h-full bg-[#111318]">
          <Image
            src="/kastoil-hero.png"
            alt="Kastoil — Jamaican Black Castor Oil"
            width={600}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </ContainerScroll>
    </section>
  );
}
