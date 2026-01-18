import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Filter, Sparkles } from 'lucide-react'
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
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce with shopping cart, payment gateway integration, and admin dashboard for product management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com/Rizzx-Lab",
      demo: "https://demo.com",
      category: "fullstack",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productivity application with drag & drop interface, real-time updates, and local storage for offline access.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
      github: "https://github.com/Rizzx-Lab",
      demo: "https://demo.com",
      category: "web",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application with location detection, forecast charts, and multiple theme options.",
      tech: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
      github: "https://github.com/Rizzx-Lab",
      demo: "https://demo.com",
      category: "web",
      featured: false
    },
    {
      id: 5,
      title: "REST API Service",
      description: "Backend API with authentication, rate limiting, and database integration. Includes comprehensive documentation.",
      tech: ["Node.js", "Express", "JWT", "MongoDB", "Swagger"],
      github: "https://github.com/Rizzx-Lab",
      demo: "https://demo.com",
      category: "backend",
      featured: true
    },
    {
      id: 6,
      title: "UI Component Library",
      description: "Custom React component library with Storybook documentation, TypeScript support, and theme customization.",
      tech: ["React", "TypeScript", "Storybook", "Styled Components"],
      github: "https://github.com/Rizzx-Lab",
      demo: "https://demo.com",
      category: "web",
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
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
    <section id="projects" className="projects">
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
                        <ExternalLink size={18} /> 
                        <span>Live Demo</span>
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
            {filters.map((filterItem) => (
              <motion.button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`filter-btn ${filter === filterItem.id ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterItem.label}
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
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
                  <Eye size={18} /> 
                  <span>Preview</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="empty-state"
          >
            <Code size={48} />
            <h3>No projects found</h3>
            <p>Try selecting a different filter</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}