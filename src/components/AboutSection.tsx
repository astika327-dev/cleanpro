"use client";

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Leaf, Users, Target, Heart, TrendingUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Award,
    title: 'Profesional',
    description: 'Tim kami terdiri dari tenaga ahli yang terlatih dan berpengalaman untuk memberikan hasil terbaik.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Leaf,
    title: 'Ramah Lingkungan',
    description: 'Kami menggunakan produk pembersih yang aman bagi lingkungan dan keluarga Anda.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: ShieldCheck,
    title: 'Terpercaya',
    description: 'Keamanan dan kepuasan Anda adalah prioritas utama kami. Kami menjamin layanan yang andal.',
    color: 'from-purple-500 to-pink-500',
  },
];

const stats = [
  { value: '500+', label: 'Proyek Selesai' },
  { value: '300+', label: 'Klien Puas' },
  { value: '5+', label: 'Tahun Pengalaman' },
  { value: '98%', label: 'Tingkat Kepuasan' },
];

const whyChooseUs = [
  'Tim profesional tersertifikasi',
  'Peralatan modern dan canggih',
  'Produk ramah lingkungan',
  'Harga kompetitif dan transparan',
  'Garansi kepuasan 100%',
  'Layanan pelanggan 24/7',
];

export const AboutSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Tentang Kami</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Mitra Kebersihan <span className="text-primary">Terpercaya Anda</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              U2CleanPro didirikan dengan misi untuk menyediakan layanan kebersihan berkualitas tinggi yang dapat diandalkan oleh setiap rumah dan bisnis. Kami percaya bahwa lingkungan yang bersih adalah kunci untuk kehidupan yang sehat dan produktif.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Nilai-Nilai <span className="text-primary">Kami</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Komitmen kami terhadap keunggulan tercermin dalam setiap aspek layanan kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} shadow-lg mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Keunggulan Kami</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Mengapa Memilih <span className="text-primary">U2CleanPro?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Kami tidak hanya membersihkan, kami menciptakan lingkungan yang sehat dan nyaman untuk Anda dan keluarga.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="aspect-[4/3] relative bg-slate-200">
                  <Image
                    src="/images/hero-image.jpg"
                    alt="Tim U2CleanPro"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl text-white shadow-xl"
            >
              <Target className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
              <p className="leading-relaxed opacity-90">
                Memberikan layanan kebersihan profesional yang melampaui ekspektasi, dengan mengutamakan kepuasan pelanggan, kesehatan lingkungan, dan standar kualitas tertinggi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white shadow-xl"
            >
              <TrendingUp className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="leading-relaxed opacity-90">
                Menjadi penyedia layanan kebersihan terkemuka di Indonesia yang dikenal dengan inovasi, profesionalisme, dan komitmen terhadap keberlanjutan lingkungan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
