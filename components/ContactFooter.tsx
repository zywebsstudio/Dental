"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Send,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { DENTAL_CONFIG } from "@/lib/site-config";
import { buildWhatsAppAppointmentUrl, AppointmentData } from "@/lib/whatsapp";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState<AppointmentData>({
    fullName: "",
    phoneNumber: "",
    preferredDate: "",
    treatment: "General Dentistry",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your name";
    if (!formData.phoneNumber.trim()) errs.phoneNumber = "Please enter your phone number";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const url = buildWhatsAppAppointmentUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="contact" className="bg-white">
      <section className="py-20 lg:py-28 border-t border-[#E4E9EE]">
        <div className="container mx-auto px-3 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F6F5] border border-[#2A9D9F]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D9F]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2A9D9F]">
                APPOINTMENTS & ENQUIRIES
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#17324D] tracking-tight mb-4">
              {DENTAL_CONFIG.contact.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              {DENTAL_CONFIG.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E4E9EE]">
                  <h3 className="text-base font-bold text-[#17324D] mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#2A9D9F]" />
                    <span>Clinic Information</span>
                  </h3>

                  <div className="space-y-4 text-sm text-[#667085]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#2A9D9F] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#17324D]">Address</p>
                        <p>{DENTAL_CONFIG.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#2A9D9F] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#17324D]">Phone Number</p>
                        <a
                          href={`tel:${DENTAL_CONFIG.phoneRaw}`}
                          className="hover:text-[#2A9D9F] transition-colors"
                        >
                          {DENTAL_CONFIG.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#2A9D9F] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#17324D]">Email Address</p>
                        <a
                          href={`mailto:${DENTAL_CONFIG.email}`}
                          className="hover:text-[#2A9D9F] transition-colors"
                        >
                          {DENTAL_CONFIG.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#2A9D9F] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#17324D]">Opening Hours</p>
                        <p>{DENTAL_CONFIG.openingHours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${DENTAL_CONFIG.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-md shadow-[#25D366]/20 transition-all text-center"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-white" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${DENTAL_CONFIG.phoneRaw}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#17324D] bg-[#FAF9F6] border border-[#E4E9EE] hover:border-[#2A9D9F] hover:text-[#2A9D9F] transition-all text-center"
                  >
                    <Phone className="w-4 h-4 text-[#2A9D9F]" />
                    <span>Call Direct</span>
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#E8F6F5]/60 border border-[#2A9D9F]/20 text-xs text-[#243447]">
                <p className="font-semibold mb-1 text-[#17324D]">Privacy & Transparent Booking</p>
                <p className="text-[#667085]">
                  Submitting this form prepares your appointment enquiry directly via WhatsApp without storing any medical history online.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-7 sm:p-9 rounded-2xl bg-[#FAF9F6] border border-[#E4E9EE] shadow-sm">
                <h3 className="text-xl font-bold text-[#17324D] mb-2">
                  Request an Appointment
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] mb-6">
                  Fill in your details and our clinic coordinator will arrange your preferred appointment slot.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17324D] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Maya Nair"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E9EE] focus:border-[#2A9D9F] focus:ring-1 focus:ring-[#2A9D9F] text-sm text-[#17324D] outline-hidden transition-all"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17324D] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        placeholder="+91 98765 00000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E9EE] focus:border-[#2A9D9F] focus:ring-1 focus:ring-[#2A9D9F] text-sm text-[#17324D] outline-hidden transition-all"
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17324D] mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E9EE] focus:border-[#2A9D9F] focus:ring-1 focus:ring-[#2A9D9F] text-sm text-[#17324D] outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17324D] mb-1.5">
                        Treatment of Interest
                      </label>
                      <select
                        value={formData.treatment}
                        onChange={(e) =>
                          setFormData({ ...formData, treatment: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E9EE] focus:border-[#2A9D9F] focus:ring-1 focus:ring-[#2A9D9F] text-sm text-[#17324D] outline-hidden transition-all"
                      >
                        <option value="General Dentistry">General Dentistry & Check-up</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Cosmetic Dentistry">Cosmetic Dentistry Consultation</option>
                        <option value="Dental Implants">Dental Implants Consultation</option>
                        <option value="Orthodontic Care">Orthodontic & Aligners</option>
                        <option value="Root Canal Treatment">Root Canal Assessment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#17324D] mb-1.5">
                      Short Message / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share any specific requirements or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E9EE] focus:border-[#2A9D9F] focus:ring-1 focus:ring-[#2A9D9F] text-sm text-[#17324D] outline-hidden transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#2A9D9F] hover:bg-[#238284] shadow-md shadow-[#2A9D9F]/20 hover:shadow-lg hover:shadow-[#2A9D9F]/30 transition-all active:scale-95 cursor-pointer text-center"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Send Appointment Request via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#17324D] text-white pt-16 pb-12 border-t border-[#17324D]">
        <div className="container mx-auto px-3 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
            <div className="lg:col-span-4 space-y-4">
              <Link href="#home" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A9D9F] flex items-center justify-center text-white shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                    LUMIÈRE
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#2A9D9F] mt-1">
                    DENTAL STUDIO
                  </span>
                </div>
              </Link>

              <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
                A modern dental studio dedicated to thoughtful, patient-focused care in a tranquil and welcoming clinical environment.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${DENTAL_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                </a>
                <a
                  href={DENTAL_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2A9D9F]">
                  Quick Links
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {DENTAL_CONFIG.navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2A9D9F]">
                  Treatments
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {DENTAL_CONFIG.services.items.map((svc) => (
                    <li key={svc.id}>
                      <Link
                        href="#treatments"
                        className="hover:text-white transition-colors"
                      >
                        {svc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[#2A9D9F]">
                Studio Location
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {DENTAL_CONFIG.address}
              </p>
              <p className="text-xs text-slate-400">
                {DENTAL_CONFIG.openingHours}
              </p>
              <p className="text-xs font-semibold text-white pt-2">
                Reception: {DENTAL_CONFIG.phoneDisplay}
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {currentYear} {DENTAL_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-white transition-colors cursor-pointer">
                Patient Terms
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
