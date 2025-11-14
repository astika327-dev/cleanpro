import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Kami - U2CleanPro",
    description: "Pelajari lebih lanjut tentang U2CleanPro, nilai-nilai kami, dan komitmen kami terhadap layanan kebersihan yang profesional, ramah lingkungan, dan terpercaya.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
