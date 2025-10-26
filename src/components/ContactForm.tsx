"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

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

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Hubungi Kami
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Ada pertanyaan atau ingin memesan layanan? Isi formulir di bawah ini atau hubungi kami langsung.
            </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12 text-center">
            <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                    <a href="mailto:baliwebdevelover@gmail.com" className="text-lg text-blue-600 hover:underline">baliwebdevelover@gmail.com</a>
                </div>
            </motion.div>
            <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">WhatsApp</h3>
                    <a href="https://wa.me/62881037549162" target="_blank" rel="noopener noreferrer" className="text-lg text-green-600 hover:underline">+62 881-0375-49162</a>
                </div>
            </motion.div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="name">Nama</Label>
              <Input id="name" type="text" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
                <Label htmlFor="phone">Nomor Telepon (Opsional)</Label>
                <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
                <Label htmlFor="service">Jenis Layanan</Label>
                <select id="service" value={formData.service} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Kebersihan Rumah</option>
                    <option>Kebersihan Kantor</option>
                    <option>Pembersihan Purna Bangun</option>
                    <option>Pembersihan villa</option>
                </select>
            </div>
          </div>
          <div className="mb-6">
            <Label htmlFor="message">Pesan</Label>
            <Textarea id="message" value={formData.message} onChange={handleChange} required />
          </div>
          <div className="text-center">
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
            </Button>
          </div>
          {status && <p className={`mt-4 text-center ${status.startsWith('Error') ? 'text-red-500' : 'text-gray-600'}`}>{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};
