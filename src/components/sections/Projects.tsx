import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProjects, type Project } from '../../hooks/useProjects'
import { ExternalLink, X } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

export const Projects: React.FC = () => {
  const { projects, loading, error } = useProjects()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="w-[300px] sm:w-[350px] md:w-auto snap-center shrink-0 glass-card rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
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
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mb-4">
                    {project.techStack?.map((tech, idx) => (
                      <span key={idx} className="font-label text-xs tracking-wider px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 font-label text-xs tracking-widest transition-all duration-300 hover:scale-[1.02]"
                  >
                    LIHAT DETAIL
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 text-white/70 hover:text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="h-64 sm:h-80 md:h-96 w-full relative bg-white/5">
                  {selectedProject.imageUrl ? (
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">No Image</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>
                
                <div className="p-6 sm:p-8 md:p-10 -mt-16 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                      <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">{selectedProject.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack?.map((tech, idx) => (
                          <span key={idx} className="font-label text-xs tracking-wider px-3 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 shrink-0">
                      {selectedProject.githubUrl && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-label transition-colors">
                          <SiGithub size={18} />
                          <span>Source</span>
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:bg-white/90 text-sm font-label transition-colors">
                          <ExternalLink size={18} />
                          <span>Visit Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="prose prose-invert max-w-none font-body text-white/70 leading-relaxed">
                    {selectedProject.description.split('\n').map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default Projects
