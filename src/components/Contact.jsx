import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      console.log('✅ Email sent successfully:', result);
      
      setStatus({
        type: 'success',
        message: 'Pesan berhasil terkirim! Saya akan segera membalas.'
      });

      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('❌ Failed to send email:', error);
      
      setStatus({
        type: 'error',
        message: 'Gagal mengirim pesan. Silakan coba lagi atau hubungi via email langsung.'
      });
    } finally {
      setIsLoading(false);
    }
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
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.type === 'success' ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              <Send size={20} /> 
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}