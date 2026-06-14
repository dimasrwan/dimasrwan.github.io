import React from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const AdminLayout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/admin/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row font-body">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
        <div className="flex items-center gap-3 mb-10">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          <h1 className="font-headline text-xl font-bold">Admin Panel</h1>
        </div>

        <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          <Link
            to="/admin"
            className={`px-4 py-3 rounded-xl transition-all duration-300 font-medium whitespace-nowrap ${
              location.pathname === '/admin' || location.pathname === '/admin/'
                ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/"
            target="_blank"
            className="px-4 py-3 rounded-xl transition-all duration-300 font-medium text-white/60 hover:text-white hover:bg-white/5 whitespace-nowrap"
          >
            View Live Site
          </Link>
        </nav>

        <div className="mt-8 md:mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
          <div className="text-white/50 text-xs hidden md:block truncate">
            Logged in as:<br/>
            <strong className="text-white/70">{user?.email}</strong>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full text-left md:text-center px-4 py-3 rounded-xl transition-all duration-300 font-medium text-red-400/70 hover:text-red-400 hover:bg-red-500/10 whitespace-nowrap"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 lg:p-14 overflow-y-auto max-w-7xl">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
