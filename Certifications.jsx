import { Award } from 'lucide-react'
import './Certifications.css'

const certifications = [
  {
    title: 'Programming in C Language',
    issuer: 'Placeholder – Add issuing organization',
    date: 'Placeholder – Add date',
    credentialUrl: '#', // Replace with your credential verification URL
  },
  {
    title: 'Computer on Office Automation',
    issuer: 'Placeholder – Add issuing organization',
    date: 'Placeholder – Add date',
    credentialUrl: '#', // Replace with your credential verification URL
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Credentials & Certifications</h2>
          <p className="section-subtitle">
            Professional certifications that validate my skills
          </p>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="certification-card glass-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="certification-card__icon">
                <Award size={24} />
              </div>
              <div className="certification-card__content">
                <h3 className="certification-card__title">{cert.title}</h3>
                <p className="certification-card__issuer">{cert.issuer}</p>
                <p className="certification-card__date">{cert.date}</p>
              </div>
              <a
                href={cert.credentialUrl}
                className="certification-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
