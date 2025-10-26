"use client";

import { motion } from 'framer-motion';
import { Home, Building, Construction, Worm } from 'lucide-react';

const services = [
  {
    icon: <Home size={48} className="text-primary" />,
    title: 'Kebersihan Rumah',
    description: 'Layanan pembersihan menyeluruh untuk hunian yang nyaman dan bersih.',
  },
  {
    icon: <Building size={48} className="text-primary" />,
    title: 'Kebersihan Kantor',
    description: 'Ciptakan lingkungan kerja yang sehat dan produktif dengan layanan kami.',
  },
  {
    icon: <Construction size={48} className="text-primary" />,
    title: 'Pembersihan Purna Bangun',
    description: 'Membersihkan sisa konstruksi dan debu agar properti baru Anda siap huni.',
  },
  {
    icon: <Worm size={48} className="text-primary" />,
    title: 'Pembersihan villa',
    description: 'membersihkan villa anda dengan detail.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Layanan Profesional Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai solusi kebersihan untuk memenuhi setiap kebutuhan Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-md text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
