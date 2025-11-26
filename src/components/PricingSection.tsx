"use client";

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Home, Building2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const packages = [
  {
    name: 'Paket Rumah',
    icon: Home,
    price: 'Rp 250.000',
    priceDetail: 'untuk rumah hingga 50m²',
    description: 'Cocok untuk apartemen atau rumah kecil',
    features: [
      'General cleaning 3 jam',
      'Vacuum & pel seluruh ruangan',
      'Pembersihan kamar mandi',
      'Pembersihan dapur & kompor',
      'Lap furniture & meja',
      'Produk eco-friendly',
      'Garansi kepuasan',
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    savings: null,
  },
  {
    name: 'Paket Profesional',
    icon: Zap,
    price: 'Rp 1.8 Juta',
    priceDetail: 'per bulan (4x kunjungan)',
    description: 'Paling populer untuk rumah menengah',
    features: [
      'Deep cleaning 4 jam per kunjungan',
      'Pembersihan menyeluruh 100-150m²',
      'Vacuum sofa & kasur',
      'Pembersihan jendela & kaca',
      'Disinfeksi area basah',
      'Eco-friendly products premium',
      'Prioritas jadwal',
      'Gratis 1x cuci AC',
      'Garansi kepuasan 100%',
    ],
    color: 'from-primary to-emerald-600',
    popular: true,
    savings: 'Hemat Rp 400K',
  },
  {
    name: 'Paket Villa/Kantor',
    icon: Crown,
    price: 'Rp 25-35/m²',
    priceDetail: 'minimal 100m²',
    description: 'Solusi lengkap untuk properti besar',
    features: [
      'Deep cleaning menyeluruh',
      'Lantai, dinding & plafon',
      'Pembersihan halaman (basic)',
      'Buffing lantai keramik',
      'Disinfeksi menyeluruh',
      'Cuci sofa & karpet',
      'Dedicated cleaning team',
      'Fleksibel jadwal',
      'Account manager khusus',
      'Emergency service 24/7',
    ],
    color: 'from-purple-500 to-pink-500',
    popular: false,
    savings: null,
  },
];

const addOns = [
  { service: 'Cuci AC (1 unit)', price: 'Rp 75.000' },
  { service: 'Cuci Sofa (2-3 seater)', price: 'Rp 150.000' },
  { service: 'Cuci Kasur (single)', price: 'Rp 100.000' },
  { service: 'Cuci Karpet (per m²)', price: 'Rp 25.000' },
  { service: 'Pembersihan Pasca Renovasi', price: 'Custom' },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
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
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Paket Layanan</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Harga Terjangkau untuk <span className="text-primary">Badung, Bali</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Pilih paket yang sesuai dengan kebutuhan Anda. Harga transparan, tanpa biaya tersembunyi.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className={`relative ${pkg.popular ? 'md:-mt-4' : ''}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-primary to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Paling Populer ⭐
                    </div>
                  </div>
                )}

                {/* Savings Badge */}
                {pkg.savings && (
                  <div className="absolute -top-4 -right-4 z-10">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {pkg.savings}
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 ${
                    pkg.popular
                      ? 'border-primary shadow-primary/20'
                      : 'border-slate-100 hover:border-primary/50'
                  }`}
                >
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${pkg.color} shadow-lg mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Package Name */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 mb-6">{pkg.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-3xl font-bold text-slate-900 mb-1">{pkg.price}</div>
                    <div className="text-sm text-slate-500">{pkg.priceDetail}</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-primary to-emerald-600 hover:shadow-xl hover:shadow-primary/30'
                        : ''
                    }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    <Link href="/contact">
                      Pesan Sekarang
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Layanan Tambahan</h3>
                <p className="text-slate-600">Tingkatkan kebersihan dengan layanan ekstra</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOns.map((addon, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <span className="text-slate-700 font-medium">{addon.service}</span>
                  <span className="text-primary font-bold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary to-emerald-600 rounded-2xl p-8 shadow-xl max-w-3xl mx-auto text-white">
            <Building2 className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Butuh Paket Khusus?</h3>
            <p className="mb-6 opacity-90">
              Untuk villa besar, hotel, atau kebutuhan komersial, kami menyediakan paket custom yang disesuaikan dengan kebutuhan spesifik Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Konsultasi Gratis</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link href="https://wa.me/62881037549162" target="_blank">
                  Chat WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Harga Transparan</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Tanpa Biaya Tersembunyi</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Gratis Konsultasi</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Garansi Kepuasan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
