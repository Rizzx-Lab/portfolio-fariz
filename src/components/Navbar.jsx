import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Home, User, Briefcase, Mail } from 'lucide-react'
import '../styles/components/navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark', !darkMode)
  }

  // FUNGSI SCROLL YANG DIOPTIMALKAN
  const handleNavClick = (sectionId) => {
    setIsOpen(false) // Tutup mobile menu
    
    setTimeout(() => {
      // Cari element dengan data-section
      const element = document.querySelector(`[data-section="${sectionId}"]`)
      
      if (element) {
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      } else {
        console.warn(`Section '${sectionId}' tidak ditemukan`)
        // Fallback ke top untuk home
        if (sectionId === 'home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }
      }
    }, 100)
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <a 
            href="#"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
          >
            <span className="logo-text">Fariz</span>
            <span className="logo-dot">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
                className="nav-link"
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="navbar-actions">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="navbar-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile">
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
                className="mobile-link"
              >
                <span className="mobile-icon">{item.icon}</span>
                <span className="mobile-text">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}