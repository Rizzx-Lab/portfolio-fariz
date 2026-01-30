import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Filter, Sparkles, Clock, Download } from 'lucide-react'
import { useState } from 'react'
import '../styles/components/projects.css'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "Modern portfolio website built with React, Framer Motion, and Vite. Features smooth animations, responsive design, and contact form integration.",
      tech: ["React", "Vite", "Framer Motion", "CSS3"],
      github: "https://github.com/Rizzx-Lab/portfolio-fariz",
      demo: "https://portfolio-fariz-khaki.vercel.app/",
      category: "web",
      featured: true
    },
    {
      id: 2,
      title: "Library Management System",
      description: "Full Stack Web-based library management system built with PHP and MySQL, implementing CRUD operations, relational database design, borrowing and return modules, and responsive front-end using HTML, CSS, and JavaScript.",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      github: "https://github.com/Rizzx-Lab/sistem-perpustakaan",
      demo: "https://sistem-perpustakaan-production-2655.up.railway.app/",
      category: "fullstack",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with real-time data from OpenWeather API. Features 5-day forecast, current weather conditions, interactive Leaflet map visualization, city search functionality, and responsive design with modern UI components.",
      tech: ["React", "Vite", "Axios", "Leaflet", "OpenWeather API", "CSS3"],
      github: "https://github.com/Rizzx-Lab/weather-dashboard",
      demo: "https://weather-dashboard-chi-ashy.vercel.app/",
      category: "web",
      featured: true
    },
    {
      id: 4,
      title: "Weather Dashboard Mobile",
      description: "Android weather application built with Flutter and OpenWeather API. Features real-time weather data, 5-day forecast, city search, automatic location detection, and modern Material Design UI with smooth animations.",
      tech: ["Flutter", "Dart", "Provider", "OpenWeather API", "Geolocator"],
      github: "https://github.com/Rizzx-Lab/weather-dashboard-flutter",
      demo: "https://github.com/Rizzx-Lab/weather-dashboard-flutter/releases/download/v1.0.0/app-release.apk",
      category: "mobile",
      featured: true,
      isMobile: true
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  }

  return (
    <section data-section="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Here are some of my recent works. Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="featured-section"
          >
            <div className="featured-header">
              <Sparkles size={24} />
              <h3>Featured Projects</h3>
            </div>
            <div className="featured-projects">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                  className="project-card featured"
                >
                  <div className="project-badge">
                    <Sparkles size={16} />
                    Featured
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tech">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} /> 
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {project.isMobile ? <Download size={18} /> : <ExternalLink size={18} />}
                        <span>{project.isMobile ? 'Download APK' : 'Live Demo'}</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="filter-tabs"
        >
          <div className="filter-header">
            <Filter size={20} />
            <span>Filter by:</span>
          </div>
          <div className="filter-buttons">
            {filters
              .filter(filterItem => filterItem.id === 'all' || filterItem.count > 0)
              .map((filterItem) => (
                <motion.button
                  key={filterItem.id}
                  onClick={() => setFilter(filterItem.id)}
                  className={`filter-btn ${filter === filterItem.id ? 'active' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filterItem.label}
                  <span className="filter-count">({filterItem.count})</span>
                  {filter === filterItem.id && (
                    <motion.div
                      layoutId="filter-indicator"
                      className="filter-indicator"
                    />
                  )}
                </motion.button>
              ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="projects-grid"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card"
                whileHover={{ y: -8 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <Code size={24} />
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={18} /> 
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ x: 5 }}
                  >
                    {project.isMobile ? <Download size={18} /> : <Eye size={18} />}
                    <span>{project.isMobile ? 'Download' : 'Preview'}</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Coming Soon State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="empty-state"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                transition: { 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }
              }}
            >
              <Clock size={48} />
            </motion.div>
            <h3>Coming Soon</h3>
            <p>More exciting projects are on the way!</p>
            <motion.button
              onClick={() => setFilter('all')}
              className="back-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}