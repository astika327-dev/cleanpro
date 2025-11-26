"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-50/50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Jasa Kebersihan No. 1 di Indonesia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
              Kebersihan Profesional, <br className="hidden lg:block" />
              <span className="text-primary relative inline-block">
                Hasil Maksimal
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              U2CleanPro memberikan solusi kebersihan komprehensif untuk hunian dan perkantoran. Tim profesional, alat modern, dan bahan ramah lingkungan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button size="lg" className="h-12 px-8 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1" asChild>
                <Link href="/contact">
                  Dapatkan Penawaran <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-slate-300 hover:bg-slate-50 hover:text-primary" asChild>
                <Link href="/services">Lihat Layanan</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span>Terverifikasi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span>Asuransi Penuh</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span>Garansi Kepuasan</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Main Image */}
              <div className="aspect-[4/3] relative bg-slate-200">
                 <Image
                    src="/images/hero-image.jpg"
                    alt="Tim U2CleanPro"
                    fill
                    className="object-cover"
                    priority
                  />
              </div>
              
              {/* Floating Badge 1 */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-2 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[160px] sm:max-w-none"
              >
                <div className="bg-yellow-100 p-2 rounded-full shrink-0">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 fill-yellow-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm sm:text-base">4.9/5.0</p>
                  <p className="text-[10px] sm:text-xs text-slate-500">Rating Pelanggan</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-6 -right-2 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-slate-100"
              >
                <p className="font-bold text-primary text-base sm:text-lg">500+</p>
                <p className="text-[10px] sm:text-xs text-slate-500">Proyek Selesai</p>
              </motion.div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -z-10 top-1/2 -right-12 grid grid-cols-3 gap-2 opacity-50 hidden sm:grid">
               {[...Array(9)].map((_, i) => (
                 <div key={i} className="w-2 h-2 rounded-full bg-primary/30"></div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
