"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { DENTAL_CONFIG, FaqItem } from "@/lib/site-config";

export default function FAQ() {
  const { eyebrow, heading, description, items } = DENTAL_CONFIG.faq;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F6F5] border border-[#2A9D9F]/20 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D9F]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2A9D9F]">
              {eyebrow}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#17324D] tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5">
          {items.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#E4E9EE] bg-white overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                >
                  <span className="text-base sm:text-lg font-bold text-[#17324D]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#E8F6F5] text-[#2A9D9F] rotate-180"
                        : "bg-[#FAF9F6] text-[#667085]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#667085] leading-relaxed border-t border-[#E4E9EE]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#667085]">
            <HelpCircle className="w-4 h-4 text-[#2A9D9F]" />
            <span>Have a different question? Our team is always happy to assist.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
