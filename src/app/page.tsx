import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
