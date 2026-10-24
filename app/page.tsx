import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactFooter from "@/components/ContactFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactFooter />
      <FloatingWhatsApp />
    </main>
  );
}
