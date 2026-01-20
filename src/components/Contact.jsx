import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import '../styles/components/contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({
    type: '', // 'success' or 'error'
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)
    }, 1500)
  }

  return (
    <section data-section="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="info-card">
              <h3>Let's Connect</h3>
              <p className="info-description">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:fariz@example.com">fariz@example.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Indonesia</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-text">
                  <h4>Availability</h4>
                  <p>Open for freelance & full-time roles</p>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <p>
                <strong>Response Time:</strong> I typically respond within 24 hours.
              </p>
              <p>
                Whether it's a quick question or a detailed project discussion, I'm here to help!
              </p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`status-message ${status.type}`}
                >
                  <div className="status-icon">
                    {status.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                  </div>
                  <div className="status-content">
                    <strong>{status.type === 'success' ? 'Success!' : 'Error!'}</strong>
                    <p>{status.message}</p>
                  </div>
                </motion.div>
              )}

              <div className="form-group">
                <label htmlFor="name">Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject <span className="required">*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Fariz, I'd like to discuss a project..."
                  rows="5"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="animate-spin"
                    >
                      <Send size={20} />
                    </motion.span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}