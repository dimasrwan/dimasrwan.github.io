import React from 'react'

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-24 md:py-32 overflow-hidden">
      {/* Optional: subtle background blur effect */}
      <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[2px] pointer-events-none"></div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <span className="font-label text-xs tracking-[0.2em] uppercase text-white/50">
          MY PHILOSOPHY
        </span>

        <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-[1.1] mt-5 text-white">
          Code. Design. Impact.
        </h2>

        <p className="font-body text-base sm:text-lg text-white/60 mt-6 leading-relaxed max-w-2xl mx-auto">
          Saya percaya bahwa produk digital yang hebat lahir dari keseimbangan antara performa, desain, dan kebutuhan pengguna.
          Setiap proyek dimulai dengan memahami masalah sebelum menulis satu baris kode. Tujuan saya bukan hanya membangun
          aplikasi, tetapi menciptakan pengalaman yang memberikan dampak nyata bagi pengguna.
        </p>
      </div>
    </section>
  )
}

export default Philosophy
