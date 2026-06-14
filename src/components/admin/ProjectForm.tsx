import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useProjects, type Project } from '../../hooks/useProjects'

const ProjectForm: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { projects, addProject, updateProject, loading: projectsLoading } = useProjects()

  const isEditMode = !!id
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    imageUrl: '',
    techStack: [],
    liveUrl: '',
    githubUrl: ''
  })
  const [techInput, setTechInput] = useState('')

  useEffect(() => {
    if (isEditMode && projects.length > 0) {
      const existingProject = projects.find(p => p.id === id)
      if (existingProject) {
        setFormData({
          title: existingProject.title,
          description: existingProject.description,
          imageUrl: existingProject.imageUrl,
          techStack: existingProject.techStack || [],
          liveUrl: existingProject.liveUrl || '',
          githubUrl: existingProject.githubUrl || ''
        })
      }
    }
  }, [isEditMode, id, projects])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleTechAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && techInput.trim()) {
      e.preventDefault()
      if (!formData.techStack.includes(techInput.trim())) {
        setFormData({ ...formData, techStack: [...formData.techStack, techInput.trim()] })
      }
      setTechInput('')
    }
  }

  const removeTech = (techToRemove: string) => {
    setFormData({
      ...formData,
      techStack: formData.techStack.filter(tech => tech !== techToRemove)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (isEditMode) {
        const success = await updateProject(id, formData)
        if (success) navigate('/admin')
        else setError('Failed to update project')
      } else {
        const success = await addProject(formData)
        if (success) navigate('/admin')
        else setError('Failed to add project')
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (isEditMode && projectsLoading) return <div className="p-10 text-white/50">Loading project data...</div>

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex items-center gap-4">
        <Link to="/admin" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>
        <h2 className="font-display text-3xl font-bold">{isEditMode ? 'Edit Project' : 'Add New Project'}</h2>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="glass-card rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8 flex flex-col gap-6">
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-white/70">Project Title *</label>
          <input 
            type="text" 
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="e.g. E-Commerce Dashboard"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-white/70">Description *</label>
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
            placeholder="Describe what the project does and what you learned..."
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-white/70">Image URL *</label>
          <input 
            type="url" 
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="https://example.com/image.png"
          />
          {formData.imageUrl && (
            <div className="mt-2 h-32 w-full sm:w-48 rounded-xl overflow-hidden border border-white/10 bg-black/50">
              <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-white/70">Tech Stack (Press Enter to add)</label>
          <input 
            type="text" 
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyDown={handleTechAdd}
            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="e.g. React"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.techStack.map(tech => (
              <div key={tech} className="bg-white/10 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2">
                {tech}
                <button type="button" onClick={() => removeTech(tech)} className="text-white/50 hover:text-white">
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-white/70">Live Demo URL</label>
            <input 
              type="url" 
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="https://..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-white/70">GitHub URL</label>
            <input 
              type="url" 
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="https://github.com/..."
            />
          </div>
        </div>

        <div className="mt-4 pt-6 border-t border-white/10 flex justify-end gap-4">
          <Link to="/admin" className="px-6 py-3 rounded-full text-sm font-bold text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            Cancel
          </Link>
          <button 
            type="submit" 
            disabled={loading}
            className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50"
          >
            {loading ? 'Saving...' : isEditMode ? 'Update Project' : 'Save Project'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProjectForm
