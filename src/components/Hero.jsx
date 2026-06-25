import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Download, Briefcase } from 'lucide-react'
import '../styles/components/hero.css'

export default function Hero() {
  const socialLinks = [
    {
      icon: <Github size={18} strokeWidth={1.5} />,
      href: 'https://github.com/Rizzx-Lab',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={18} strokeWidth={1.5} />,
      href: 'https://www.linkedin.com/in/muhammad-fariz-setiawan-a176aa387/',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={18} strokeWidth={1.5} />,
      href: 'mailto:muhammadfarizsetiawan1604@gmail.com',
      label: 'Email',
    },
  ]

  const stats = [
    { value: '10+', label: 'Projects' },
    { value: '2+', label: 'Years' },
    { value: 'Full Stack', label: 'Focus' },
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
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="badge-dot" />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="hero-title">
            Muhammad Fariz Setiawan
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="hero-subtitle">
            Software Engineering Student & Full Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p variants={itemVariants} className="hero-description">
            Building modern web applications with a focus on clean code, scalable architecture, and exceptional user experiences.
          </motion.p>

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
              View Projects
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              <Download size={16} strokeWidth={1.5} />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="hero-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
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
