import { DENTAL_CONFIG } from "./site-config";

export interface AppointmentData {
  fullName: string;
  phoneNumber: string;
  preferredDate: string;
  treatment: string;
  message?: string;
}

export function buildWhatsAppAppointmentUrl(data: AppointmentData): string {
  const lines = [
    `*Appointment Enquiry - ${DENTAL_CONFIG.name}*`,
    ``,
    `*Patient Name:* ${data.fullName.trim()}`,
    `*Phone:* ${data.phoneNumber.trim()}`,
    `*Preferred Date:* ${data.preferredDate || "Earliest Available"}`,
    `*Treatment of Interest:* ${data.treatment || "General Consultation"}`,
  ];

  if (data.message && data.message.trim().length > 0) {
    lines.push(`*Notes / Message:* ${data.message.trim()}`);
  }

  lines.push(``);
  lines.push(`Please let me know available slots. Thank you.`);

  const messageText = lines.join("\n");
  const encoded = encodeURIComponent(messageText);

  return `https://wa.me/${DENTAL_CONFIG.whatsappNumber}?text=${encoded}`;
}
