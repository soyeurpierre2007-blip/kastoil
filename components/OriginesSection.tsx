"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

function WorldMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const container = mapRef.current;

    // Clear any previous render (e.g. React StrictMode double-invoke)
    container.innerHTML = "";

    const W = container.offsetWidth || 680;
    const H = Math.round(W * 0.52);

    Promise.all([
      import("d3"),
      import("topojson-client"),
      fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((r) => r.json()),
    ]).then(([d3, topojson, world]) => {
      if (!container) return;

      const svg = d3
        .select(container)
        .append("svg")
        .attr("width", "100%")
        .attr("viewBox", `0 0 ${W} ${H}`)
        .style("display", "block")
        .style("background", "#0B0E11");

      const projection = d3
        .geoNaturalEarth1()
        .scale(W / 6.2)
        .translate([W / 2, H / 2]);

      const path = d3.geoPath().projection(projection);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = world as any;
      const countries = topojson.feature(w, w.objects.countries);

      svg
        .append("g")
        .selectAll("path")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .data((countries as any).features)
        .enter()
        .append("path")
        .attr("d", path as never)
        .attr("fill", "#1a1f2e")
        .attr("stroke", "#D4A017")
        .attr("stroke-width", "0.4")
        .attr("stroke-opacity", "0.5");

      const jamaicaCoords: [number, number] = [-77.2975, 18.1096];
      const [jx, jy] = projection(jamaicaCoords) as [number, number];

      svg.append("circle").attr("cx", jx).attr("cy", jy).attr("r", 12).attr("fill", "#D4A017").attr("opacity", "0.15");
      svg.append("circle").attr("cx", jx).attr("cy", jy).attr("r", 7).attr("fill", "#D4A017").attr("opacity", "0.3");
      svg.append("circle").attr("cx", jx).attr("cy", jy).attr("r", 4).attr("fill", "#D4A017");

      svg
        .append("line")
        .attr("x1", jx + 6).attr("y1", jy - 6)
        .attr("x2", jx + 28).attr("y2", jy - 22)
        .attr("stroke", "#D4A017").attr("stroke-width", "0.8").attr("opacity", "0.7");

      svg
        .append("rect")
        .attr("x", jx + 28).attr("y", jy - 36)
        .attr("width", 80).attr("height", 20)
        .attr("rx", 4)
        .attr("fill", "#0B0E11")
        .attr("stroke", "#D4A017").attr("stroke-width", "0.5");

      svg
        .append("text")
        .attr("x", jx + 68).attr("y", jy - 22)
        .attr("text-anchor", "middle")
        .attr("font-family", "Inter, Arial, sans-serif")
        .attr("font-size", "10")
        .attr("font-weight", "600")
        .attr("fill", "#D4A017")
        .attr("letter-spacing", "1")
        .text("JAMAÏQUE");
    });
  }, []);

  return (
    <div className="w-full h-full bg-[#0B0E11] rounded-2xl border border-[#D4A017]/20 overflow-hidden">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}

const stats = [
  { value: "100%", label: "Naturel & pur" },
  { value: "427+", label: "Clientes satisfaites" },
  { value: "85%", label: "Acide Ricinoléique" },
];

export default function OriginesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const titleComponent = (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-5 pb-8">
      <span className="inline-block border border-[#D4A017]/30 text-[#D4A017]/60 px-5 py-1.5 rounded-full text-xs tracking-widest uppercase">
        Origines
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4A017] tracking-tight">
        Né en Jamaïque,{" "}
        <span className="font-light text-[#D4A017]/50">purifié par la nature</span>
      </h2>
      <p className="text-[#D4A017]/50 text-sm md:text-base max-w-xl leading-relaxed font-light">
        Les graines de ricin sont grillées à la main, puis pressées à froid.
        Une méthode ancestrale transmise de génération en génération dans les Caraïbes.
      </p>
    </div>
  );

  return (
    <section
      id="origines"
      className="w-full flex flex-col items-center justify-center text-center px-6 py-32 bg-[#0B0E11]"
    >
      <div ref={ref} className="w-full flex flex-col items-center">
        <ContainerScroll titleComponent={titleComponent}>
          <WorldMap />
        </ContainerScroll>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-2xl mx-auto grid grid-cols-3 gap-4 mt-10"
      >
        {stats.map((s) => (
          <div
            key={s.value}
            className="flex flex-col items-center justify-center bg-[#111318] border border-[#D4A017]/20 rounded-2xl py-8 px-4 text-center"
          >
            <div className="text-2xl md:text-3xl font-bold text-[#D4A017]">{s.value}</div>
            <div className="text-[#D4A017]/40 text-xs mt-2 font-light">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
