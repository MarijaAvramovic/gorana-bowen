import { useState } from 'react'

import './App.css'

 import logo1 from './assets/PHOTO-2025-06-22-11-55-29.jpg';
import session1 from './assets/PHOTO-2025-06-22-11-58-15.jpg';
import session2 from './assets/PHOTO-2025-06-22-11-58-15 2.jpg';
import session3 from './assets/PHOTO-2025-06-22-11-58-15 3.jpg';
import session4 from './assets/PHOTO-2025-06-22-11-58-15 4.jpg';
import session6 from './assets/PHOTO-2025-06-22-11-58-15 6.jpg';
import session7 from './assets/PHOTO-2025-06-22-11-58-15 7.jpg';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">

      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E40AF] to-[#2563EB] rounded-full shadow-2xl flex items-center justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 border-[6px] border-white/90 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 md:w-7 md:h-7 border-[3px] border-white/70 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -inset-1 border border-white/30 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Gorana</h1>
              <p className="text-xs md:text-sm -mt-1 text-[#3B82F6] font-medium tracking-[3px]">BOWEN & EMMETT</p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 lg:gap-10 text-base lg:text-lg font-medium">
            <a href="#o-meni" className="hover:text-[#2563EB] transition-colors">O meni</a>
            <a href="#tehnike" className="hover:text-[#2563EB] transition-colors">Tehnike</a>
            <a href="#benefiti" className="hover:text-[#2563EB] transition-colors">Benefiti</a>
            <a href="#kontakt" className="hover:text-[#2563EB] transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero - koristimo jednu od tvojih slika kao pozadinu */}
      <section 
        className="min-h-screen bg-cover bg-center flex items-center relative overflow-hidden"
        style={{ backgroundImage: `url(${session6})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10 pt-12">
          <p className="uppercase tracking-[5px] text-white/90 text-sm mb-6">Bowen & Emmett Terapeut • Beograd</p>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tighter text-white mb-8">
            Gorana
          </h2>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto mb-14">
            Nežne i moćne Bowen & Emmett tehnike za duboko iscjeljenje
          </p>

          <a href="#kontakt" 
             className="inline-block bg-white text-[#0F172A] hover:bg-sky-100 px-12 md:px-16 py-6 md:py-7 rounded-full text-lg md:text-xl font-semibold transition-all shadow-2xl">
            Kontaktirajte me
          </a>
        </div>
      </section>

      {/* O meni + slike */}
      <section id="o-meni" className="py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-10">O meni</h3>
              <div className="text-lg md:text-xl leading-relaxed text-[#334155]">
                Ja sam Gorana, terapeut Bowen i Emmett tehnike u Beogradu. 
                Specijalizovala sam se za nežne, neinvazivne metode koje pomažu telu da se prirodno resetuje i isceli.
              </div>
            </div>
            <img 
              src={session1} 
              alt="Gorana u radu" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px] md:h-auto"
            />
          </div>
        </div>
      </section>

      {/* Tehnike + slike */}
      <section id="tehnike" className="py-20 md:py-28 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#0F172A] mb-16">Tehnike kojima se bavim</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-sky-100">
                <h4 className="text-3xl md:text-4xl font-semibold mb-6 text-[#0F172A]">Bowen Terapija</h4>
                <p className="text-base md:text-lg text-[#475569]">Nežni valjajući pokreti koji stimulišu nervni sistem i pokreću prirodno iscjeljenje.</p>
              </div>
              <img src={session3} alt="Bowen terapija" className="rounded-3xl shadow-xl w-full" />
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-sky-100">
                <h4 className="text-3xl md:text-4xl font-semibold mb-6 text-[#0F172A]">Emmett Tehnika</h4>
                <p className="text-base md:text-lg text-[#475569]">Precizna tehnika za brzo oslobađanje napetosti i bola.</p>
              </div>
              <img src={session4} alt="emmett tehnika" className="rounded-3xl shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefiti */}
      <section id="benefiti" className="py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#0F172A] mb-16">Benefiti sesija</h3>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              "Olakšanje hroničnog bola u leđima i vratu",
              "Smanjenje migrena i glavobolja",
              "Brzo oslobađanje mišićne napetosti",
              "Smanjenje stresa i anksioznosti",
              "Poboljšanje sna i nivoa energije",
              "Bolja pokretljivost zglobova",
              "Podrška kod digestivnih tegoba",
              "Opšte poboljšanje blagostanja"
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 md:p-10 text-base md:text-lg border border-sky-100 hover:border-[#2563EB] hover:shadow-xl transition-all">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 md:py-28 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#2563EB] text-white">
        <div className="max-w-2xl mx-auto px-6 md:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Kontaktirajte me</h3>
          <p className="text-xl md:text-2xl mb-12 text-sky-200">Instagram</p>

          <div className="bg-white/10 backdrop-blur-2xl p-10 md:p-12 rounded-3xl border border-white/30">
            <p className="text-white/80 mb-8 text-lg">Najbrži način za zakazivanje:</p>
            
            <a 
              href="https://www.instagram.com/gorana.bowentherapy/" 
              target="_blank" 
              className="inline-flex flex-col md:flex-row items-center justify-center gap-5 bg-white/10 hover:bg-white/20 transition-all border border-white/30 px-10 py-8 md:py-7 rounded-3xl text-xl font-medium w-full"
            >
              <span className="text-5xl">📸</span>
              <div className="text-center md:text-left">
                <div className="font-semibold text-xl">Pošaljite mi poruku na Instagramu</div>
                <div className="text-sky-200 mt-1">@gorana.bowentherapy
</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 md:py-12 bg-white text-center text-sm text-slate-500">
        Gorana • Bowen & Emmett Terapeut
      </footer>
    </div>
  );
}

export default App;