import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import TechMarquee from './components/TechMarquee'
import Philosophy from './components/sections/Philosophy'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

// Lazy Load Admin Components to improve performance
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'))
const Dashboard = lazy(() => import('./components/admin/Dashboard.tsx'))
const ProjectForm = lazy(() => import('./components/admin/ProjectForm.tsx'))
const Login = lazy(() => import('./components/admin/Login'))
const ProtectedRoute = lazy(() => import('./components/admin/ProtectedRoute'))

const AdminLoader = () => (
  <div className="min-h-screen bg-[#050505] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
  </div>
)

function Portfolio() {
  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth'
        })
      }, 100)
    }
  }

  // Parallax Effect for Background Text
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      const text = document.querySelector('.text-outline') as HTMLElement | null
      if (text) {
        text.style.transform = `translateX(${(scroll * 0.1) - 100}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="selection:bg-primary selection:text-[#050505] min-h-screen bg-[#050505] text-white overflow-x-hidden font-body">
      <Navbar handleAnchorClick={handleAnchorClick} />
      <Hero />
      <About />
      <TechMarquee />
      <Philosophy />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<AdminLoader />}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects/new" element={<ProjectForm />} />
            <Route path="projects/:id/edit" element={<ProjectForm />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App

