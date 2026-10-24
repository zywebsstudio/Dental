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
      setScrolled(window.scrollY > 60);
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
      className={`pointer-events-none fixed inset-x-0 z-50 px-4 transition-[top] duration-300 ease-out motion-reduce:transition-none sm:px-8 ${
        scrolled ? "top-3 sm:top-4 lg:top-4" : "top-6 sm:top-6 lg:top-10"
      }`}
    >
      <div
        ref={containerRef}
        className="pointer-events-auto relative mx-auto w-full max-w-[330px] sm:max-w-[620px] md:max-w-[780px] lg:max-w-[1300px]"
      >
        <nav className="relative isolate flex min-h-[48px] items-center justify-between gap-4 rounded-full border border-white/20 bg-black/50 py-1.5 pl-4 pr-1.5 text-white shadow-2xl backdrop-blur-md sm:min-h-[58px] sm:py-2 sm:pl-6 sm:pr-2">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px block overflow-hidden rounded-[inherit] p-[1px]"
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
              <span className="font-extrabold text-base sm:text-base tracking-tight leading-none text-white">
                LUMIÈRE
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#2A9D9F] mt-0.5">
                DENTAL
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-5 lg:gap-10">
            {DENTAL_CONFIG.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] lg:text-[13px] font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="hidden md:inline-flex min-h-[36px] shrink-0 items-center justify-center rounded-full bg-white px-5 text-[12px] font-bold text-[#17324D] transition-colors hover:bg-[#FAF9F6] shadow-sm"
          >
            Book Appointment
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
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
            className="absolute inset-x-0 top-full mt-2.5 overflow-hidden rounded-[24px] border border-white/15 bg-black/75 p-3 text-white shadow-2xl backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {DENTAL_CONFIG.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-xl px-4 py-2.5 text-[13px] text-white/80 transition-colors hover:bg-white/10 hover:text-white font-medium"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              className="mt-2 flex min-h-[42px] items-center justify-center rounded-full bg-white px-5 text-[12px] font-bold text-[#17324D] transition-colors hover:bg-[#FAF9F6]"
            >
              Book Appointment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
