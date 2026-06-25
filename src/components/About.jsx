import { motion } from 'framer-motion'
import { Code2, Database, Globe, Server, GitBranch, GraduationCap, Award, MapPin, Calendar } from 'lucide-react'
import '../styles/components/about.css'

export default function About() {
  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Laravel Blade'] },
    { name: 'Backend', items: ['Laravel', 'PHP', 'Node.js', 'Express', 'REST API'] },
    { name: 'Database', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
    { name: 'Tools', items: ['Git', 'GitHub', 'Framer Motion', 'Figma', 'Docker', 'Linux', 'Nginx'] },
  ]

  const education = [
    {
      period: '2024 - Present',
      title: 'Software Engineering',
      institution: 'SMK RPL',
      description: 'Specializing in web development and software architecture',
    },
    {
      period: '2025',
      title: 'Full Stack Development',
      institution: 'Self-taught & Online Courses',
      description: 'Continuous learning through bootcamps and certifications',
    },
  ]

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
    <section id="about" className="about">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            A passionate developer focused on building clean, efficient, and user-friendly applications.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Introduction */}
          <motion.div
            className="about-intro"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="intro-text">
              <p>
                I'm a software engineering student and full stack developer based in Indonesia.
                I specialize in building modern web applications with a focus on clean architecture and scalable solutions.
              </p>
              <p>
                Currently pursuing my education while actively working on real-world projects.
                I'm passionate about learning new technologies and applying them to solve practical problems.
              </p>
            </motion.div>

            {/* Quick Info */}
            <motion.div variants={itemVariants} className="quick-info">
              <div className="info-item">
                <MapPin size={16} />
                <span>Indonesia</span>
              </div>
              <div className="info-item">
                <Code2 size={16} />
                <span>Full Stack Developer</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="skills-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="subsection-title">Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h4 className="skill-category">{skill.name}</h4>
                  <div className="skill-items">
                    {skill.items.map((item, idx) => (
                      <span key={idx} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="education-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="subsection-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <span className="timeline-period">{edu.period}</span>
                    <h4 className="timeline-title">{edu.title}</h4>
                    <p className="timeline-institution">{edu.institution}</p>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
