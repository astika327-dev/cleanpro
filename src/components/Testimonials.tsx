"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Andi Pratama',
    review: 'Pelayanan U2CleanPro sangat memuaskan! Rumah saya jadi super bersih dan wangi. Timnya profesional dan ramah. Sangat direkomendasikan!',
    rating: 5,
  },
  {
    name: 'Citra Lestari',
    review: 'Kantor kami sekarang jauh lebih nyaman setelah menggunakan jasa U2CleanPro. Mereka sangat teliti dan hasilnya luar biasa. Terima kasih!',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    review: 'Pembersihan setelah renovasi rumah benar-benar merepotkan, tapi U2CleanPro menyelesaikannya dengan cepat dan efisien. Hasilnya bersih total!',
    rating: 4,
  },
  {
    name: 'Dewi Anggraini',
    review: 'Saya sangat terkesan dengan tingkat kebersihan yang diberikan U2CleanPro. Apartemen saya terlihat seperti baru lagi. Pasti akan menggunakan jasa mereka lagi.',
    rating: 5,
  },
  {
    name: 'Rizky Maulana',
    review: 'Tim yang datang sangat profesional dan tepat waktu. Mereka membersihkan setiap sudut ruangan dengan detail. Layanan yang sangat bisa diandalkan.',
    rating: 5,
  },
  {
    name: 'Siti Aminah',
    review: 'Layanan pembersihan mendalam mereka benar-benar luar biasa. Noda membandel di sofa dan karpet hilang semua. Sangat merekomendasikan!',
    rating: 5,
  },
  {
    name: 'Agus Setiawan',
    review: 'Harga yang ditawarkan sangat sepadan dengan kualitasnya. Rumah saya bersih total dan prosesnya sangat cepat. Komunikasi dengan tim juga lancar.',
    rating: 4,
  },
  {
    name: 'Fitri Handayani',
    review: 'Sebagai ibu rumah tangga, saya sangat terbantu dengan adanya U2CleanPro. Mereka membantu saya membersihkan rumah mingguan. Hasilnya selalu konsisten dan memuaskan.',
    rating: 5,
  },
  {
    name: 'Eko Prasetyo',
    review: 'Saya menggunakan jasa pembersihan purna bangun untuk rumah baru saya. Debu dan sisa cat bersih semua. Timnya bekerja sangat keras dan hasilnya fantastis.',
    rating: 5,
  },
  {
    name: 'Maya Sari',
    review: 'Villa kami di Bali selalu siap menerima tamu berkat U2CleanPro. Mereka menjaga kebersihan villa dengan sangat baik. Tamu kami selalu senang.',
    rating: 5,
  },
  {
    name: 'Hendro Wijoyo',
    review: 'Proses pemesanan sangat mudah dan cepat. Stafnya ramah dan informatif. Kualitas pembersihannya juga tidak perlu diragukan lagi.',
    rating: 4,
  },
  {
    name: 'Lina Marlina',
    review: 'Saya mencoba layanan kebersihan kantor mereka dan sangat puas. Lingkungan kerja jadi lebih sehat dan produktif. Rekan-rekan kerja juga merasa senang.',
    rating: 5,
  },
  {
    name: 'Joko Susilo',
    review: 'Awalnya ragu untuk mencoba, tapi ternyata hasilnya melebihi ekspektasi. Rumah jadi wangi dan bebas debu. Layanan pelanggan juga sangat responsif.',
    rating: 5,
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex justify-center text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star key={i} fill={i < rating ? 'currentColor' : 'none'} size={20} />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Apa Kata Klien Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Kami bangga telah melayani banyak klien dengan hasil yang memuaskan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-8 rounded-lg shadow-lg"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-700 italic mb-6">&quot;{testimonial.review}&quot;</p>
              <p className="text-right font-bold text-primary">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
