import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <div className="scroll-reveal">
        <About />
      </div>
      
      <div className="scroll-reveal">
        <Projects />
      </div>
      
      <div className="scroll-reveal">
        <Contact />
      </div>
      
      <footer className="footer">
        <p>&copy; 2025 Muhammad Fariz Setiawan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;