"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react";
import { DENTAL_CONFIG, TestimonialItem } from "@/lib/site-config";

export default function Testimonials() {
  const { eyebrow, heading, description, items } = DENTAL_CONFIG.testimonials;

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white overflow-hidden">
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

        <div className="max-w-5xl mx-auto pb-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="pb-14!"
          >
            {items.map((item: TestimonialItem) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="h-full flex flex-col justify-between p-7 rounded-2xl bg-[#FAF9F6] border border-[#E4E9EE] shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1 text-[#F59E0B]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-[#2A9D9F]/30" />
                    </div>

                    <p className="text-sm text-[#243447] leading-relaxed mb-6 italic">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E4E9EE]">
                    <p className="text-sm font-bold text-[#17324D]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#667085] mt-0.5 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
