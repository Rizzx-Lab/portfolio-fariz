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
      demo: "https://weather-dashboard-chi-ashy.vercel.app/",
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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
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
            <button
              onClick={() => setActiveCategory('all')}
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            >
              <span className="filter-label">All</span>
              <span className="filter-count">{getCategoryCount('all')}</span>
            </button>
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  <Icon size={14} strokeWidth={1.5} />
                  <span className="filter-label">{cat.label}</span>
                  <span className="filter-count">{getCategoryCount(cat.id)}</span>
                </button>
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
                >
                  {/* Badge Row */}
                  <div className="card-badges">
                    <span className={`project-type-badge ${project.isRealProject ? 'real' : 'practice'}`}>
                      {project.isRealProject ? 'Real Project' : 'Practice'}
                    </span>
                    <span className={`project-status-badge ${statusBadge.class}`}>
                      {statusBadge.label}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="card-title">{project.title}</h3>

                  {/* Tagline */}
                  <p className="card-tagline">{project.tagline}</p>

                  {/* Tech Stack Pills */}
                  <div className="card-tech">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-pill">{tech}</span>
                    ))}
                  </div>

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
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button primary"
                      >
                        {project.category === 'mobile' ? 'Download APK' : 'Live Demo'}
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button secondary"
                      >
                        View Code
                        <ExternalLink size={14} />
                      </a>
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
