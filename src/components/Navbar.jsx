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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

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
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      } else {
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
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <a 
            href="#home"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
          >
            <span className="logo-text">Fariz</span>
            <span className="logo-dot">.</span>
          </a>

          <div className="navbar-menu">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.id)
                  }}
                  className="nav-link"
                >
                  <span className="nav-icon">
                    <Icon size={18} />
                  </span>
                  <span className="nav-text">{item.label}</span>
                </a>
              )
            })}
          </div>

          <div className="navbar-actions">
            <button
              onClick={toggleDarkMode}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

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

      {isOpen && (
        <div className="navbar-mobile">
          <div className="mobile-menu">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.id)
                  }}
                  className="mobile-link"
                >
                  <span className="mobile-icon">
                    <Icon size={24} />
                  </span>
                  <span className="mobile-text">{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}