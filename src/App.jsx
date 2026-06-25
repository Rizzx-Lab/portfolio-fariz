import { Suspense, lazy, useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import PillNav from './components/PillNav'
import Dock from './components/Dock'
import ArcRevealHero from './components/ArcRevealHero'
import { useScrollReveal } from './hooks/useScrollReveal'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc'
import './App.css'

// Lazy-load sections below the fold
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Skills = lazy(() => import('./components/Skills'))

const INTRO_GREETINGS = [
  { text: 'Ready?' },
  { text: 'Get.' },
  { text: 'Set.' },
  { text: 'Go!' },
]

function App() {
  useScrollReveal()

  const [activeHref, setActiveHref] = useState('#home')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'skills', 'about', 'projects', 'contact']
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveHref(`#${id}`) },
        { threshold: 0.5 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  return (
    <ArcRevealHero
      greetings={INTRO_GREETINGS}
      greetingHold={1200}
      revealDuration={2000}
      storageKey="fariz-portfolio-intro"
      introClassName="bg-[#0f172a]"
      greetingClassName="text-white"
    >
      <div className="App">
        {/* Scroll Progress Bar */}
        <motion.div
          className="scroll-progress"
          style={{ scaleX }}
        />

        <PillNav
          logo="/images/fz.png"
          logoAlt="Fariz Logo"
          items={[
            { label: 'Home', href: '#home' },
            { label: 'Skills', href: '#skills' },
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' },
          ]}
          activeHref={activeHref}
          ease="power2.easeOut"
          baseColor="#0f172a"
          pillColor="#1e293b"
          pillTextColor="#ffffff"
          hoveredPillTextColor="#0f172a"
          initialLoadAnimation={false}
        />

        <main className="main-content">
          <Hero />
          <Suspense fallback={null}>
            <Skills />
            <About />
            <Projects />
            <Contact />
          </Suspense>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Muhammad Fariz Setiawan
            </p>
            <div className="footer-links">
              <a href="https://github.com/Rizzx-Lab" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/muhammad-fariz-setiawan-a176aa387/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:muhammadfarizsetiawan1604@gmail.com" className="footer-link">Email</a>
            </div>
          </div>
        </footer>

        <div className="mobile-dock">
          <Dock
            items={[
              { icon: <VscHome size={18} />, label: 'Home', onClick: () => { document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); } },
              { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); } },
              { icon: <VscAccount size={18} />, label: 'About', onClick: () => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); } },
              { icon: <VscSettingsGear size={18} />, label: 'Contact', onClick: () => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); } },
            ]}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>
      </div>
    </ArcRevealHero>
  )
}

export default App
