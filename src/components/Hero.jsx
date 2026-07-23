import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Github, Linkedin, Mail, Instagram, ChevronDown, Download, Briefcase } from 'lucide-react'
import TiltedCard from './TiltedCard'
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

// Animation variants for motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

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
        <motion.div
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* ===== LEFT COLUMN ===== */}
          <motion.div className="hero-left" variants={containerVariants}>

            {/* Badge — delay 0ms */}
            <motion.div
              className="hero-badge"
              variants={itemVariants}
            >
              <span className="badge-dot" />
              <span>Available for opportunities</span>
            </motion.div>

            {/* Label — delay 100ms */}
            <motion.p
              className="hero-label"
              variants={itemVariants}
            >
              SOFTWARE ENGINEERING STUDENT
            </motion.p>

            {/* Name — typed character by character */}
            <motion.h1
              className="hero-title"
              variants={itemVariants}
            >
              <span className="typing-text">
                {displayName}
                <span className={`typing-cursor ${isTypingComplete ? 'done' : ''}`}>|</span>
              </span>
            </motion.h1>

            {/* Role Pill — appears after typing finishes */}
            <motion.div
              className={`hero-role-pill ${isTypingComplete ? 'is-visible' : ''}`}
              variants={itemVariants}
            >
              <span className="role-prefix">&lt;/&gt;&nbsp;</span>
              <span
                className="role-cycler"
                style={{ opacity: roleVisible ? 1 : 0, transform: roleVisible ? 'translateY(0)' : 'translateY(-6px)' }}
              >
                {ROLES[roleIndex]}
              </span>
            </motion.div>

            {/* Social Grid Label — delay after role */}
            <motion.p
              className="hero-social-label"
              variants={itemVariants}
            >
              CONNECT WITH ME
            </motion.p>

            {/* Social Grid — staggered per card */}
            <motion.div className="hero-social-grid" variants={containerVariants}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  variants={itemVariants}
                  custom={index}
                  aria-label={link.label}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="social-card-icon">{link.icon}</span>
                  <span className="social-card-name">{link.label}</span>
                  <span className="social-card-handle">{link.handle}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="hero-actions"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Briefcase size={16} strokeWidth={1.5} />
                View My Work
              </motion.a>
              <motion.a
                href="/resume.pdf"
                className="btn btn-outline"
                download
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} strokeWidth={1.5} />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT COLUMN ===== */}
          <motion.div className="hero-right" variants={containerVariants}>

            {/* Profile Card — fade in from right */}
            <motion.div
              className="profile-card"
              variants={slideInRight}
            >

              {/* Avatar */}
              <div className="profile-avatar">
                <TiltedCard
                  imageSrc="/images/profile.png"
                  altText="Muhammad Fariz Setiawan"
                  captionText="Muhammad Fariz Setiawan"
                  containerHeight="160px"
                  containerWidth="160px"
                  imageHeight="160px"
                  imageWidth="160px"
                  rotateAmplitude={10}
                  scaleOnHover={1.08}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>

              {/* Name & Role */}
              <h2 className="profile-name">Muhammad Fariz Setiawan</h2>
              <p className="profile-role">&lt;/&gt; Full Stack Developer</p>

              {/* Open to Work */}
              <motion.div
                className="profile-open-badge"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="open-dot" />
                <span>Open to work</span>
              </motion.div>

              {/* Info Rows */}
              <div className="profile-info">
                <motion.div
                  className="profile-info-row"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="profile-info-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <span className="profile-info-key">Location</span>
                  <span className="profile-info-val">Indonesia</span>
                </motion.div>
                <motion.div
                  className="profile-info-row"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="profile-info-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </span>
                  <span className="profile-info-key">Focus</span>
                  <span className="profile-info-val">Backend &amp; Web Dev</span>
                </motion.div>
                <motion.div
                  className="profile-info-row"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="profile-info-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </span>
                  <span className="profile-info-key">Status</span>
                  <span className="profile-info-val">Active</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="hero-stats"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -4, borderColor: 'var(--primary)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span>Scroll</span>
        <ChevronDown size={16} strokeWidth={1.5} />
      </motion.div>
    </section>
  )
}
