import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Home, User, Briefcase, Mail } from 'lucide-react'
import '../styles/components/navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = sectionId === 'home' ? 0 : 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  return (
    <>
      {/* Minimal Floating Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('home') }}
          >
            <span className="logo-text">Fariz</span>
            <span className="logo-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
                  className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
