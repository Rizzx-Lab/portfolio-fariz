import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Terminal, 
  GitBranch,
  Cpu,
  Palette,
  Zap,
  Rocket,
  Calendar,
  Award,
  BookOpen
} from 'lucide-react'
import '../styles/components/about.css';

export default function About() {
  const skills = [
    { name: 'HTML & CSS', icon: <Palette size={20} />, level: 95, color: '#667eea' },
    { name: 'JavaScript', icon: <Code2 size={20} />, level: 90, color: '#764ba2' },
    { name: 'React', icon: <Cpu size={20} />, level: 88, color: '#f093fb' },
    { name: 'Node.js', icon: <Server size={20} />, level: 85, color: '#f5576c' },
    { name: 'Express', icon: <Terminal size={20} />, level: 82, color: '#4fd1c5' },
    { name: 'MongoDB', icon: <Database size={20} />, level: 80, color: '#38b2ac' },
    { name: 'Git & GitHub', icon: <GitBranch size={20} />, level: 92, color: '#ed8936' },
    { name: 'Responsive Design', icon: <Globe size={20} />, level: 94, color: '#9f7aea' }
  ]

  const education = [
    {
      year: '2022 - Present',
      title: 'Software Engineering Student',
      institution: 'SMK RPL',
      description: 'Specializing in web development and software architecture',
      icon: <BookOpen size={20} />
    },
    {
      year: '2023',
      title: 'Full Stack Bootcamp',
      institution: 'Online Certification',
      description: 'Intensive training in modern web technologies',
      icon: <Award size={20} />
    }
  ]

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

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="about-content">
          {/* Left Column - Intro & Education */}
          <motion.div 
            className="about-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={itemVariants}
              className="about-card intro-card"
            >
              <div className="card-header">
                <Zap size={24} />
                <h3>Introduction</h3>
              </div>
              <div className="card-body">
                <p className="about-text">
                  I am a passionate <strong>Full Stack Developer</strong> with expertise in building modern web applications. Currently pursuing my studies in <strong>Software Engineering</strong> at SMK RPL while actively working on real-world projects.
                </p>
                <p className="about-text">
                  My journey in web development started with curiosity and has grown into a deep passion for creating beautiful, functional, and user-friendly digital experiences.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="about-card education-card"
            >
              <div className="card-header">
                <Calendar size={24} />
                <h3>Education & Experience</h3>
              </div>
              <div className="timeline">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-icon">
                      {edu.icon}
                    </div>
                    <div className="timeline-content">
                      <span className="timeline-year">{edu.year}</span>
                      <h4>{edu.title}</h4>
                      <p className="institution">{edu.institution}</p>
                      <p className="description">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="skills-card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-header">
                <Rocket size={24} />
                <h3>Tech Stack & Skills</h3>
              </div>
              
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="skill-item"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{ background: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="skills-summary">
                <p>
                  Continuously learning and adapting to new technologies. 
                  Currently exploring <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Cloud Deployment</strong>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}