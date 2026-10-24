"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { DENTAL_CONFIG } from "@/lib/site-config";

export default function FloatingWhatsApp() {
  const defaultMessage = encodeURIComponent(
    `Hello ${DENTAL_CONFIG.name}, I would like to enquire about dental treatments and appointments.`
  );
  const whatsappUrl = `https://wa.me/${DENTAL_CONFIG.whatsappNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group"
    >
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-full bg-white/95 text-[#17324D] text-xs font-bold shadow-lg border border-[#E4E9EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span>Chat on WhatsApp</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lumière Dental Studio on WhatsApp"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 text-[26px]" />
      </a>
    </aside>
  );
}
