import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kastoil — Jamaican Black Castor Oil",
  description:
    "L'huile de ricin jamaïcaine 100% naturelle qui nourrit, fortifie et stimule la pousse de tes cheveux. Sans paraben, sans sulfate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-[#0B0E11] text-[#D4A017] font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
