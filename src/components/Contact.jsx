import { useState } from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan terkirim! (Ini demo, belum terintegrasi dengan backend)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Mari Berkolaborasi!</h3>
            <p>
              Saya terbuka untuk peluang kerja sama, project freelance, atau 
              sekadar ngobrol tentang teknologi. Jangan ragu untuk menghubungi saya!
            </p>
            <div className="contact-details">
              <p><strong>Email:</strong> muhammadfarizsetiawan1604@gmail.com</p>
              <p><strong>Location:</strong> Indonesia</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="submit-btn">
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}