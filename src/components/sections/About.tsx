import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Globe, Palette, Database } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '3+', label: 'Years Learning' },
  { value: '5+', label: 'Technologies Mastered' },
  { value: '100%', label: 'Commitment' },
]

const skills = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    techs: ['Flutter', 'Kotlin', 'React Native', 'Android SDK'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    techs: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    techs: ['Figma', 'Wireframing', 'Prototyping', 'Design System'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    techs: ['Node.js', 'Express.js', 'Firebase', 'PostgreSQL'],
  },
]

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden pt-16 md:pt-24">
        <div className="flex flex-col items-center">
          <span className="text-outline text-[180px] sm:text-[280px] md:text-[400px] font-['Plus_Jakarta_Sans'] font-black leading-none opacity-[0.08]">
            CODE
          </span>
          <span className="text-outline text-[180px] sm:text-[280px] md:text-[400px] font-['Plus_Jakarta_Sans'] font-black leading-none opacity-[0.08] -mt-16 sm:-mt-24 md:-mt-32">
            CREATE
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT COLUMN — Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="font-label text-xs tracking-[0.2em] uppercase text-white/50">
              ABOUT
            </span>

            <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] mt-5 text-white">
              Memadukan Teknologi<br />
              dengan Kreativitas.
            </h2>

            <p className="font-body text-base sm:text-lg text-white/60 mt-6 leading-relaxed max-w-lg">
              Saya adalah Mobile & Web Developer yang berfokus pada pengembangan aplikasi modern,
              website responsif, dan pengalaman pengguna yang intuitif. Saya percaya bahwa teknologi
              terbaik bukan hanya berfungsi dengan baik, tetapi juga memberikan pengalaman yang
              berkesan bagi pengguna. Dengan perpaduan antara logika, desain, dan inovasi, saya
              menciptakan solusi digital yang efisien dan bernilai.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white">
                    {stat.value}
                  </span>
                  <p className="text-xs text-white/40 mt-1 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Skill Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 transition-all duration-500 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  <Icon className="text-white/70 group-hover:text-white transition-colors duration-300 mb-5" size={28} />
                  <h3 className="font-headline text-lg font-bold text-white mb-3">
                    {skill.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {skill.techs.map((tech) => (
                      <li
                        key={tech}
                        className="text-sm text-white/40 group-hover:text-white/60 transition-colors duration-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
