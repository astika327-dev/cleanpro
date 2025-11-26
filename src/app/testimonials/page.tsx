import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Testimoni Klien - U2CleanPro",
    description: "Lihat apa kata klien kami tentang layanan kebersihan profesional dari U2CleanPro. Kepuasan pelanggan adalah prioritas kami.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <Navbar />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
