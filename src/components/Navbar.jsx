import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    const navbarHeight = 64; // tinggi navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">Fariz</div>
          
          <div className="navbar-menu">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
          </div>

          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="navbar-mobile">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
        </div>
      )}
    </nav>
  );
}