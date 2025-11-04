import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Showcase from './components/Showcase';
import AboutContact from './components/AboutContact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#5f2ded]"></div>
            <span className="font-extrabold tracking-tight">Tajawaz Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#pricing" className="hover:text-[#5f2ded]">Harga</a>
            <a href="#contact" className="hover:text-[#5f2ded]">Kontak</a>
          </nav>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Tajawaz%20Studio!%20Saya%20ingin%20membuat%20website."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-[#5f2ded] text-white px-4 py-2 text-sm font-semibold hover:bg-[#5122d9]"
          >
            Pesan Sekarang
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <Showcase />
        <AboutContact />
      </main>

      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Tajawaz Studio — bagian dari Tajawaz.my.id
          </p>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hover:text-[#5f2ded]">Paket</a>
            <a href="#contact" className="hover:text-[#5f2ded]">Kontak</a>
            <a href="mailto:hello@tajawaz.my.id" className="hover:text-[#5f2ded]">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
