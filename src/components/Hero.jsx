import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, ChevronDown, Download, Briefcase } from 'lucide-react'
import '../styles/components/hero.css'

export default function Hero() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

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
          <div className="hero-left">
            {/* Badge */}
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="badge-dot" />
              <span>Available for opportunities</span>
            </motion.div>

            {/* Label */}
            <motion.p variants={itemVariants} className="hero-label">
              SOFTWARE ENGINEERING STUDENT
            </motion.p>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="hero-title">
              Muhammad Fariz Setiawan
            </motion.h1>

            {/* Role Pill */}
            <motion.div variants={itemVariants} className="hero-role-pill">
              &lt;/&gt; Full Stack Developer &middot; Backend Enthusiast
            </motion.div>

            {/* Social Grid Label */}
            <motion.p variants={itemVariants} className="hero-social-label">
              CONNECT WITH ME
            </motion.p>

            {/* Social Grid */}
            <motion.div variants={itemVariants} className="hero-social-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  aria-label={link.label}
                >
                  <span className="social-card-icon">{link.icon}</span>
                  <span className="social-card-name">{link.label}</span>
                  <span className="social-card-handle">{link.handle}</span>
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="hero-actions">
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
            </motion.div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="hero-right">
            {/* Profile Card */}
            <motion.div variants={itemVariants} className="profile-card">
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
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span>Scroll</span>
        <ChevronDown size={16} strokeWidth={1.5} />
      </motion.div>
    </section>
  )
}
