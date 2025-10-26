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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Error: Mohon isi semua kolom yang wajib diisi.');
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
                Ada pertanyaan atau ingin memesan layanan? Isi formulir di bawah ini.
            </p>
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
                    <option>Layanan Disinfeksi</option>
                </select>
            </div>
          </div>
          <div className="mb-6">
            <Label htmlFor="message">Pesan</Label>
            <Textarea id="message" value={formData.message} onChange={handleChange} required />
          </div>
          <div className="text-center">
            <Button type="submit" size="lg">
              Kirim Pesan
            </Button>
          </div>
          {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};
