"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-600 to-teal-600"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/40 rounded-full"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">Penawaran Terbatas</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Siap untuk Rumah yang <br className="hidden sm:block" />
            Lebih Bersih & Sehat?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Biarkan tim profesional kami yang mengurus kebersihan rumah Anda. Dapatkan penawaran gratis dan tanpa kewajiban hari ini!
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              'Konsultasi Gratis',
              'Tim Profesional',
              'Garansi Kepuasan',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="h-14 px-8 text-base font-semibold shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all bg-white text-primary hover:bg-white/90"
            >
              <Link href="/contact">
                Dapatkan Penawaran Gratis <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-base font-semibold border-2 border-white text-white hover:bg-white hover:text-primary transition-all"
            >
              <Link href="/services">
                Lihat Layanan Kami
              </Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm text-white/70"
          >
            ✓ Dipercaya oleh 500+ pelanggan di seluruh Indonesia
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
