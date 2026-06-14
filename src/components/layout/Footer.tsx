import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 md:py-24 bg-[#050505] border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start px-margin-mobile md:px-margin-desktop gap-6 md:gap-8 max-w-container-max mx-auto">
        <div>
          <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">Dimas Irawan</div>
          <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-xs">
            Menciptakan identitas digital yang beresonansi dan memimpin.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-4 sm:gap-6">
          <div className="font-label-sm text-[10px] sm:text-xs text-on-surface-variant">© 2024 Dimas Irawan — HAK CIPTA DILINDUNGI</div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
