"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Kebersihan Rumah',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Mengirim...');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Error: Mohon isi semua kolom yang wajib diisi.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Pesan Anda telah berhasil terkirim!');
        setFormData({ name: '', email: '', phone: '', service: 'Kebersihan Rumah', message: '' });
      } else {
        setStatus('Error: Terjadi kesalahan saat mengirim pesan.');
      }
    } catch (error) {
      setStatus('Error: Tidak dapat terhubung ke server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'baliwebdevelover@gmail.com',
      link: 'mailto:baliwebdevelover@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+62 881-0375-49162',
      link: 'https://wa.me/62881037549162',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Bali, Indonesia',
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      value: 'Senin - Minggu: 08:00 - 17:00',
      link: '#',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Send className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Hubungi Kami</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Mari <span className="text-primary">Berdiskusi</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ada pertanyaan atau ingin memesan layanan? Isi formulir di bawah ini atau hubungi kami langsung.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative block"
              >
                <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} shadow-lg mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                  <p className="text-sm text-slate-600 group-hover:text-primary transition-colors">{info.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="text-slate-700 font-medium mb-2">Nama Lengkap *</Label>
                <Input 
                  id="name" 
                  type="text" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="mt-1"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-slate-700 font-medium mb-2">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="mt-1"
                  placeholder="nama@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="phone" className="text-slate-700 font-medium mb-2">Nomor Telepon</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="mt-1"
                  placeholder="+62 xxx xxxx xxxx"
                />
              </div>
              <div>
                <Label htmlFor="service" className="text-slate-700 font-medium mb-2">Jenis Layanan</Label>
                <select 
                  id="service" 
                  value={formData.service} 
                  onChange={handleChange} 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                >
                  <option>Kebersihan Rumah</option>
                  <option>Kebersihan Kantor</option>
                  <option>Pembersihan Purna Bangun</option>
                  <option>Pembersihan Villa</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="message" className="text-slate-700 font-medium mb-2">Pesan *</Label>
              <Textarea 
                id="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={6}
                className="mt-1"
                placeholder="Ceritakan kebutuhan Anda..."
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
            >
              {isSubmitting ? 'Mengirim...' : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan
                </>
              )}
            </Button>

            {status && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-center p-4 rounded-lg ${
                  status.startsWith('Error') 
                    ? 'bg-red-50 text-red-600 border border-red-200' 
                    : 'bg-green-50 text-green-600 border border-green-200 flex items-center justify-center gap-2'
                }`}
              >
                {!status.startsWith('Error') && <CheckCircle className="h-5 w-5" />}
                {status}
              </motion.p>
            )}
          </motion.form>

          {/* Right: Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-primary to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Mengapa Hubungi Kami?</h3>
              <ul className="space-y-3">
                {[
                  'Konsultasi gratis tanpa komitmen',
                  'Penawaran harga transparan',
                  'Respon cepat dalam 24 jam',
                  'Tim profesional siap membantu',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Lokasi Kami</h3>
              <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center">
                <MapPin className="h-12 w-12 text-slate-400" />
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Kami melayani seluruh area Bali dan sekitarnya. Hubungi kami untuk informasi lebih lanjut tentang jangkauan layanan kami.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
