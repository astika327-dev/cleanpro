import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Layanan Kami - CleanPro",
    description: "Jelajahi berbagai layanan kebersihan profesional yang kami tawarkan, mulai dari kebersihan rumah, kantor, hingga layanan disinfeksi.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}
