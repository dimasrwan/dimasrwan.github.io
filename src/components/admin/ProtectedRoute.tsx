import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const ProtectedRoute: React.FC = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-white/50">Memeriksa autentikasi...</div>
      </div>
    )
  }

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/admin/login" replace />
  }

  // If user is logged in, render the child routes
  return <Outlet />
}

export default ProtectedRoute
