import { Heart, Code2, Mail, ArrowUp } from 'lucide-react'
import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={e => handleClick(e, '#home')}>
              <Code2 size={24} />
              <span>Kasthuri<span className="gradient-text">.dev</span></span>
            </a>
            <p className="footer__tagline">
              Crafting modern web applications with passion, precision, and a
              relentless focus on user experience.
            </p>
            <div className="footer__socials">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer__social"
              >
             <span>GH</span>
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer__social"
              >
              <span>in</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                aria-label="Email"
                className="footer__social"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={e => handleClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__section">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__links">
              <li>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </li>
              <li>Tiruchirappalli, Tamil Nadu</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Kasthuri A. Built with{' '}
            <Heart size={14} className="footer__heart" /> using React &amp; Vite.
          </p>

          <button
            className="footer__scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
