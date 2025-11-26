"use client";

import { motion } from 'framer-motion';
import { Shield, Clock, Award, Leaf, Users, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Garansi Kepuasan 100%',
    description: 'Jika Anda tidak puas, kami akan kembali membersihkan tanpa biaya tambahan.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Clock,
    title: 'Layanan 24/7',
    description: 'Tim customer service kami siap membantu Anda kapan saja, termasuk hari libur.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'Tim Tersertifikasi',
    description: 'Semua teknisi kami telah melalui pelatihan profesional dan tersertifikasi.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Menggunakan produk ramah lingkungan yang aman untuk keluarga dan hewan peliharaan.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Asuransi Penuh',
    description: 'Semua tim kami diasuransikan untuk melindungi properti dan barang berharga Anda.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Harga Kompetitif',
    description: 'Dapatkan layanan premium dengan harga yang transparan dan kompetitif.',
    color: 'from-pink-500 to-rose-500',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

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
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Keunggulan Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Mengapa Memilih <span className="text-primary">U2CleanPro</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kami berkomitmen memberikan layanan terbaik dengan standar profesional tertinggi.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Checkmark */}
                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Terjamin</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
