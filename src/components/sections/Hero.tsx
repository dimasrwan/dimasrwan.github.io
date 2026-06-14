import React from 'react'
const heroPortrait = new URL('../../assets/hero-portrait.png', import.meta.url).href


export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Text - visible on md+ as full-width overlay */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 hidden md:flex">
        <h1 className="text-[12vw] lg:text-[14vw] font-display font-bold text-outline uppercase leading-none text-center whitespace-nowrap">
          Dimas<br />Irawan
        </h1>
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-6 lg:gap-gutter">
        {/* Left Content */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <h2 className="font-display text-[40px] leading-tight sm:text-[56px] md:text-[72px] lg:text-[96px] font-bold tracking-tighter">
            Mobile App & Web Developer
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-md">
            Saya membantu menciptakan mobile app & situs web yang ramah pengguna dan intuitif dengan desain antarmuka modern yang mendorong konversi dan kepuasan pengguna.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4">
            <button
              onClick={() => {
                const target = document.querySelector('#projects')
                if (target) target.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-primary text-[#050505] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-label-sm text-xs font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all cursor-pointer"
            >
              LIHAT PROJEK
            </button>
            <button
              onClick={() => {
                const target = document.querySelector('#about')
                if (target) target.scrollIntoView({ behavior: 'smooth' })
              }}
              className="glass-card px-6 sm:px-8 py-3 sm:py-4 rounded-full font-label-sm text-xs font-bold hover:bg-white/10 transition-all cursor-pointer"
            >
              TENTANG SAYA
            </button>
          </div>
        </div>
        {/* Hero Image with background text on mobile */}
        <div className="relative flex justify-center items-center">
          {/* Background Text - visible on mobile only, behind the photo */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 md:hidden">
            <h1 className="text-[18vw] font-display font-bold text-outline uppercase leading-none text-center whitespace-nowrap">
              Dimas<br />Irawan
            </h1>
          </div>
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[400px] aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700">
            <img
              alt="Portrait Dimas Irawan"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
              src={heroPortrait}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
export default Hero
