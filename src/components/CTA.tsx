"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export const CTA = () => {
  return (
    <motion.section
      className="bg-green-600 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Siap untuk Rumah yang Lebih Bersih?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Biarkan tim profesional kami yang mengurus kebersihan rumah Anda. Dapatkan penawaran gratis dan tanpa kewajiban hari ini!
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">Pesan Sekarang</Link>
        </Button>
      </div>
    </motion.section>
  );
};
