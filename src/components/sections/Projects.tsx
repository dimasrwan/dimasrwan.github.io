import React from 'react'
import { motion } from 'framer-motion'
import { useProjects } from '../../hooks/useProjects'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

export const Projects: React.FC = () => {
  const { projects, loading, error } = useProjects()

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label text-xs tracking-[0.2em] uppercase text-white/50"
          >
            SELECTED WORK
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mt-4"
          >
            Projects
          </motion.h2>
        </div>

        {/* Projects Content */}
        {loading ? (
          <div className="flex justify-center text-white/50 py-20">Loading projects...</div>
        ) : error ? (
          <div className="flex justify-center text-red-400 py-20 text-center">
            Gagal mengambil proyek dari database.<br/>{error}
          </div>
        ) : projects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full min-h-[400px] border border-dashed border-white/20 rounded-3xl flex items-center justify-center bg-white/[0.02] backdrop-blur-sm"
          >
            <p className="font-body text-white/40 text-lg">
              Projects will be displayed here
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="glass-card rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-56 sm:h-64 overflow-hidden bg-white/5 relative">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">No Image</div>
                  )}
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-display font-bold text-2xl text-white">{project.title}</h3>
                    <div className="flex gap-3 shrink-0 mt-1">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors" title="Live Preview">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors" title="Source Code">
                          <SiGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                    {project.techStack?.map((tech, idx) => (
                      <span key={idx} className="font-label text-xs tracking-wider px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Projects
