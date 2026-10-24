import Link from "next/link";
import {
  Stethoscope,
  Sparkles,
  Smile,
  ShieldCheck,
  Activity,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { DENTAL_CONFIG, ServiceItem } from "@/lib/site-config";

const iconMap = {
  Stethoscope,
  Sparkles,
  Smile,
  ShieldCheck,
  Activity,
  HeartHandshake,
};

export default function Services() {
  const { eyebrow, heading, description, items } = DENTAL_CONFIG.services;

  return (
    <section id="treatments" className=" pt-10 pb-20 lg:py-28 bg-[#FAF9F6]">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F6F5] border border-[#2A9D9F]/20 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D9F]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2A9D9F]">
              {eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17324D] tracking-tight mb-4">
            {heading}
          </h2>
          {/* <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
            {description}
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {items.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName] || Stethoscope;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-[#E4E9EE] hover:border-[#2A9D9F]/40 shadow-xs hover:shadow-lg hover:shadow-[#2A9D9F]/8 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E8F6F5] text-[#2A9D9F] flex items-center justify-center mb-6 group-hover:bg-[#2A9D9F] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#17324D] mb-3 group-hover:text-[#2A9D9F] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E9EE]/70">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#2A9D9F] group-hover:translate-x-1 transition-transform uppercase tracking-wider"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
