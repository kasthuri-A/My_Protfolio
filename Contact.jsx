import { useState } from 'react'
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')

    // Simulate form submission — replace with your backend or form service
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a project in mind or want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info Side */}
          <div className="contact__info">
            <h3 className="contact__info-title">Get in Touch</h3>
            <p className="contact__info-text">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology. Feel free to reach out!
            </p>

            <div className="contact__details">
              <a href="mailto:your.email@example.com" className="contact__detail glass-card">
                <div className="contact__detail-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact__detail-label">Email</p>
                  <p className="contact__detail-value">your.email@example.com</p>
                </div>
              </a>

              <div className="contact__detail glass-card">
                <div className="contact__detail-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="contact__detail-label">Location</p>
                  <p className="contact__detail-value">Tiruchirappalli, Tamil Nadu</p>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href="https://github.com/your-username"
                className="contact__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
             <span>GH</span>
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                className="contact__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span>in</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <form className="contact__form glass-card" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Full Name</label>
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
              <div className="contact__field">
                <label htmlFor="email">Email Address</label>
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
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Collaboration"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="spin" />
                  Sending...
                </>
              ) : status === 'sent' ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
