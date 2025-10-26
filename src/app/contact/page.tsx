import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hubungi Kami - CleanPro",
    description: "Hubungi CleanPro untuk pertanyaan, penawaran gratis, atau untuk memesan layanan kebersihan profesional kami.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
