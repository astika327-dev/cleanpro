"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const faqs = [
  {
    category: 'Umum',
    questions: [
      {
        q: 'Apa itu U2CleanPro?',
        a: 'U2CleanPro adalah penyedia layanan kebersihan profesional yang melayani rumah, kantor, dan properti komersial di seluruh Indonesia. Kami menggunakan peralatan modern dan produk ramah lingkungan.',
      },
      {
        q: 'Di area mana saja U2CleanPro beroperasi?',
        a: 'Saat ini kami melayani seluruh area Bali dan sekitarnya. Kami terus memperluas jangkauan layanan kami. Hubungi kami untuk informasi lebih lanjut tentang area layanan.',
      },
      {
        q: 'Apakah U2CleanPro tersertifikasi?',
        a: 'Ya, semua teknisi kami telah melalui pelatihan profesional dan tersertifikasi. Kami juga memiliki asuransi penuh untuk melindungi properti Anda.',
      },
    ],
  },
  {
    category: 'Layanan',
    questions: [
      {
        q: 'Layanan apa saja yang ditawarkan?',
        a: 'Kami menawarkan berbagai layanan termasuk kebersihan rumah, kebersihan kantor, pembersihan purna bangun, dan pembersihan villa. Setiap layanan dapat disesuaikan dengan kebutuhan Anda.',
      },
      {
        q: 'Berapa lama waktu yang dibutuhkan untuk membersihkan rumah?',
        a: 'Waktu yang dibutuhkan tergantung pada ukuran rumah dan tingkat kebersihan yang diinginkan. Rata-rata, rumah 2-3 kamar membutuhkan 3-4 jam untuk pembersihan menyeluruh.',
      },
      {
        q: 'Apakah saya perlu menyediakan peralatan pembersih?',
        a: 'Tidak perlu. Tim kami membawa semua peralatan dan produk pembersih yang diperlukan. Semua produk yang kami gunakan ramah lingkungan dan aman.',
      },
    ],
  },
  {
    category: 'Harga & Pembayaran',
    questions: [
      {
        q: 'Bagaimana sistem pembayaran?',
        a: 'Kami menerima pembayaran tunai, transfer bank, dan e-wallet. Pembayaran dilakukan setelah layanan selesai dan Anda puas dengan hasilnya.',
      },
      {
        q: 'Apakah ada biaya tambahan?',
        a: 'Semua biaya sudah termasuk dalam penawaran awal. Tidak ada biaya tersembunyi. Jika ada pekerjaan tambahan yang diperlukan, kami akan memberitahu Anda terlebih dahulu.',
      },
      {
        q: 'Apakah ada diskon untuk layanan rutin?',
        a: 'Ya, kami menawarkan harga khusus untuk pelanggan yang menggunakan layanan kami secara rutin (mingguan atau bulanan). Hubungi kami untuk penawaran khusus.',
      },
    ],
  },
  {
    category: 'Keamanan',
    questions: [
      {
        q: 'Apakah produk pembersih aman untuk anak-anak dan hewan peliharaan?',
        a: 'Ya, semua produk yang kami gunakan ramah lingkungan, non-toxic, dan aman untuk anak-anak serta hewan peliharaan.',
      },
      {
        q: 'Bagaimana dengan keamanan barang berharga saya?',
        a: 'Semua tim kami telah melalui background check dan diasuransikan. Kami sangat menjaga kepercayaan yang Anda berikan kepada kami.',
      },
      {
        q: 'Apa yang terjadi jika ada kerusakan?',
        a: 'Meskipun sangat jarang terjadi, jika ada kerusakan yang disebabkan oleh tim kami, asuransi kami akan menanggung biaya perbaikan atau penggantian.',
      },
    ],
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Pertanyaan yang Sering <span className="text-primary">Ditanyakan</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, catIndex) => (
              <div key={category.category}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.q}
                      answer={faq.a}
                      index={catIndex * 10 + index}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500">Tidak ada hasil yang ditemukan untuk &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-100 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Masih ada pertanyaan?</h3>
          <p className="text-slate-600 mb-6">
            Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-emerald-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
};
