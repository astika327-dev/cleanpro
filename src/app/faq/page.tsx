import { Navbar } from "@/components/Navbar";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Pertanyaan yang Sering Ditanyakan | U2CleanPro",
  description: "Temukan jawaban untuk pertanyaan umum tentang layanan kebersihan profesional U2CleanPro.",
};

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <FAQSection />
      <Footer />
    </main>
  );
}
