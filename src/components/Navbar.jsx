import { useState, useEffect } from 'react'
import { Sun, Moon, Home, User, Briefcase, Mail } from 'lucide-react'
import '../styles/components/navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

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
      {/* Desktop Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('home') }}
          >
            <img src="/images/fz.png" alt="Fariz Logo" className="logo-img" />
          </a>

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
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="bottom-nav">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
              className={`bottom-nav-item ${activeSection === item.id ? 'active' : ''}`}
              aria-label={item.label}
            >
              <Icon size={20} strokeWidth={1.75} />
              <span className="bottom-nav-label">{item.label}</span>
            </a>
          )
        })}
      </nav>
    </>
  )
}
