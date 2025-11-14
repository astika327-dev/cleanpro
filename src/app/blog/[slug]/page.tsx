
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const posts: { [key: string]: { title: string; content: string } } = {
  '5-tips-membersihkan-rumah-dengan-cepat': {
    title: '5 Tips Membersihkan Rumah dengan Cepat dan Efisien',
    content: `
      <p>Membersihkan rumah seringkali terasa seperti tugas yang tak ada habisnya. Namun, dengan strategi yang tepat, Anda bisa melakukannya dengan lebih cepat dan efisien. Berikut adalah 5 tips dari U2CleanPro:</p>
      <ol>
        <li><strong>Buat Rencana:</strong> Tentukan ruangan mana yang akan dibersihkan terlebih dahulu dan apa saja yang perlu dilakukan.</li>
        <li><strong>Gunakan Alat yang Tepat:</strong> Pastikan Anda memiliki semua peralatan kebersihan yang dibutuhkan sebelum memulai.</li>
        <li><strong>Mulai dari Atas ke Bawah:</strong> Bersihkan debu dari langit-langit dan furnitur bagian atas terlebih dahulu sebelum menyapu atau mengepel lantai.</li>
        <li><strong>Satu Ruangan Sekaligus:</strong> Fokus menyelesaikan satu ruangan sebelum pindah ke ruangan berikutnya.</li>
        <li><strong>Lakukan Secara Teratur:</strong> Membersihkan sedikit setiap hari akan lebih ringan daripada membersihkan semuanya sekaligus di akhir pekan.</li>
      </ol>
    `,
  },
  'bahan-alami-untuk-membersihkan-dapur': {
    title: 'Bahan Alami yang Ampuh untuk Membersihkan Dapur Anda',
    content: `
      <p>Bahan kimia pembersih memang efektif, tetapi bahan alami seringkali lebih aman dan ramah lingkungan. Berikut beberapa bahan alami yang bisa Anda gunakan:</p>
      <ul>
        <li><strong>Cuka Putih:</strong> Efektif untuk membersihkan noda air, lemak, dan sebagai disinfektan alami.</li>
        <li><strong>Baking Soda:</strong> Dapat digunakan sebagai scrub lembut untuk membersihkan wastafel, kompor, dan oven.</li>
        <li><strong>Lemon:</strong> Selain memberikan aroma segar, lemon juga ampuh untuk menghilangkan bau tak sedap dan noda lemak.</li>
      </ul>
    `,
  },
  'jadwal-membersihkan-rumah-harian-mingguan-bulanan': {
    title: 'Membuat Jadwal Membersihkan Rumah: Harian, Mingguan, dan Bulanan',
    content: `
      <p>Dengan jadwal yang terstruktur, rumah Anda akan selalu bersih dan rapi. Berikut adalah contoh jadwal yang bisa Anda ikuti:</p>
      <h3>Harian:</h3>
      <ul>
        <li>Merapikan tempat tidur</li>
        <li>Membersihkan meja dapur setelah digunakan</li>
        <li>Menyapu lantai di area yang sering dilalui</li>
      </ul>
      <h3>Mingguan:</h3>
      <ul>
        <li>Mengganti sprei</li>
        <li>Membersihkan kamar mandi</li>
        <li>Mengepel lantai</li>
      </ul>
      <h3>Bulanan:</h3>
      <ul>
        <li>Membersihkan jendela</li>
        <li>Membersihkan bagian dalam kulkas</li>
        <li>Mencuci gorden</li>
      </ul>
    `,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <article>
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        <div className="mt-12">
          <Link href="/blog" className="text-green-600 hover:underline">
            &larr; Kembali ke Blog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
