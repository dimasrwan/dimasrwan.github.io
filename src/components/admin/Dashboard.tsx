import React from 'react'
import { Link } from 'react-router-dom'
import { useProjects } from '../../hooks/useProjects'

const Dashboard: React.FC = () => {
  const { projects, loading, error, deleteProject } = useProjects()

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (window.confirm('Are you sure you want to delete this project?')) {
      await deleteProject(id);
    }
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold mb-2">Projects</h2>
          <p className="text-white/50 text-sm">Manage your portfolio projects</p>
        </div>
        <Link 
          to="/admin/projects/new" 
          className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          + Add New Project
        </Link>
      </div>

      {loading ? (
        <div className="text-white/50 flex justify-center py-20">Loading projects...</div>
      ) : error ? (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl">
          {error}
        </div>
      ) : projects.length === 0 ? (
        <div className="border border-dashed border-white/20 rounded-3xl flex items-center justify-center bg-white/[0.02] p-16 text-center">
          <div>
            <p className="text-white/40 mb-4">No projects found. Add your first project!</p>
            <Link to="/admin/projects/new" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors">
              Add Project
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="glass-card rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-300">
              <div className="h-48 overflow-hidden bg-white/5 relative">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20">No Image</div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-headline font-bold text-xl mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-white/50 text-sm line-clamp-2 mb-4 flex-1">{project.description}</p>
                <div className="flex gap-2 mb-6 flex-wrap">
                  {project.techStack?.slice(0,3).map((tech, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70">{tech}</span>
                  ))}
                  {(project.techStack?.length || 0) > 3 && (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70">+{project.techStack.length - 3}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <Link to={`/admin/projects/${project.id}/edit`} className="text-sm text-white/70 hover:text-white transition-colors flex-1 text-center py-2 bg-white/5 rounded-lg hover:bg-white/10">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(project.id)} className="text-sm text-red-400/70 hover:text-red-400 transition-colors flex-1 text-center py-2 bg-red-500/5 rounded-lg hover:bg-red-500/10">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard
