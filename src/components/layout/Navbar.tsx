import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface NavbarProps {
  handleAnchorClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void
}

const navLinks = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Projects', target: '#projects' },
  { label: 'Contact', target: '#contact' }
]

export const Navbar: React.FC<NavbarProps> = ({ handleAnchorClick }) => {
  const [activeLink, setActiveLink] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled to the bottom (with a 150px buffer for footer)
      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 150;
      if (isAtBottom) {
        setActiveLink(navLinks[navLinks.length - 1].label);
        return;
      }

      const sections = navLinks.map(link => document.querySelector(link.target) as HTMLElement | null);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          // Trigger when the top of the section is within the upper 60% of the viewport.
          // EXTRA FIX for the last section (Contact): If it's the last section and it's visible on screen at all (entered bottom 150px), highlight it.
          const isLastSection = i === sections.length - 1;
          if (rect.top <= window.innerHeight * 0.6 || (isLastSection && rect.top < window.innerHeight - 150)) {
            setActiveLink(navLinks[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    label: string,
  ) => {
    e.preventDefault()
    setActiveLink(label)
    setIsMenuOpen(false)
    handleAnchorClick(e, targetId)
  }

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-2 sm:top-3 md:top-4 left-1/2 z-50 -translate-x-1/2 w-full px-2 sm:px-3"
    >
      <div className="glass-card mx-auto w-full max-w-[97vw] sm:max-w-[650px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1350px] 2xl:max-w-[1480px] rounded-2xl md:rounded-full border border-white/10 bg-white/5 px-4 sm:px-6 py-2 sm:py-3 shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <div className="text-white font-headline text-base sm:text-xl font-bold tracking-tight shrink-0">
              Dimas.
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = activeLink === link.label
                return (
                  <a
                    key={link.label}
                    href={link.target}
                    onClick={(e) => handleNavClick(e, link.target, link.label)}
                    className={`px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-white/20 text-white shadow-[0_0_25px_rgba(255,255,255,0.35)] scale-105'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 md:hidden"
            >
              <span className="relative flex h-5 w-5 flex-col items-center justify-center">
                <span
                  className={`absolute block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5 sm:-translate-y-2'
                  }`}
                />
                <span
                  className={`absolute block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span
                  className={`absolute block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5 sm:translate-y-2'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mt-3 sm:mt-4 overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-2 rounded-2xl sm:rounded-3xl bg-[#111111]/80 border border-white/10 p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                {navLinks.map((link, index) => {
                  const isActive = activeLink === link.label
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      key={link.label}
                      href={link.target}
                      onClick={(e) => handleNavClick(e, link.target, link.label)}
                      className={`group flex items-center justify-between rounded-xl px-5 py-3 sm:py-4 text-base font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-white/10 text-white shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-white/20'
                          : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-white translate-x-1' : 'text-white/30 group-hover:text-white group-hover:translate-x-1'}`} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
