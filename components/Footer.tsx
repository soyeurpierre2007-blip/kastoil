function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.53V6.77a4.85 4.85 0 01-1.01-.08z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B0E11] border-t border-[#D4A017]/10 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-[#D4A017] font-bold text-xl tracking-tight">
              Kastoil
            </span>
            <p className="text-[#D4A017]/30 text-sm font-light leading-relaxed max-w-xs">
              L'huile de ricin jamaïcaine 100% naturelle pour des cheveux forts et lumineux.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-[#D4A017]/50 text-xs font-medium tracking-widest uppercase mb-1">
              Légal
            </span>
            {["Mentions légales", "Politique de confidentialité", "CGV"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#D4A017]/30 text-sm font-light hover:text-[#D4A017]/60 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-[#D4A017]/50 text-xs font-medium tracking-widest uppercase mb-1">
              Contact
            </span>
            <a
              href="mailto:web.services.fr2026@gmail.com"
              className="text-[#D4A017]/30 text-sm font-light hover:text-[#D4A017]/60 transition-colors duration-200 break-all"
            >
              web.services.fr2026@gmail.com
            </a>
            <a
              href="https://www.tiktok.com/@huile_jam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D4A017]/30 text-sm font-light hover:text-[#D4A017]/60 transition-colors duration-200 w-fit"
            >
              <TikTokIcon className="w-3.5 h-3.5" />
              @huile_jam
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#D4A017]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#D4A017]/20 text-xs font-light">
            © 2025 Kastoil — Tous droits réservés
          </p>
          <p className="text-[#D4A017]/15 text-xs font-light tracking-widest uppercase">
            Jamaican Black Castor Oil
          </p>
        </div>
      </div>
    </footer>
  );
}
