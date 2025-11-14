"use client";

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Leaf } from 'lucide-react';

const values = [
  {
    icon: <Award size={48} className="text-primary" />,
    title: 'Profesional',
    description: 'Tim kami terdiri dari tenaga ahli yang terlatih dan berpengalaman untuk memberikan hasil terbaik.',
  },
  {
    icon: <Leaf size={48} className="text-primary" />,
    title: 'Ramah Lingkungan',
    description: 'Kami menggunakan produk pembersih yang aman bagi lingkungan dan keluarga Anda.',
  },
  {
    icon: <ShieldCheck size={48} className="text-primary" />,
    title: 'Terpercaya',
    description: 'Keamanan dan kepuasan Anda adalah prioritas utama kami. Kami menjamin layanan yang andal.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Tentang U2CleanPro
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              U2CleanPro didirikan dengan misi untuk menyediakan layanan kebersihan berkualitas tinggi yang dapat diandalkan oleh setiap rumah dan bisnis. Kami percaya bahwa lingkungan yang bersih adalah kunci untuk kehidupan yang sehat dan produktif.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
