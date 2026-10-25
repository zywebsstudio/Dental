"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { DENTAL_CONFIG } from "@/lib/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "top-0 px-0 pointer-events-auto"
          : "top-4 sm:top-6 lg:top-8 px-4 sm:px-8 pointer-events-none"
      }`}
    >
      <div
        ref={containerRef}
        className={`mx-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? "w-full max-w-none pointer-events-auto"
            : "w-full max-w-[340px] sm:max-w-[620px] md:max-w-[780px] lg:max-w-[1040px] pointer-events-auto"
        }`}
      >
        <nav
          className={`relative isolate flex items-center justify-between transition-all duration-500 ease-in-out ${
            scrolled
              ? "min-h-[54px] sm:min-h-[70px] rounded-none border-b border-[#E4E9EE] bg-white/95 backdrop-blur-md text-[#17324D] shadow-xs px-4 sm:px-6 lg:px-10 container mx-auto"
              : "min-h-[50px] sm:min-h-[58px] rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-white shadow-2xl py-1.5 pl-4 pr-1.5 sm:py-2 sm:pl-6 sm:pr-2 gap-4"
          }`}
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute -inset-px block overflow-hidden rounded-[inherit] p-[1px] transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              mask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          >
            <span className="absolute left-1/2 top-1/2 block aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2">
              <span
                className="absolute inset-0 block animate-[spin_5s_linear_infinite] motion-reduce:animate-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, #2A9D9F00 0deg, #2A9D9F00 180deg, #2A9D9F33 240deg, #2A9D9F99 290deg, #2A9D9F 330deg, #2A9D9F00 360deg)",
                }}
              />
            </span>
          </span>

          <Link href="#home" className="shrink-0 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#2A9D9F] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-extrabold text-xs sm:text-base tracking-tight leading-none transition-colors duration-300 ${
                  scrolled ? "text-[#17324D]" : "text-white"
                }`}
              >
                LUMIÈRE
              </span>
              <span className="text-[7px] sm:text-[9px] font-bold tracking-[0.2em] uppercase text-[#2A9D9F] mt-0.5">
                DENTAL
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {DENTAL_CONFIG.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12px] lg:text-[13px] font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[#667085] hover:text-[#2A9D9F]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className={`hidden md:inline-flex min-h-[36px] sm:min-h-[40px] shrink-0 items-center justify-center rounded-full px-5 text-[12px] font-bold transition-all duration-300 shadow-sm ${
              scrolled
                ? "bg-[#2A9D9F] text-white hover:bg-[#238284]"
                : "bg-white text-[#17324D] hover:bg-[#FAF9F6]"
            }`}
          >
            Book Appointment
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors md:hidden ${
              scrolled
                ? "bg-[#FAF9F6] border border-[#E4E9EE] text-[#17324D] hover:bg-[#E8F6F5]"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label="Toggle Navigation"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="h-4 w-4"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="h-4 w-4"
              >
                <path d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </nav>

        {open && (
          <nav
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) {
                setOpen(false);
              }
            }}
            className={`absolute inset-x-4 top-full mt-2.5 overflow-hidden rounded-[24px] border p-3 shadow-2xl backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200 ${
              scrolled
                ? "bg-white/95 border-[#E4E9EE] text-[#17324D]"
                : "bg-black/75 border-white/15 text-white"
            }`}
          >
            {DENTAL_CONFIG.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block rounded-xl px-4 py-2.5 text-[13px] font-medium transition-colors ${
                  scrolled
                    ? "text-[#243447] hover:bg-[#E8F6F5] hover:text-[#2A9D9F]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              className={`mt-2 flex min-h-[42px] items-center justify-center rounded-full px-5 text-[12px] font-bold transition-colors ${
                scrolled
                  ? "bg-[#2A9D9F] text-white hover:bg-[#238284]"
                  : "bg-white text-[#17324D] hover:bg-[#FAF9F6]"
              }`}
            >
              Book Appointment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
