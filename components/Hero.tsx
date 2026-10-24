"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { DENTAL_CONFIG } from "@/lib/site-config";

const treatmentTags = [
  { label: "Dental Checkup", active: true },
  { label: "Teeth Cleaning", active: false },
  { label: "Cosmetic Care", active: false },
  { label: "Orthodontics", active: false },
  { label: "Implants", active: false },
];

export default function Hero() {
  const { eyebrow, primaryCta, image } = DENTAL_CONFIG.hero;

  return (
    <section id="home" className="relative p-1.5 sm:p-2 lg:p-2.5 bg-white overflow-hidden">
      <div className="relative min-h-[90vh] lg:min-h-[92vh] rounded-2xl sm:rounded-3xl lg:rounded-[36px] overflow-hidden bg-[#0A121A] flex items-center shadow-xl border border-[#E4E9EE]/60">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="Lumière Dental Studio - Premium Family Dental Care"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center sm:object-right-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent sm:via-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full pt-28 sm:pt-36 lg:pt-36 pb-10 sm:pb-14 flex flex-col justify-between min-h-[78vh] lg:min-h-[82vh]">
          <div className="max-w-xl lg:max-w-3xl pt-2 sm:pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2A9D9F] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white/90">
                {eyebrow}
              </span>
            </div>

            <h1 className="text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] sm:leading-[1.08] mb-4 sm:mb-5 drop-shadow-md">
              A Healthier Smile Begins <br className="hidden sm:inline" />
              With Exceptional Care.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl mb-7 sm:mb-9 font-normal line-clamp-2 drop-shadow-xs">
              Thoughtful dental treatments and personalized care designed to restore healthy, confident smiles in a welcoming environment.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 sm:pl-7 sm:pr-3 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#2A9D9F] hover:bg-[#238284] shadow-lg shadow-[#2A9D9F]/30 hover:shadow-xl hover:shadow-[#2A9D9F]/40 transition-all duration-300 active:scale-95"
              >
                <span>{primaryCta}</span>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#2A9D9F] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="pt-8 sm:pt-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-5 w-full">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white tracking-wide">Google Rating</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/15 text-white/80 font-medium">Verified</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-extrabold text-white">4.9</span>
                  <div className="flex items-center text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-white/70 font-medium">(180+ Reviews)</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center flex-wrap gap-2.5">
              {treatmentTags.map((tag) => (
                <Link
                  key={tag.label}
                  href="#treatments"
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    tag.active
                      ? "bg-white text-[#17324D] shadow-md"
                      : "bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25"
                  }`}
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
