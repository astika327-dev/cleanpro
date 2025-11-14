import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Layanan Kami - U2CleanPro",
    description: "Temukan berbagai layanan kebersihan profesional yang ditawarkan oleh U2CleanPro, mulai dari pembersihan rumah hingga kantor.",
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
