import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login(email, password)
      navigate('/admin')
    } catch (err: any) {
      console.error(err)
      setError('Email atau password salah. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] font-body flex items-center justify-center p-6">
      <div className="glass-card w-full max-w-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 mb-4 object-contain" />
          <h1 className="text-white font-display text-3xl font-bold">Admin Login</h1>
          <p className="text-white/50 text-sm mt-2">Masuk ke dashboard untuk mengelola portofolio</p>
        </div>

        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-white/70 text-sm font-bold">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="admin@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white/70 text-sm font-bold">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="mt-4 bg-white text-black font-bold py-3 px-4 rounded-full hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50"
          >
            {loading ? 'Memproses...' : 'Login'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="/" className="text-white/40 hover:text-white text-sm transition-colors">
            &larr; Kembali ke halaman utama
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
