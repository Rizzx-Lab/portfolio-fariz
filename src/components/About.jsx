import './About.css';

export default function About() {
  const skills = [
    'HTML & CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Git & GitHub',
    'Responsive Design'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Saya adalah seorang Full Stack Developer yang passionate dalam membangun
              aplikasi web modern dan responsif. Saat ini saya sedang menempuh pendidikan
              di SMK jurusan RPL (Rekayasa Perangkat Lunak).
            </p>
            <p>
              Saya memiliki pengalaman dalam mengembangkan berbagai project menggunakan
              teknologi terkini seperti React, Node.js, dan MongoDB. Saya selalu antusias
              untuk belajar teknologi baru dan mengembangkan skill saya.
            </p>
          </div>

          <div className="skills">
            <h3>Tech Stack</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}