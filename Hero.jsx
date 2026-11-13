import { useEffect, useState } from 'react'
import { ArrowDown, ExternalLink, Download, Mail } from 'lucide-react'
import './Hero.css'

const roles = [
  'Java Full Stack Developer',
  'React.js Developer',
  'Spring Boot Developer',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex(prev => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section id="home" className="hero section">
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero__title">
            Hi, I'm{' '}
            <span className="gradient-text">Kasthuri</span>
          </h1>

          <div className="hero__role">
            <span className="hero__role-text">{displayed}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__description">
            I build modern web applications by combining creative frontend
            experiences with powerful backend solutions. Passionate about
            clean code, intuitive design and scalable architectures.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="btn btn-primary">
              <ExternalLink size={18} />
              View My Projects
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-outline"
              download
            >
              <Download size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">2+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">8+</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">2026</span>
              <span className="hero__stat-label">Graduating</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar">
              {/* Replace src with your actual profile photo */}
              <div className="hero__avatar-placeholder">
                <span>KA</span>
              </div>
            </div>
            <div className="hero__avatar-glow" />
          </div>

          <div className="hero__floating-card hero__floating-card--1">
            <span>☕</span> Java
          </div>
          <div className="hero__floating-card hero__floating-card--2">
            <span>⚛️</span> React
          </div>
          <div className="hero__floating-card hero__floating-card--3">
            <span>🍃</span> Spring Boot
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-indicator" aria-label="Scroll down">
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
