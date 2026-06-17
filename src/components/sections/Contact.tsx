import React from 'react'
import { motion } from 'framer-motion'
import { SiInstagram, SiGithub } from '@icons-pack/react-simple-icons'
import { Mail, ChevronRight, ExternalLink } from 'lucide-react'

const contactMethods = [
  {
    id: 'email',
    title: 'Email',
    subtitle: 'dimasrwann@gmail.com',
    icon: Mail,
    action: 'link',
    url: 'mailto:dimasrwann@gmail.com',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    subtitle: '@dimasrwan',
    icon: SiInstagram,
    action: 'link',
    url: 'https://www.instagram.com/dimasrwan?igsh=MXU1bWd0dDd0ejdndQ==',
  },
  {
    id: 'github',
    title: 'GitHub',
    subtitle: '@dimasrwan',
    icon: SiGithub,
    action: 'link',
    url: 'https://github.com/dimasrwan',
  }
]

export const Contact: React.FC = () => {

  return (
    <section id="contact" className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-label text-xs tracking-[0.2em] uppercase text-white/50 mb-4 block"
        >
          HUBUNGI SAYA
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Hubungi Saya Kapan Saja
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed"
        >
          Apakah Anda memiliki proyek besar yang ingin dikerjakan bersama, memiliki pertanyaan spesifik, atau ingin membangun kolaborasi yang solid? Silakan hubungi saya secara instan melalui pilihan media sosial atau chat cepat di bawah.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
        {contactMethods.map((method, index) => {
          const Icon = method.icon

          const content = (
            <div className="flex items-center p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-4 sm:mr-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-white/80 group-hover:text-white transition-colors" size={24} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-headline font-bold text-white text-base sm:text-lg mb-1">{method.title}</h3>
                <p className="font-body text-xs sm:text-sm text-white/50">{method.subtitle}</p>
              </div>
              <div className="ml-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent group-hover:bg-white/10 transition-colors">
                  <ChevronRight className="text-white/40 group-hover:text-white transition-colors" size={18} />
                </div>
              </div>
            </div>
          )

          return (
            <motion.div
              key={method.id}
              className="w-full md:w-[calc(50%-12px)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              {method.action === 'link' && method.url ? (
                <a href={method.url} target="_blank" rel="noreferrer" className="block w-full">
                  {content}
                </a>
              ) : (
                <div className="block w-full cursor-default">
                  {content}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Contact
