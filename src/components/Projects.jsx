import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Smartphone, Server, Wrench, ExternalLink, Lock, FileText, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import '../styles/components/projects.css'

// Project categories configuration
const CATEGORIES = [
  { id: 'web', label: 'Web Apps', icon: Globe },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'fullstack', label: 'Full Stack', icon: Server },
  { id: 'system', label: 'System Tools', icon: Wrench },
]

// Project data with professional structure
const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "web",
    status: "live", // live, private, demo
    isRealProject: false, // Real-world vs practice/demo
    tagline: "A modern developer portfolio showcasing engineering capabilities",
    problem: "Needed a professional online presence that demonstrates full-stack development skills and attracts potential employers or clients.",
    solution: "Built a performant, accessible portfolio with smooth animations and contact integration — serving as both a showcase and a functional product.",
    features: [
      "Responsive design optimized for all devices and screen sizes",
      "Smooth page transitions and micro-interactions using Framer Motion",
      "Integrated contact form with email delivery system",
      "Accessible navigation with keyboard support and ARIA labels",
      "SEO-optimized with semantic HTML and meta tags"
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
    problem: "Physical libraries struggle with manual tracking of books, members, and borrowing records — leading to lost books, overdue fees, and inefficient workflows.",
    solution: "Developed a complete CRUD-based system with real-time inventory tracking, automated due date reminders, and comprehensive reporting dashboard.",
    features: [
      "Complete CRUD operations for books, members, and transactions",
      "Real-time book availability tracking with search and filtering",
      "Automated overdue fee calculation based on configurable rules",
      "Member borrowing history and reading analytics",
      "Print-ready reports and data export functionality"
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
    problem: "Generic weather apps lack visual context — users need to see weather patterns geographically and understand forecasts beyond raw numbers.",
    solution: "Created an interactive dashboard combining real-time API data with mapping visualization, providing intuitive weather insights at a glance.",
    features: [
      "Live weather data from OpenWeather API with 5-day forecast",
      "Interactive Leaflet map with weather overlay visualization",
      "City search with autocomplete and geolocation support",
      "Responsive charts displaying temperature trends and precipitation",
      "Offline capability with cached data for recent searches"
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
    tagline: "Production system for community administration and resident data management",
    problem: "RT/RW communities in Indonesia rely on paper-based records and spreadsheets for managing resident data, finances, and administration — leading to inefficient workflows, data duplication, and poor accessibility for residents.",
    solution: "Built a centralized web platform that digitizes community management with organized resident databases, automated financial tracking, and streamlined administrative processes accessible to both administrators and residents.",
    features: [
      "Comprehensive resident database with profile management and document storage",
      "Financial module for tracking community dues, payments, and expenditure records",
      "Administrative letter issuance system with templates and history logging",
      "Announcement board for community updates and notifications",
      "Search, filter, and export capabilities across all data categories"
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
    problem: "Users need quick weather checks on the go without relying on browser access or heavy apps that drain battery.",
    solution: "Built a lightweight Flutter app with native performance, automatic location detection, and optimized battery usage for daily weather needs.",
    features: [
      "Automatic GPS-based location detection for local weather",
      "5-day forecast with hourly breakdown for planning ahead",
      "City search with offline caching of recent locations",
      "Optimized for low-end Android devices (API 21+)",
      "Minimal APK size under 15MB with no bloat"
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
  const [expandedProject, setExpandedProject] = useState(null)

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  const getCategoryCount = (categoryId) => {
    return categoryId === 'all'
      ? projects.length
      : projects.filter(p => p.category === categoryId).length
  }

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  const getStatusBadge = (status) => {
    const configs = {
      live: { label: 'Live', class: 'status-live' },
      private: { label: 'Private', class: 'status-private' },
      demo: { label: 'Demo', class: 'status-demo' }
    }
    return configs[status] || configs.demo
  }

  const getProjectTypeBadge = (isReal) => {
    return isReal ? 'Real Project' : 'Practice'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  return (
    <section data-section="projects" className="projects">
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
            and production-ready systems. Each project solves real problems with scalable architecture.
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
              <span className="filter-label">All Projects</span>
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
                  <Icon size={16} strokeWidth={1.5} />
                  <span className="filter-label">{cat.label}</span>
                  <span className="filter-count">{getCategoryCount(cat.id)}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Projects List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="projects-list"
          >
            {filteredProjects.map((project) => {
              const statusBadge = getStatusBadge(project.status)
              const isExpanded = expandedProject === project.id

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`project-card ${isExpanded ? 'expanded' : ''}`}
                  layout
                >
                  {/* Card Header */}
                  <div className="project-card-header" onClick={() => toggleExpand(project.id)}>
                    <div className="project-meta-row">
                      <span className={`project-type-badge ${project.isRealProject ? 'real' : 'practice'}`}>
                        {getProjectTypeBadge(project.isRealProject)}
                      </span>
                      <span className={`project-status-badge ${statusBadge.class}`}>
                        {statusBadge.label}
                      </span>
                    </div>

                    <div className="project-main-info">
                      <div className="project-title-section">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-tagline">{project.tagline}</p>
                      </div>
                      <motion.div
                        className="expand-indicator"
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight size={20} />
                      </motion.div>
                    </div>

                    {/* Quick Tech Stack Preview */}
                    <div className="project-tech-preview">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="tech-badge more">+{project.techStack.length - 4}</span>
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="project-card-content"
                      >
                        <div className="project-details">
                          {/* Problem & Solution */}
                          <div className="project-context">
                            <div className="context-block">
                              <h4 className="context-label">Problem</h4>
                              <p className="context-text">{project.problem}</p>
                            </div>
                            <div className="context-block">
                              <h4 className="context-label">Solution</h4>
                              <p className="context-text">{project.solution}</p>
                            </div>
                          </div>

                          {/* Key Features */}
                          <div className="features-section">
                            <h4 className="features-title">Key Features</h4>
                            <ul className="features-list">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="feature-item">
                                  <span className="feature-bullet"></span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack */}
                          <div className="tech-stack-section">
                            <h4 className="tech-stack-title">Tech Stack</h4>
                            <div className="tech-stack-list">
                              {project.techStack.map((tech, idx) => (
                                <span key={idx} className="tech-badge-full">{tech}</span>
                              ))}
                            </div>
                          </div>

                          {/* CTA Buttons */}
                          <div className="project-actions">
                            {project.links.demo && (
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button primary"
                              >
                                {project.category === 'mobile' ? (
                                  <>Download APK <ExternalLink size={16} /></>
                                ) : (
                                  <>Live Demo <ExternalLink size={16} /></>
                                )}
                              </a>
                            )}
                            {project.links.code && (
                              <a
                                href={project.links.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button secondary"
                              >
                                <ExternalLink size={16} />
                                View Code
                              </a>
                            )}
                            {project.links.caseStudy && (
                              <a
                                href={project.links.caseStudy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button tertiary"
                              >
                                <FileText size={16} />
                                Case Study
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
