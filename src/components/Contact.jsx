import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/components/contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({
    type: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize scroll reveal for staggered animations
  useScrollReveal({ threshold: 0.1 })

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
        message: 'Message sent successfully! I\'ll get back to you soon.'
      })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)

      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <Mail size={18} strokeWidth={1.5} />,
      label: 'Email',
      value: 'muhammadfarizsetiawan1604@gmail.com',
      href: 'mailto:muhammadfarizsetiawan1604@gmail.com'
    },
    {
      icon: <MapPin size={18} strokeWidth={1.5} />,
      label: 'Location',
      value: 'Indonesia',
      href: null
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header scroll-reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Let's connect.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            className="contact-info scroll-reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item scroll-reveal">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper scroll-reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              {status.type === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="status-message"
                >
                  <CheckCircle size={18} />
                  <span>{status.message}</span>
                </motion.div>
              )}

              <div className="form-group scroll-reveal">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group scroll-reveal">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group scroll-reveal">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={`submit-btn ${status.type === 'success' ? 'success' : ''}`}
                disabled={isSubmitting}
                whileHover={!isSubmitting && status.type !== 'success' ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : status.type === 'success' ? (
                  <>
                    <CheckCircle size={16} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
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
