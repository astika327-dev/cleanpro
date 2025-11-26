"use client";

import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'Pemilik Rumah',
    review: 'Pelayanan U2CleanPro sangat memuaskan! Rumah saya jadi super bersih dan wangi. Timnya profesional dan ramah. Sangat direkomendasikan!',
    rating: 5,
    avatar: 'AP',
  },
  {
    name: 'Citra Lestari',
    role: 'Office Manager',
    review: 'Kantor kami sekarang jauh lebih nyaman setelah menggunakan jasa U2CleanPro. Mereka sangat teliti dan hasilnya luar biasa. Terima kasih!',
    rating: 5,
    avatar: 'CL',
  },
  {
    name: 'Budi Santoso',
    role: 'Kontraktor',
    review: 'Pembersihan setelah renovasi rumah benar-benar merepotkan, tapi U2CleanPro menyelesaikannya dengan cepat dan efisien. Hasilnya bersih total!',
    rating: 5,
    avatar: 'BS',
  },
  {
    name: 'Dewi Anggraini',
    role: 'Pemilik Apartemen',
    review: 'Saya sangat terkesan dengan tingkat kebersihan yang diberikan U2CleanPro. Apartemen saya terlihat seperti baru lagi. Pasti akan menggunakan jasa mereka lagi.',
    rating: 5,
    avatar: 'DA',
  },
  {
    name: 'Maya Sari',
    role: 'Pemilik Villa',
    review: 'Villa kami di Bali selalu siap menerima tamu berkat U2CleanPro. Mereka menjaga kebersihan villa dengan sangat baik. Tamu kami selalu senang.',
    rating: 5,
    avatar: 'MS',
  },
  {
    name: 'Rizky Maulana',
    role: 'Property Manager',
    review: 'Tim yang datang sangat profesional dan tepat waktu. Mereka membersihkan setiap sudut ruangan dengan detail. Layanan yang sangat bisa diandalkan.',
    rating: 5,
    avatar: 'RM',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star key={i} fill={i < rating ? 'currentColor' : 'none'} className="h-5 w-5" strokeWidth={1.5} />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-4">
            <Star className="h-4 w-4 text-yellow-600 fill-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700 uppercase tracking-wide">Testimoni</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Apa Kata <span className="text-primary">Klien Kami</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kepuasan pelanggan adalah prioritas kami. Lihat apa yang mereka katakan tentang layanan kami.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-16 w-16 text-primary" />
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Review Text */}
                <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                  &quot;{testimonial.review}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { value: '500+', label: 'Proyek Selesai' },
            { value: '4.9/5', label: 'Rating Rata-rata' },
            { value: '98%', label: 'Kepuasan Pelanggan' },
            { value: '24/7', label: 'Customer Support' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-slate-600 mb-6">Ingin menjadi bagian dari klien yang puas?</p>
          <Button size="lg" asChild className="shadow-xl shadow-primary/20">
            <Link href="/testimonials">
              Lihat Semua Testimoni <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
