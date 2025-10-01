import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Full-stack e-commerce dengan fitur keranjang belanja, payment gateway, dan admin dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Rizzx-Lab",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "Todo App",
      description: "Aplikasi todo list dengan fitur CRUD, filter, dan local storage untuk menyimpan data.",
      tech: ["React", "CSS3", "Local Storage"],
      github: "https://github.com/Rizzx-Lab",
      demo: "https://demo.com"
    },
    {
      id: 3,
      title: "Weather App",
      description: "Aplikasi cuaca real-time menggunakan API dengan tampilan yang responsif dan menarik.",
      tech: ["JavaScript", "API", "CSS3"],
      github: "https://github.com/Rizzx-Lab",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid scroll-reveal-stagger">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={20} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={20} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}