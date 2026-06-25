import { Suspense, lazy } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

// Lazy-load sections below the fold
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  useScrollReveal()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="App">
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <Navbar />
      <main className="main-content">
        <Hero />
        <Suspense fallback={null}>
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
    </div>
  )
}

export default App
