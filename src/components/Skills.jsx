import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiFigma,
  SiVite,
  SiNginx,
} from 'react-icons/si'
import LogoLoop from './LogoLoop'
import '../styles/components/skills.css'

const techLogos = [
  { node: <SiReact size={40} />, title: 'React' },
  { node: <SiNextdotjs size={40} />, title: 'Next.js' },
  { node: <SiTypescript size={40} />, title: 'TypeScript' },
  { node: <SiTailwindcss size={40} />, title: 'Tailwind CSS' },
  { node: <SiLaravel size={40} />, title: 'Laravel' },
  { node: <SiPhp size={40} />, title: 'PHP' },
  { node: <SiMysql size={40} />, title: 'MySQL' },
  { node: <SiMongodb size={40} />, title: 'MongoDB' },
  { node: <SiNodedotjs size={40} />, title: 'Node.js' },
  { node: <SiDocker size={40} />, title: 'Docker' },
  { node: <SiGit size={40} />, title: 'Git' },
  { node: <SiFigma size={40} />, title: 'Figma' },
  { node: <SiVite size={40} />, title: 'Vite' },
  { node: <SiNginx size={40} />, title: 'Nginx' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
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
            Skills & <span className="text-gradient">Technology</span>
          </h2>
          <p className="section-subtitle">
            Technologies I work with to build modern, scalable applications.
          </p>
        </motion.div>

        {/* LogoLoop Marquee */}
        <motion.div
          className="skills-logoloop-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={20}
              direction="left"
              logoHeight={64}
              gap={64}
              scaleOnHover
              fadeOut
              fadeOutColor="#0a0f1a"
              ariaLabel="Tech stack"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
