import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Smartphone, Server, Wrench, ExternalLink, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import '../styles/components/projects.css'

// Project categories configuration
const CATEGORIES = [
  { id: 'web', label: 'Web Apps', icon: Globe },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'fullstack', label: 'Full Stack', icon: Server },
  { id: 'system', label: 'System Tools', icon: Wrench },
]

// Project data
const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "web",
    status: "live",
    isRealProject: false,
    tagline: "A modern developer portfolio showcasing engineering capabilities",
    features: [
      "Responsive design optimized for all devices",
      "Smooth animations and micro-interactions",
      "Integrated contact form with email delivery",
    ],
    techStack: ["React", "Vite", "Framer Motion", "CSS3"],
    links: {
      demo: "https://portfolio-fariz-khaki.vercel.app/",
      code: "https://github.com/Rizzx-Lab/portfolio-fariz"
    }
  },
  {
    id: 2,
    title: "Library Management System",
    category: "fullstack",
    status: "live",
    isRealProject: true,
    tagline: "Production-ready library management system handling real operations",
    features: [
      "Complete CRUD for books, members & transactions",
      "Real-time inventory tracking with search & filter",
      "Automated overdue fee calculation",
      "Print-ready reports and data export",
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "CSS3"],
    links: {
      demo: "https://sistem-perpustakaan-production-2655.up.railway.app/",
      code: "https://github.com/Rizzx-Lab/sistem-perpustakaan"
    }
  },
  {
    id: 3,
    title: "Weather Dashboard",
    category: "web",
    status: "live",
    isRealProject: true,
    tagline: "Data visualization platform processing live weather data",
    features: [
      "Live weather data with 5-day forecast",
      "Interactive Leaflet map with weather overlay",
      "City search with autocomplete & geolocation",
      "Offline capability with cached searches",
    ],
    techStack: ["React", "Vite", "Axios", "Leaflet", "OpenWeather API"],
    links: {
      demo: "https://weather.rizzx.my.id",
      code: "https://github.com/Rizzx-Lab/weather-dashboard"
    }
  },
  {
    id: 5,
    title: "Kartar RT Management System",
    category: "system",
    status: "live",
    isRealProject: true,
    tagline: "Production system for community administration and resident data",
    features: [
      "Comprehensive resident database with document storage",
      "Financial tracking for dues, payments & expenses",
      "Administrative letter issuance with history log",
      "Announcement board with notifications",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel", "MySQL", "Framer Motion"],
    links: {
      demo: "https://armaloeluf.my.id/",
      code: "https://github.com/Rizzx-Lab/kartar-rt"
    }
  },
  {
    id: 4,
    title: "Weather Dashboard Mobile",
    category: "mobile",
    status: "live",
    isRealProject: true,
    tagline: "Native Android app for real-time weather intelligence",
    features: [
      "Automatic GPS-based location detection",
      "5-day forecast with hourly breakdown",
      "City search with offline caching",
      "Optimized for low-end Android devices",
    ],
    techStack: ["Flutter", "Dart", "Provider", "OpenWeather API", "Geolocator"],
    links: {
      demo: "https://github.com/Rizzx-Lab/weather-dashboard-flutter/releases/download/v1.0.0/app-release.apk",
      code: "https://github.com/Rizzx-Lab/weather-dashboard-flutter"
    }
  },
  {
    id: 6,
    title: "SyncTasks",
    category: "fullstack",
    status: "live",
    isRealProject: true,
    tagline: "Collaborative task & group management platform for student teams",
    features: [
      "Group creation with unique join codes and role-based membership",
      "Task assignment and deadline tracking per group",
      "Real-time messaging between group members",
      "Ketua (leader) and anggota (member) permission levels",
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "Vite"],
    links: {
      demo: "https://synctasks.rizzx.my.id",
      code: "https://github.com/Rizzx-Lab/SyncTasks"
    }
  }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  const getCategoryCount = (categoryId) => {
    return categoryId === 'all'
      ? projects.length
      : projects.filter(p => p.category === categoryId).length
  }

  const getStatusBadge = (status) => {
    const configs = {
      live: { label: 'Live', class: 'status-live' },
      private: { label: 'Private', class: 'status-private' },
      demo: { label: 'Demo', class: 'status-demo' }
    }
    return configs[status] || configs.demo
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  }

  const techPillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="projects" data-section="projects" className="projects">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects demonstrating full-stack development, API integration,
            and production-ready systems.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="filter-tabs"
        >
          <div className="filter-buttons">
            <motion.button
              onClick={() => setActiveCategory('all')}
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span className="filter-label">All</span>
              <span className="filter-count">{getCategoryCount('all')}</span>
            </motion.button>
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <Icon size={14} strokeWidth={1.5} />
                  <span className="filter-label">{cat.label}</span>
                  <span className="filter-count">{getCategoryCount(cat.id)}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="projects-grid"
          >
            {filteredProjects.map((project) => {
              const statusBadge = getStatusBadge(project.status)

              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="project-card"
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Badge Row */}
                  <motion.div
                    className="card-badges"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className={`project-type-badge ${project.isRealProject ? 'real' : 'practice'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.isRealProject ? 'Real Project' : 'Practice'}
                    </motion.span>
                    <motion.span
                      className={`project-status-badge ${statusBadge.class}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {statusBadge.label}
                    </motion.span>
                  </motion.div>

                  {/* Project Title */}
                  <h3 className="card-title">{project.title}</h3>

                  {/* Tagline */}
                  <p className="card-tagline">{project.tagline}</p>

                  {/* Tech Stack Pills */}
                  <motion.div
                    className="card-tech"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {project.techStack.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="tech-pill"
                        variants={techPillVariants}
                        custom={idx}
                        whileHover={{ y: -2, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Key Features Checklist */}
                  <ul className="card-features">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <CheckCircle size={13} className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="card-actions">
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button primary"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {project.category === 'mobile' ? 'Download APK' : 'Live Demo'}
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                    {project.links.code && (
                      <motion.a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button secondary"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Code
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="projects-footer"
        >
          <p>
            More projects coming soon. Interested in working together?{' '}
            <a href="#contact" className="footer-link">Let's connect</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}