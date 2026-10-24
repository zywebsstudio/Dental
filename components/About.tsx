import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { DENTAL_CONFIG } from "@/lib/site-config";

export default function About() {
  const { eyebrow, heading, description, values, cta, image } =
    DENTAL_CONFIG.about;

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-3 bg-[#E8F6F5] rounded-3xl -rotate-1" />
              <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-[#E4E9EE] shadow-lg shadow-[#17324D]/5">
                <Image
                  src={image}
                  alt="Doctor consulting attentively with patient at Lumière Dental Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F6F5] border border-[#2A9D9F]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D9F]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2A9D9F]">
                {eyebrow}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#17324D] tracking-tight mb-5 leading-tight">
              {heading}
            </h2>

            <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-8 font-normal">
              {description}
            </p>

            <div className="space-y-4 mb-9 w-full">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E4E9EE] flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E8F6F5] text-[#2A9D9F] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#17324D] mb-1">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#17324D] hover:bg-[#243447] shadow-md shadow-[#17324D]/15 transition-all"
            >
              <span>{cta}</span>
              <ArrowRight className="w-4 h-4 text-[#2A9D9F]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
