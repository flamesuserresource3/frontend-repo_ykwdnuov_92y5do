import React from 'react';
import { Rocket } from 'lucide-react';

const WHATSAPP_NUMBER = '6281234567890';
const WHATSAPP_TEXT = encodeURIComponent('Halo Tajawaz Studio! Saya tertarik membuat website.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(95,45,237,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(95,45,237,0.2),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 text-[#5f2ded] px-3 py-1 text-xs font-semibold ring-1 ring-[#5f2ded]/20 shadow-sm">
            <Rocket size={14} /> Tajawaz Studio — Bagian dari ekosistem Tajawaz.my.id
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Bangun Website Profesional Mulai <span className="text-[#5f2ded]">Rp150 Ribu.</span>
          </h1>
          <p className="max-w-2xl text-slate-600 text-base sm:text-lg">
            Kami bantu bisnis Anda tampil online dengan cepat, mudah, dan terjangkau.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#5f2ded] text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:bg-[#5224dc] transition"
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
        </div>
      </div>
    </section>
  );
}
