import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Muhammad Fariz Setiawan</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer | React Enthusiast</p>
        
        <div className="hero-social">
          <a href="https://github.com/Rizzx-Lab" target="_blank" rel="noopener noreferrer" className="social-btn">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-fariz-setiawan-a176aa387/" target="_blank" rel="noopener noreferrer" className="social-btn">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/farizz04_/" target="_blank" rel="noopener noreferrer" className="social-btn">
            <Instagram size={24} />
          </a>
          <a href="mailto:muhammadfarizsetiawan1604@gmail.com" className="social-btn">
            <Mail size={24} />
          </a>
        </div>

        <a href="#projects" className="hero-cta">View My Work</a>
      </div>
    </section>
  );
}