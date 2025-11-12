"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/hero-image-mobile.webp" />
        <source media="(min-width: 769px)" srcSet="/images/hero-image.webp" />
        <img
          src="/images/hero-image.jpg"
          alt="Tim U2CleanPro sedang membersihkan kantor"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Kebersihan Profesional, Hasil Maksimal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          U2CleanPro memberikan layanan kebersihan terpercaya yang ramah lingkungan untuk rumah dan kantor Anda.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg">
            Dapatkan Penawaran Gratis
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
