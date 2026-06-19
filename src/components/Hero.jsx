import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, ChevronDown, Download, Briefcase } from 'lucide-react'
import '../styles/components/hero.css'

export default function Hero() {
  const socialLinks = [
    {
      icon: <Github size={16} />,
      href: 'https://github.com/Rizzx-Lab',
      label: 'GitHub',
      handle: 'Rizzx-Lab',
      colorClass: 'social-github',
    },
    {
      icon: <Linkedin size={16} />,
      href: 'https://www.linkedin.com/in/muhammad-fariz-setiawan-a176aa387/',
      label: 'LinkedIn',
      handle: 'Muhammad Fariz',
      colorClass: 'social-linkedin',
    },
    {
      icon: <Instagram size={16} />,
      href: 'https://www.instagram.com/farizz04_/',
      label: 'Instagram',
      handle: 'farizz04_',
      colorClass: 'social-instagram',
    },
    {
      icon: <Mail size={16} />,
      href: 'mailto:muhammadfarizsetiawan1604@gmail.com',
      label: 'Email',
      handle: 'muhammadfariz...',
      colorClass: 'social-email',
    },
  ]

  // Variants hanya untuk entry animation — tidak ada infinite di sini
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.45, ease: 'easeOut' },
    },
  }

  const rightVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.5, ease: 'easeOut', delay: 0.3 },
    },
  }

  return (
    <section id="home" className="hero">
      {/* Background — pure CSS animation, tanpa framer-motion */}
      <div className="hero-background">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="gradient-overlay" />
      </div>

      <div className="container">
        <div className="hero-inner">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            className="hero-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="badge-dot" />
              Available for opportunities
            </motion.div>

            {/* Eyebrow */}
            <motion.p variants={itemVariants} className="hero-eyebrow">
              Software Engineering Student
            </motion.p>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="hero-title">
              Hi, I'm
              <span className="text-gradient"> Muhammad Fariz Setiawan</span>
            </motion.h1>

            {/* Role pill */}
            <motion.div variants={itemVariants} className="hero-role-pill">
              <span className="role-icon">{"</>"}</span>
              Full Stack Developer
              <span className="role-sep">·</span>
              Backend Enthusiast
            </motion.div>

            {/* Social Links — pakai <a> biasa, hover effect via CSS */}
            <motion.div variants={itemVariants} className="hero-social-section">
              <p className="social-label">Connect with me</p>
              <div className="hero-social-grid">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-card ${link.colorClass}`}
                    aria-label={link.label}
                  >
                    <div className="social-card-icon">{link.icon}</div>
                    <div className="social-card-text">
                      <span className="social-card-name">{link.label}</span>
                      <span className="social-card-handle">{link.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons — hover via CSS */}
            <motion.div variants={itemVariants} className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <Briefcase size={16} />
                View My Work
              </a>
              <a href="/resume.pdf" className="btn btn-outline" download>
                <Download size={16} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            className="hero-right"
            variants={rightVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Card */}
            <div className="profile-card">
              <div className="profile-avatar">MF</div>
              <div className="profile-info">
                <p className="profile-name">Muhammad Fariz Setiawan</p>
                <p className="profile-role">Full Stack Developer</p>
                <div className="profile-status">
                  <span className="status-dot" />
                  Open to work
                </div>
              </div>
              <div className="profile-meta">
                <div className="meta-row">
                  <span className="meta-key">Location</span>
                  <span className="meta-val">Indonesia</span>
                </div>
                <div className="meta-row">
                  <span className="meta-key">Focus</span>
                  <span className="meta-val">Backend &amp; Web Dev</span>
                </div>
                <div className="meta-row">
                  <span className="meta-key">Status</span>
                  <span className="meta-val meta-active">Active</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Tech Stack</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Passionate</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator — CSS animation */}
      <div className="scroll-indicator">
        <ChevronDown size={22} />
        <span>Scroll down</span>
      </div>
    </section>
  )
}