import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, ChevronDown, Download, Sparkles } from 'lucide-react'
import '../styles/components/hero.css';

export default function Hero() {
  const socialLinks = [
    { 
      icon: <Github size={24} />, 
      href: "https://github.com/Rizzx-Lab", 
      label: "GitHub",
      color: "hover:bg-gray-900"
    },
    { 
      icon: <Linkedin size={24} />, 
      href: "https://www.linkedin.com/in/muhammad-fariz-setiawan-a176aa387/", 
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    { 
      icon: <Instagram size={24} />, 
      href: "https://www.instagram.com/farizz04_/", 
      label: "Instagram",
      color: "hover:bg-pink-600"
    },
    { 
      icon: <Mail size={24} />, 
      href: "mailto:muhammadfarizsetiawan1604@gmail.com", 
      label: "Email",
      color: "hover:bg-red-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="hero">
      {/* Animated Background Elements */}
      <div className="hero-background">
        <motion.div 
          className="bg-blob bg-blob-1"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="bg-blob bg-blob-2"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="gradient-overlay" />
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="hero-badge"
          >
            <Sparkles size={16} />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="hero-title"
          >
            Hi, I'm <span className="text-gradient">Muhammad Fariz Setiawan</span>
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div 
            variants={itemVariants}
            className="hero-subtitle-wrapper"
          >
            <h2 className="hero-subtitle">
              Full Stack Developer & <span className="highlight">Backend Enthusiast</span>
            </h2>
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="hero-description"
          >
            I craft beautiful, functional web experiences using modern technologies. 
            Currently studying <strong>Software Engineering</strong> while building real-world projects.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="hero-social"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link ${link.color}`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
                <span className="tooltip">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="hero-actions"
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ChevronDown size={20} />
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="hero-stats"
          >
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
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        variants={floatVariants}
        animate="animate"
      >
        <ChevronDown size={24} />
        <span>Scroll down</span>
      </motion.div>
    </section>
  )
}