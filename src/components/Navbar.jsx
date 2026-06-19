import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Home, User, Briefcase, Mail } from 'lucide-react'
import '../styles/components/navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleNavClick = (sectionId) => {
    setIsOpen(false)
    setTimeout(() => {
      const element = document.querySelector(`[data-section="${sectionId}"]`)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - 100
        window.scrollTo({ top: elementPosition, behavior: 'smooth' })
      } else if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 100)
  }

  const navItems = [
    { id: 'home',     label: 'Home',     icon: Home },
    { id: 'about',    label: 'About',    icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact',  label: 'Contact',  icon: Mail },
  ]

  return (
    <>
      {/* ── Floating Pill Navbar ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
        <div className="navbar-pill">

          {/* Logo */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('home') }}
          >
            <span className="logo-text">Fariz</span>
            <span className="logo-dot">.</span>
          </a>

          {/* Desktop nav links */}
          <div className="navbar-menu">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
                  className="nav-link"
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle theme">
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Mobile hamburger */}
            <button
              className="navbar-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      {isOpen && (
        <div className={`navbar-mobile ${darkMode ? 'dark' : ''}`}>
          <div className="mobile-menu">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
                  className="mobile-link"
                >
                  <span className="mobile-icon"><Icon size={22} /></span>
                  <span className="mobile-text">{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}