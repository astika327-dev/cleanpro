import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Layanan & Harga - U2CleanPro Badung, Bali",
    description: "Temukan berbagai layanan kebersihan profesional dan paket harga terjangkau dari U2CleanPro untuk area Badung, Bali. Mulai dari Rp 250.000.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesSection />
      <PricingSection />
      <CTA />
      <Footer />
    </main>
  );
}
