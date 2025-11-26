"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Layanan & Harga' },
    { href: '/produk', label: 'Produk' },
    { href: '/about', label: 'Tentang' },
    { href: '/testimonials', label: 'Testimoni' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Kontak' },
  ];

  return (
    <>
      {/* Top Bar - Enterprise Feature */}
      <div className="hidden lg:block bg-secondary text-secondary-foreground py-2.5 text-xs font-medium tracking-wide">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity cursor-default">
              <Phone size={14} className="text-primary" />
              <span>+62 881-0375-49162</span>
            </div>
            <div className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity cursor-default">
              <Mail size={14} className="text-primary" />
              <span>baliwebdevelover@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity cursor-default">
              <Clock size={14} className="text-primary" />
              <span>Senin - Minggu: 08:00 - 17:00</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/faq" className="hover:text-primary transition-colors">Bantuan</Link>
            <div className="h-3 w-px bg-white/20"></div>
            <Link href="/login" className="hover:text-primary transition-colors">Login Partner</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 w-full border-b",
          scrolled 
            ? "bg-white/90 backdrop-blur-md border-slate-200/60 shadow-sm py-2" 
            : "bg-white border-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                 {/* Fallback Logo Design if SVG fails or for cleaner look */}
                 <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-all">
                    U2
                 </div>
                 <div className="flex flex-col">
                    <span className="font-bold text-xl leading-none text-slate-900 tracking-tight">Clean<span className="text-primary">Pro</span></span>
                    <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Professional Cleaning</span>
                 </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
                <Button variant="ghost" size="sm" className="font-medium text-slate-600 hover:text-primary hover:bg-primary/5">Masuk</Button>
                <Button asChild className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
                  <Link href="/contact">Dapatkan Penawaran</Link>
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-primary hover:bg-slate-50 focus:outline-none transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-primary hover:bg-primary/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-slate-100 grid gap-3">
                    <Button variant="outline" className="w-full justify-center border-slate-200 text-slate-700" asChild>
                        <Link href="/login" onClick={() => setIsOpen(false)}>Masuk</Link>
                    </Button>
                    <Button className="w-full justify-center shadow-md shadow-primary/20" asChild>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Dapatkan Penawaran</Link>
                    </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
