import React from 'react'

export const Experience: React.FC = () => {
  return (
    <section id="pengalaman" className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter">
        <div className="md:col-span-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold md:sticky md:top-32 mb-6 md:mb-0">Pengalaman &amp; Edukasi</h2>
        </div>
        <div className="md:col-span-8 flex flex-col gap-10 md:gap-12">
          {/* Timeline Item */}
          <div className="border-b border-white/10 pb-6 md:pb-8 group">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <h4 className="font-headline text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">Senior UI Designer</h4>
                <p className="font-body text-sm sm:text-base text-on-surface-variant">Nexus Digital Agency • Remote</p>
              </div>
              <span className="font-label-sm text-[10px] sm:text-xs text-primary bg-white/5 px-3 sm:px-4 py-1 rounded-full whitespace-nowrap">2021 — SEKARANG</span>
            </div>
            <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-xl">
              Memimpin pengembangan sistem desain untuk tiga klien Fortune 500, meningkatkan konsistensi desain sebesar 40% di berbagai platform aplikasi.
            </p>
          </div>
          {/* Timeline Item */}
          <div className="border-b border-white/10 pb-6 md:pb-8 group">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <h4 className="font-headline text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">UI/UX Specialist</h4>
                <p className="font-body text-sm sm:text-base text-on-surface-variant">Creative Flow Studio • Jakarta</p>
              </div>
              <span className="font-label-sm text-[10px] sm:text-xs text-primary bg-white/5 px-3 sm:px-4 py-1 rounded-full whitespace-nowrap">2019 — 2021</span>
            </div>
            <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-xl">
              Berhasil meluncurkan 12+ aplikasi seluler, fokus pada riset yang berpusat pada pengguna dan pembuatan prototipe high-fidelity.
            </p>
          </div>
          {/* Timeline Item */}
          <div className="border-b border-white/10 pb-6 md:pb-8 group">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <h4 className="font-headline text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">B.Des in Visual Communication</h4>
                <p className="font-body text-sm sm:text-base text-on-surface-variant">Institut Seni • Indonesia</p>
              </div>
              <span className="font-label-sm text-[10px] sm:text-xs text-primary bg-white/5 px-3 sm:px-4 py-1 rounded-full whitespace-nowrap">2015 — 2019</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
