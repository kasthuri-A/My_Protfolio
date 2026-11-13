import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            My educational journey in Computer Science
          </p>
        </div>

        <div className="education__timeline">
          <div className="education__card glass-card">
            <div className="education__icon">
              <GraduationCap size={28} />
            </div>

            <div className="education__content">
              <h3 className="education__degree">B.Sc Computer Science</h3>
              <p className="education__institution">Musiri Institute of Technology</p>

              <div className="education__meta">
                <span className="education__meta-item">
                  <Calendar size={16} />
                  2023 – 2026
                </span>
                <span className="education__meta-item">
                  <MapPin size={16} />
                  Tamil Nadu, India
                </span>
              </div>

              <div className="education__details">
                <p>
                  Pursuing a comprehensive undergraduate program covering core
                  Computer Science fundamentals including Data Structures,
                  Algorithms, Object-Oriented Programming, Database Management
                  Systems, and Web Technologies.
                </p>
              </div>

              <div className="education__tags">
                <span className="education__tag">Data Structures</span>
                <span className="education__tag">Algorithms</span>
                <span className="education__tag">OOP</span>
                <span className="education__tag">DBMS</span>
                <span className="education__tag">Web Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
