import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const EMAIL = 'hello@tajawaz.my.id';
const WHATSAPP_NUMBER = '6281234567890';

export default function AboutContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Pertanyaan dari Website Tajawaz Studio');
    const body = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Tentang Kami</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Tajawaz Studio adalah bagian dari ekosistem Tajawaz.my.id. Kami fokus membantu
            UMKM, freelancer, dan startup untuk hadir secara online melalui website yang
            modern, cepat, dan terjangkau. Kami percaya setiap bisnis layak tampil profesional.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-slate-700 hover:text-[#5f2ded]">
              <Phone size={18} /> +{WHATSAPP_NUMBER}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-slate-700 hover:text-[#5f2ded]">
              <Mail size={18} /> {EMAIL}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Tajawaz Studio!')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit mt-2 items-center justify-center rounded-lg bg-[#5f2ded] text-white px-4 py-2 text-sm font-semibold shadow hover:bg-[#5122d9]"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
        <div>
          <div className="rounded-2xl p-6 bg-slate-50 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Formulir Kontak</h3>
            <p className="text-slate-600 text-sm mt-1">Tanyakan paket atau konsultasikan kebutuhan Anda.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#5f2ded] focus:ring-[#5f2ded]"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#5f2ded] focus:ring-[#5f2ded]"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#5f2ded] focus:ring-[#5f2ded]"
                  placeholder="Ceritakan kebutuhan website Anda"
                />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-slate-800">
                  Kirim via Email
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo, saya ingin konsultasi pembuatan website.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#5f2ded] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#5122d9]"
                >
                  Chat WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
