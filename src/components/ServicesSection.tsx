"use client";

import { motion } from 'framer-motion';
import { Home, Building, Construction, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Home,
    title: 'Kebersihan Rumah',
    description: 'Layanan pembersihan menyeluruh untuk hunian yang nyaman dan bersih.',
    features: ['Deep Cleaning', 'Sanitasi', 'Eco-Friendly'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Building,
    title: 'Kebersihan Kantor',
    description: 'Ciptakan lingkungan kerja yang sehat dan produktif dengan layanan kami.',
    features: ['Daily Cleaning', 'Disinfeksi', 'Fleksibel'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Construction,
    title: 'Pembersihan Purna Bangun',
    description: 'Membersihkan sisa konstruksi dan debu agar properti baru Anda siap huni.',
    features: ['Post-Construction', 'Detail Oriented', 'Cepat'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Sparkles,
    title: 'Pembersihan Villa',
    description: 'Membersihkan villa Anda dengan detail dan standar hospitality.',
    features: ['Premium Service', 'Hospitality Standard', 'Terpercaya'],
    color: 'from-emerald-500 to-teal-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Layanan Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Solusi Kebersihan <span className="text-primary">Profesional</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kami menyediakan berbagai solusi kebersihan komprehensif untuk memenuhi setiap kebutuhan Anda dengan standar tertinggi.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link 
                    href="/services" 
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-slate-600 mb-6">Tidak menemukan layanan yang Anda cari?</p>
          <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50" asChild>
            <Link href="/contact">
              Hubungi Kami untuk Konsultasi <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
