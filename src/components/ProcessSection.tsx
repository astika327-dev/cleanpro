"use client";

import { motion } from 'framer-motion';
import { Phone, Calendar, Users, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Hubungi Kami',
    description: 'Hubungi kami melalui telepon, WhatsApp, atau formulir online untuk konsultasi gratis.',
    color: 'from-blue-500 to-cyan-500',
    step: '01',
  },
  {
    icon: Calendar,
    title: 'Jadwalkan Layanan',
    description: 'Pilih waktu yang sesuai dengan jadwal Anda. Kami fleksibel dan siap menyesuaikan.',
    color: 'from-purple-500 to-pink-500',
    step: '02',
  },
  {
    icon: Users,
    title: 'Tim Kami Datang',
    description: 'Tim profesional kami akan datang tepat waktu dengan peralatan lengkap.',
    color: 'from-orange-500 to-red-500',
    step: '03',
  },
  {
    icon: Sparkles,
    title: 'Nikmati Hasilnya',
    description: 'Rasakan perbedaan dengan ruangan yang bersih, segar, dan nyaman.',
    color: 'from-green-500 to-emerald-500',
    step: '04',
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

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
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Cara Kerja</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Proses yang <span className="text-primary">Mudah & Cepat</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Hanya 4 langkah sederhana untuk mendapatkan layanan kebersihan profesional.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (hidden on mobile) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number Badge */}
                  <div className="relative inline-block mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center relative z-10`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-slate-100 z-20">
                      <span className="text-sm font-bold text-slate-900">{step.step}</span>
                    </div>
                  </div>

                  {/* Arrow (hidden on mobile and last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4 z-0">
                      <ArrowRight className="h-8 w-8 text-slate-300" />
                    </div>
                  )}

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
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
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-4">Siap untuk memulai?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-emerald-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Hubungi Kami Sekarang
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
