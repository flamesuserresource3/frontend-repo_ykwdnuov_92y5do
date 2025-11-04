import React, { useState } from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Showcase from './components/Showcase';
import AboutContact from './components/AboutContact';
import { Menu, X, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '6281234567890';
const WHATSAPP_TEXT = encodeURIComponent('Halo Tajawaz Studio! Saya ingin membuat website.');

export default function App() {
  const [open, setOpen] = useState(false);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="Tajawaz Studio beranda">
            <div className="w-8 h-8 rounded-lg bg-[#5f2ded] shadow-inner" aria-hidden="true"></div>
            <span className="font-extrabold tracking-tight">Tajawaz Studio</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium" aria-label="Navigasi utama">
            <a href="#pricing" className="hover:text-[#5f2ded] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f2ded] rounded">Harga</a>
            <a href="#showcase" className="hover:text-[#5f2ded] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f2ded] rounded">Portofolio</a>
            <a href="#contact" className="hover:text-[#5f2ded] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f2ded] rounded">Kontak</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-[#5f2ded] text-white px-4 py-2 text-sm font-semibold hover:bg-[#5122d9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f2ded]"
              aria-label="Pesan sekarang via WhatsApp"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile toggler */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f2ded]"
            aria-label="Buka navigasi"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden border-t border-slate-200">
            <nav className="px-6 py-4 grid gap-3 text-sm font-medium" aria-label="Navigasi utama mobile">
              <a href="#pricing" className="py-2 hover:text-[#5f2ded]" onClick={() => setOpen(false)}>Harga</a>
              <a href="#showcase" className="py-2 hover:text-[#5f2ded]" onClick={() => setOpen(false)}>Portofolio</a>
              <a href="#contact" className="py-2 hover:text-[#5f2ded]" onClick={() => setOpen(false)}>Kontak</a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#5f2ded] text-white px-4 py-2 text-sm font-semibold hover:bg-[#5122d9]"
                aria-label="Pesan sekarang via WhatsApp"
              >
                Pesan Sekarang
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Content */}
      <main>
        <Hero />
        <div id="pricing"><Pricing /></div>
        <div id="showcase"><Showcase /></div>
        <div id="contact"><AboutContact /></div>
      </main>

      {/* Floating WhatsApp CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#5f2ded] text-white px-4 py-3 text-sm font-semibold shadow-xl hover:bg-[#5122d9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f2ded]"
        aria-label="Chat WhatsApp Tajawaz Studio"
      >
        <Phone size={18} /> Konsultasi Gratis
      </a>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Tajawaz Studio — bagian dari Tajawaz.my.id
          </p>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hover:text-[#5f2ded]">Paket</a>
            <a href="#showcase" className="hover:text-[#5f2ded]">Portofolio</a>
            <a href="#contact" className="hover:text-[#5f2ded]">Kontak</a>
            <a href="mailto:hello@tajawaz.my.id" className="hover:text-[#5f2ded]">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
