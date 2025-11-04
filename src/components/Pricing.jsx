import React from 'react';
import { Check } from 'lucide-react';

const WHATSAPP_NUMBER = '6281234567890';
const baseWAText = encodeURIComponent('Halo Tajawaz Studio! Saya ingin memesan paket:');

const tiers = [
  {
    name: 'Basic',
    price: 'Rp150.000',
    description: 'Cepat online untuk validasi ide dan profil bisnis.',
    features: [
      '1 halaman',
      'Subdomain',
      'Form WhatsApp',
      'Selesai 2–3 hari',
    ],
  },
  {
    name: 'Pro',
    price: 'Rp450.000',
    description: 'Paket ideal untuk UMKM dan freelancer berkembang.',
    features: [
      '5 halaman',
      'Domain .my.id',
      'Optimasi performa',
      'Selesai 5–7 hari',
    ],
    featured: true,
  },
  {
    name: 'Bisnis',
    price: 'Rp950.000',
    description: 'Solusi lengkap untuk startup dan bisnis serius.',
    features: [
      '10 halaman',
      'Domain .com',
      'SEO dasar',
      'Support 1 bulan',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Paket Harga</h2>
          <p className="mt-2 text-slate-600">Pilih paket sesuai kebutuhan bisnis Anda.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const waText = encodeURIComponent(`${baseWAText} ${tier.name}`);
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;
            return (
              <div
                key={tier.name}
                className={`rounded-2xl border ${tier.featured ? 'border-[#5f2ded] ring-2 ring-[#5f2ded]/20 shadow-xl' : 'border-slate-200'} p-6 bg-white`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${tier.featured ? 'bg-[#5f2ded]/10 text-[#5f2ded]' : 'bg-slate-100 text-slate-600'}`}>Terpopuler</span>
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-extrabold text-slate-900">{tier.price}</div>
                  <p className="text-sm text-slate-600 mt-1">{tier.description}</p>
                </div>
                <ul className="mt-6 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-700">
                      <Check size={18} className="mt-0.5 text-[#5f2ded]" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${tier.featured ? 'bg-[#5f2ded] text-white hover:bg-[#5122d9]' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                >
                  Pesan Paket {tier.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
