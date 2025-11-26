import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    layanan: [
      { label: 'Kebersihan Rumah', href: '/services' },
      { label: 'Kebersihan Kantor', href: '/services' },
      { label: 'Purna Bangun', href: '/services' },
      { label: 'Pembersihan Villa', href: '/services' },
      { label: 'Harga & Paket', href: '/services#pricing' },
    ],
    perusahaan: [
      { label: 'Tentang Kami', href: '/about' },
      { label: 'Testimoni', href: '/testimonials' },
      { label: 'Blog', href: '/blog' },
      { label: 'Karir', href: '/contact' },
    ],
    bantuan: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Hubungi Kami', href: '/contact' },
      { label: 'Kebijakan Privasi', href: '/privacy' },
      { label: 'Syarat & Ketentuan', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  U2
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl leading-none text-white tracking-tight">Clean<span className="text-primary">Pro</span></span>
                  <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Professional Cleaning</span>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
                Layanan kebersihan profesional yang mengutamakan kualitas, kepercayaan, dan kepuasan pelanggan dengan standar internasional.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:baliwebdevelover@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <span className="text-sm">baliwebdevelover@gmail.com</span>
                </a>
                <a href="https://wa.me/62881037549162" className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <span className="text-sm">+62 881-0375-49162</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <span className="text-sm">Bali, Indonesia</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Facebook size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Layanan */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Layanan</h4>
              <ul className="space-y-3">
                {footerLinks.layanan.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perusahaan */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Perusahaan</h4>
              <ul className="space-y-3">
                {footerLinks.perusahaan.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bantuan */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Bantuan</h4>
              <ul className="space-y-3">
                {footerLinks.bantuan.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} U2CleanPro. Semua Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-primary transition-colors">Kebijakan Privasi</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Syarat Layanan</Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
