import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

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
        className="progress-bar"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <About />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Projects />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Contact />
      </motion.div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Muhammad Fariz Setiawan. All rights reserved.</p>
        <p className="footer-sub">Built with React & Vite • Deployed on Vercel</p>
      </footer>
    </div>
  )
}

export default App