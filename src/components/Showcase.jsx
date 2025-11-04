import React from 'react';
import { Star } from 'lucide-react';

const portfolio = [
  {
    title: 'UMKM Kopi Nusantara',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Freelancer Desainer',
    img: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Startup Edukasi',
    img: 'https://images.unsplash.com/photo-1552960394-c81add8de6b1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Jasa Creative Studio',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
  },
];

const testimonials = [
  {
    name: 'Ayu — Pemilik Kedai Kopi',
    text: 'Proses cepat dan hasilnya rapi. Harga ramah UMKM!',
  },
  {
    name: 'Bima — Freelancer',
    text: 'Portofolio online saya jadi terlihat profesional. Mantap!',
  },
  {
    name: 'Sari — Founder Startup',
    text: 'Tim komunikatif dan eksekusi tepat waktu. Rekomendasi!',
  },
];

export default function Showcase() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Portofolio Pilihan</h2>
            <p className="mt-2 text-slate-600">Contoh proyek yang telah kami kerjakan untuk UMKM, freelancer, dan startup.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {portfolio.map((p) => (
                <figure key={p.title} className="group overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200 bg-white">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-video w-full object-cover group-hover:scale-[1.02] transition duration-300 ease-out"
                  />
                  <figcaption className="px-3 py-2 text-sm text-slate-700">{p.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Testimoni Klien</h3>
            <p className="mt-2 text-slate-600">Apa kata mereka tentang Tajawaz Studio.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="rounded-xl bg-white p-5 ring-1 ring-slate-200 shadow-sm">
                  <div className="flex items-center gap-1 text-[#5f2ded]" aria-label="Rating 5 dari 5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#5f2ded" />
                    ))}
                  </div>
                  <p className="mt-2 text-slate-800">“{t.text}”</p>
                  <footer className="mt-1 text-sm text-slate-500">{t.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
