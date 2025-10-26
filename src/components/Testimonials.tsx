"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Andi Pratama',
    review: 'Pelayanan CleanPro sangat memuaskan! Rumah saya jadi super bersih dan wangi. Timnya profesional dan ramah. Sangat direkomendasikan!',
    rating: 5,
  },
  {
    name: 'Citra Lestari',
    review: 'Kantor kami sekarang jauh lebih nyaman setelah menggunakan jasa CleanPro. Mereka sangat teliti dan hasilnya luar biasa. Terima kasih!',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    review: 'Pembersihan setelah renovasi rumah benar-benar merepotkan, tapi CleanPro menyelesaikannya dengan cepat dan efisien. Hasilnya bersih total!',
    rating: 4,
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.review}"</p>
              <p className="text-right font-bold text-primary">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
