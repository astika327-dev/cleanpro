
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const posts = [
  {
    slug: '5-tips-membersihkan-rumah-dengan-cepat',
    title: '5 Tips Membersihkan Rumah dengan Cepat dan Efisien',
    excerpt: 'Ingin rumah bersih tanpa menghabiskan banyak waktu? Simak 5 tips jitu dari CleanPro untuk membersihkan rumah dengan cepat dan efisien.',
  },
  {
    slug: 'bahan-alami-untuk-membersihkan-dapur',
    title: 'Bahan Alami yang Ampuh untuk Membersihkan Dapur Anda',
    excerpt: 'Dapur adalah jantung rumah, dan menjaganya tetap bersih sangat penting. Temukan bahan-bahan alami yang bisa Anda gunakan untuk membersihkan dapur secara efektif.',
  },
  {
    slug: 'jadwal-membersihkan-rumah-harian-mingguan-bulanan',
    title: 'Membuat Jadwal Membersihkan Rumah: Harian, Mingguan, dan Bulanan',
    excerpt: 'Dengan jadwal yang terorganisir, membersihkan rumah akan menjadi lebih mudah dan tidak memberatkan. Berikut panduan dari CleanPro untuk membuat jadwal kebersihan.',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog CleanPro</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.slug} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-6">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-green-600 hover:underline">
                Baca Selengkapnya
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
