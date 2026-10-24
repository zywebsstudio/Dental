export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "Stethoscope" | "Sparkles" | "Smile" | "ShieldCheck" | "Activity" | "HeartHandshake";
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: "UserCheck" | "MessageSquareText" | "Building2" | "Heart";
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const DENTAL_CONFIG = {
  name: "LUMIÈRE DENTAL STUDIO",
  shortName: "LUMIÈRE",
  tagline: "Aesthetic & Comprehensive Dental Care",
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210",
  email: "hello@lumieredental.com",
  address: "Suite 402, Royal Boulevard, Panampilly Nagar, Kochi, Kerala 682036",
  city: "Kochi, Kerala",
  openingHours: "Mon – Sat: 9:00 AM – 7:30 PM | Sunday by Appointment",
  instagramUrl: "https://instagram.com",

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "Treatments", href: "#treatments" },
    { name: "About", href: "#about" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "CONFIDENT CARE. BEAUTIFUL SMILES.",
    headline: "A Healthier Smile Begins with Exceptional Care.",
    description:
      "Discover thoughtful dental care in a welcoming, modern environment. From preventive check-ups to smile-enhancing treatments, our team is here to help you feel comfortable and informed at every step.",
    primaryCta: "Book an Appointment",
    secondaryCta: "Explore Our Treatments",
    trustHighlights: [
      "Patient-Focused Care",
      "Modern Dental Technology",
      "Comfortable Experience",
    ],
    image: "/img/dental.png",
  },

  services: {
    eyebrow: "OUR CLINICAL TREATMENTS",
    heading: "Complete Dental Care for Every Smile",
    description:
      "Explore dental services designed to support oral health, comfort, and confident smiles.",
    items: [
      {
        id: "general-dentistry",
        title: "General Dentistry",
        description:
          "Routine examinations, preventive care, and guidance for maintaining oral health.",
        iconName: "Stethoscope",
      },
      {
        id: "teeth-whitening",
        title: "Teeth Whitening",
        description:
          "Discuss professional whitening options with the dental team.",
        iconName: "Sparkles",
      },
      {
        id: "cosmetic-dentistry",
        title: "Cosmetic Dentistry",
        description:
          "Explore treatment options that may improve the appearance of your smile.",
        iconName: "Smile",
      },
      {
        id: "dental-implants",
        title: "Dental Implants",
        description:
          "Learn about implant treatment options and individual suitability.",
        iconName: "ShieldCheck",
      },
      {
        id: "orthodontic-care",
        title: "Orthodontic Care",
        description:
          "Explore options for addressing tooth alignment and bite concerns.",
        iconName: "Activity",
      },
      {
        id: "root-canal",
        title: "Root Canal Treatment",
        description:
          "Learn about treatment options for teeth affected by internal infection or damage.",
        iconName: "HeartHandshake",
      },
    ] as ServiceItem[],
  },

  about: {
    eyebrow: "GET TO KNOW OUR CLINIC",
    heading: "Thoughtful Dentistry, Centered Around You.",
    description:
      "We believe every patient deserves clear communication, attentive care, and a comfortable experience. Our approach focuses on understanding your concerns, explaining available treatment options, and helping you make informed decisions about your dental health.",
    values: [
      {
        title: "Personalized Consultations",
        description: "One-on-one evaluations dedicated to your individual oral health priorities.",
      },
      {
        title: "Clear Treatment Explanations",
        description: "Transparent walkthroughs of procedures, options, and care routines.",
      },
      {
        title: "A Welcoming Environment",
        description: "A soothing clinic setting designed to reduce apprehension and promote calm.",
      },
    ],
    cta: "Get in Touch",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
  },

  whyChooseUs: {
    eyebrow: "THE LUMIÈRE PHILOSOPHY",
    heading: "Dental Care That Puts You First.",
    description:
      "From your first consultation to ongoing dental care, we aim to make every visit clear, comfortable, and well-informed.",
    benefits: [
      {
        id: "attention",
        title: "Personalized Attention",
        description:
          "Care discussions tailored to each patient's concerns and circumstances.",
        iconName: "UserCheck",
      },
      {
        id: "communication",
        title: "Clear Communication",
        description:
          "Understand the proposed treatment, available options, and expected next steps.",
        iconName: "MessageSquareText",
      },
      {
        id: "environment",
        title: "Modern Clinical Environment",
        description:
          "A clean, welcoming environment designed around patient comfort.",
        iconName: "Building2",
      },
      {
        id: "comfort",
        title: "Patient Comfort",
        description:
          "A considerate approach that takes questions, concerns, and dental anxiety seriously.",
        iconName: "Heart",
      },
    ] as BenefitItem[],
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1200&auto=format&fit=crop",
  },

  testimonials: {
    eyebrow: "PATIENT EXPERIENCES",
    heading: "Experiences That Inspire Confidence.",
    description:
      "Reflections from individuals who chose Lumière Dental Studio for their dental care.",
    items: [
      {
        id: "1",
        name: "Dr. Ananya Menon",
        role: "Preventive Care Patient",
        review:
          "The clinic environment is serene and reassuring. The team walked me through every step of my dental checkup with patience and clarity.",
        rating: 5,
      },
      {
        id: "2",
        name: "Rahul Nambiar",
        role: "Cosmetic Consultation",
        review:
          "I appreciated the calm and detailed consultation. They took the time to explain all options without any pressure.",
        rating: 5,
      },
      {
        id: "3",
        name: "Devika Pillai",
        role: "Orthodontic Patient",
        review:
          "Modern facilities, punctuality, and genuinely thoughtful care. The entire experience made regular visits pleasant.",
        rating: 5,
      },
      {
        id: "4",
        name: "Arjun Matthew",
        role: "Restorative Dentistry",
        review:
          "Exceptional hygiene standards and clear explanations throughout the treatment. Highly recommend Lumière Dental Studio.",
        rating: 5,
      },
    ] as TestimonialItem[],
  },

  faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    heading: "Questions About Your Dental Visit?",
    description:
      "Find straightforward information regarding appointments, consultations, and clinic visits.",
    items: [
      {
        id: "faq-1",
        question: "How do I book an appointment?",
        answer:
          "You can request an appointment using our online booking form on this website, calling our clinic reception directly, or sending us a message on WhatsApp. Our coordinator will promptly confirm an available time that suits your schedule.",
      },
      {
        id: "faq-2",
        question: "What should I expect during my first visit?",
        answer:
          "Your initial appointment includes a comprehensive oral examination, discussion of your dental history, any necessary digital diagnostics, and an open conversation about your goals and treatment choices.",
      },
      {
        id: "faq-3",
        question: "Which dental treatment is right for me?",
        answer:
          "Treatment suitability is assessed individually following a clinical examination. During your consultation, we review suitable options, outline procedure steps, and guide you toward informed decisions.",
      },
      {
        id: "faq-4",
        question: "Do you offer consultations before treatment?",
        answer:
          "Yes. We prioritize thorough, dedicated consultations so you can discuss your questions, understand the recommended care plan, and review all details before commencing any procedure.",
      },
      {
        id: "faq-5",
        question: "How should I prepare for my appointment?",
        answer:
          "Please arrive 10 minutes before your scheduled appointment time. Bring details of any current medications, past dental records if available, and any questions you would like our dental team to address.",
      },
      {
        id: "faq-6",
        question: "How can I contact the clinic about an urgent dental concern?",
        answer:
          "If you experience severe pain, trauma, or an urgent dental issue, please call our clinic phone line immediately at +91 98765 43210 or message us on WhatsApp so our team can provide urgent guidance.",
      },
    ] as FaqItem[],
  },

  contact: {
    heading: "Your Smile Deserves Thoughtful Care.",
    description:
      "Have a question or ready to schedule a visit? Contact our team to discuss your needs and arrange an appointment.",
    primaryCta: "Book an Appointment",
    secondaryCta: "Chat on WhatsApp",
  },
};
