import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">CleanPro</h3>
            <p className="text-gray-400">
              Layanan kebersihan profesional yang mengutamakan kualitas, kepercayaan, dan kepuasan pelanggan.
            </p>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary" />
                <span>kontak@cleanpro.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary" />
                <span>(021) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="mr-3 text-primary" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CleanPro. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};
