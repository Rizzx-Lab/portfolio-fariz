import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Instagram, ChevronDown, Download, Briefcase } from 'lucide-react'
import '../styles/components/hero.css'

const FULL_NAME = 'Muhammad Fariz Setiawan'

const ROLES = [
  'Full Stack Developer',
  'Backend Enthusiast',
  'React Developer',
  'Laravel Developer',
]

const TYPING_SPEED = 80 // ms per character
const ROLE_INTERVAL = 2500 // ms between role switches

export default function Hero() {
  // Entrance trigger — fires after first paint so CSS transitions run
  const [mounted, setMounted] = useState(false)

  // Typing effect state
  const [charIndex, setCharIndex] = useState(0)
  const isTypingComplete = charIndex >= FULL_NAME.length

  // Role cycling state
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleVisible, setRoleVisible] = useState(true)

  // Entrance: trigger CSS animations on next paint
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setMounted(true)
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  // Typing effect: reveal one character at a time
  useEffect(() => {
    if (charIndex >= FULL_NAME.length) return
    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + 1)
    }, TYPING_SPEED)
    return () => clearTimeout(timer)
  }, [charIndex])

  // Role cycling: fade out → swap → fade in every 2.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      // Fade out
      setRoleVisible(false)
      setTimeout(() => {
        // Swap and fade in
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
        setRoleVisible(true)
      }, 350)
    }, ROLE_INTERVAL)
    return () => clearTimeout(timer)
  }, [roleIndex])

  const socialLinks = [
    {
      icon: <Github size={18} strokeWidth={1.5} />,
      href: 'https://github.com/Rizzx-Lab',
      label: 'GitHub',
      handle: '@Rizzx-Lab',
    },
    {
      icon: <Linkedin size={18} strokeWidth={1.5} />,
      href: 'https://www.linkedin.com/in/muhammad-fariz-setiawan-a176aa387/',
      label: 'LinkedIn',
      handle: 'Muhammad Fariz S',
    },
    {
      icon: <Instagram size={18} strokeWidth={1.5} />,
      href: 'https://instagram.com/farizz04_',
      label: 'Instagram',
      handle: '@farizz04_',
    },
    {
      icon: <Mail size={18} strokeWidth={1.5} />,
      href: 'mailto:muhammadfarizsetiawan1604@gmail.com',
      label: 'Email',
      handle: 'fariz@email.com',
    },
  ]

  const stats = [
    { value: '10+', label: 'Projects' },
    { value: '5+', label: 'Tech Stack' },
    { value: '100%', label: 'Passionate' },
  ]

  // Assemble visible portion of the name
  const displayName = FULL_NAME.slice(0, charIndex)

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className={`hero-grid ${mounted ? 'is-mounted' : ''}`}>

          {/* ===== LEFT COLUMN ===== */}
          <div className="hero-left">

            {/* Badge — delay 0ms */}
            <div className="hero-badge hero-animate" style={{ '--delay': '0ms' }}>
              <span className="badge-dot" />
              <span>Available for opportunities</span>
            </div>

            {/* Label — delay 100ms */}
            <p className="hero-label hero-animate" style={{ '--delay': '100ms' }}>
              SOFTWARE ENGINEERING STUDENT
            </p>

            {/* Name — typed character by character */}
            <h1 className="hero-title hero-animate" style={{ '--delay': '200ms' }}>
              <span className="typing-text">
                {displayName}
                <span className={`typing-cursor ${isTypingComplete ? 'done' : ''}`}>|</span>
              </span>
            </h1>

            {/* Role Pill — appears after typing finishes */}
            <div className={`hero-role-pill hero-animate ${isTypingComplete ? 'is-visible' : ''}`} style={{ '--delay': '0ms' }}>
              <span className="role-prefix">&lt;/&gt;&nbsp;</span>
              <span
                className="role-cycler"
                style={{ opacity: roleVisible ? 1 : 0, transform: roleVisible ? 'translateY(0)' : 'translateY(-6px)' }}
              >
                {ROLES[roleIndex]}
              </span>
            </div>

            {/* Social Grid Label — delay after role */}
            <p className="hero-social-label hero-animate" style={{ '--delay': '2500ms' }}>
              CONNECT WITH ME
            </p>

            {/* Social Grid — staggered per card */}
            <div className="hero-social-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-card hero-animate ${mounted ? 'is-mounted' : ''}`}
                  style={{ '--delay': `${2600 + index * 80}ms` }}
                  aria-label={link.label}
                >
                  <span className="social-card-icon">{link.icon}</span>
                  <span className="social-card-name">{link.label}</span>
                  <span className="social-card-handle">{link.handle}</span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-actions hero-animate" style={{ '--delay': '3000ms' }}>
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Briefcase size={16} strokeWidth={1.5} />
                View My Work
              </a>
              <a href="/resume.pdf" className="btn btn-outline" download>
                <Download size={16} strokeWidth={1.5} />
                Download CV
              </a>
            </div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="hero-right">

            {/* Profile Card — fade in from right, delay 200ms */}
            <div className="profile-card hero-animate hero-slide-right" style={{ '--delay': '200ms' }}>

              {/* Avatar */}
              <div className="profile-avatar">
                <span>MFS</span>
              </div>

              {/* Name & Role */}
              <h2 className="profile-name">Muhammad Fariz Setiawan</h2>
              <p className="profile-role">&lt;/&gt; Full Stack Developer</p>

              {/* Open to Work */}
              <div className="profile-open-badge">
                <span className="open-dot" />
                <span>Open to work</span>
              </div>

              {/* Info Rows */}
              <div className="profile-info">
                <div className="profile-info-row">
                  <span className="profile-info-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <span className="profile-info-key">Location</span>
                  <span className="profile-info-val">Indonesia</span>
                </div>
                <div className="profile-info-row">
                  <span className="profile-info-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </span>
                  <span className="profile-info-key">Focus</span>
                  <span className="profile-info-val">Backend &amp; Web Dev</span>
                </div>
                <div className="profile-info-row">
                  <span className="profile-info-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </span>
                  <span className="profile-info-key">Status</span>
                  <span className="profile-info-val">Active</span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <ChevronDown size={16} strokeWidth={1.5} />
      </div>
    </section>
  )
}
