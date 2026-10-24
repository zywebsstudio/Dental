import Image from "next/image";
import { UserCheck, MessageSquareText, Building2, Heart } from "lucide-react";
import { DENTAL_CONFIG, BenefitItem } from "@/lib/site-config";

const benefitIcons = {
  UserCheck,
  MessageSquareText,
  Building2,
  Heart,
};

export default function WhyChooseUs() {
  const { eyebrow, heading, description, benefits, image } =
    DENTAL_CONFIG.whyChooseUs;

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {benefits.map((benefit: BenefitItem) => {
              const Icon = benefitIcons[benefit.iconName] || UserCheck;

              return (
                <div
                  key={benefit.id}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E4E9EE] shadow-xs hover:border-[#2A9D9F]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#E8F6F5] text-[#2A9D9F] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#17324D] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-[#E4E9EE] shadow-xl shadow-[#17324D]/5">
              <Image
                src={image}
                alt="State-of-the-art modern clinical environment at Lumière Dental Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E4E9EE] text-[#17324D]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2A9D9F]">
                  Clean & Modern Environment
                </p>
                <p className="text-xs text-[#667085] mt-1">
                  Thoughtfully organized treatment suites built for optimal patient comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
