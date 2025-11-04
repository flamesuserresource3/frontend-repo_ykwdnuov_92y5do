import React from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '6281234567890';
const WHATSAPP_TEXT = encodeURIComponent('Halo Tajawaz Studio! Saya tertarik membuat website.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(95,45,237,0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(95,45,237,0.18), transparent 35%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 text-[#5f2ded] px-3 py-1 text-xs font-semibold ring-1 ring-[#5f2ded]/20 shadow-sm">
            <Rocket size={14} aria-hidden /> Tajawaz Studio — bagian dari Tajawaz.my.id
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Website Profesional yang Bikin <span className="text-[#5f2ded]">Percaya</span>
          </h1>
          <p className="max-w-2xl text-slate-600 text-base sm:text-lg">
            Tampil menawan, cepat, dan ramah budget. Mulai dari <span className="font-semibold text-slate-800">Rp150.000</span> saja.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#5f2ded] text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:bg-[#5224dc] transition"
              aria-label="Pesan sekarang via WhatsApp"
            >
              Pesan Sekarang
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 text-sm font-semibold ring-1 ring-slate-200 hover:bg-slate-50 transition"
            >
              Lihat Paket Harga
            </a>
          </div>
          <p className="text-xs text-slate-500">Gratis konsultasi & revisi ringan</p>
        </motion.div>
      </div>
    </section>
  );
}
