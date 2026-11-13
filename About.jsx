import { User, Code, Briefcase, MapPin } from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get to Know Me</h2>
          <p className="section-subtitle">
            A passionate developer with a drive to build meaningful solutions
          </p>
        </div>

        <div className="about__grid">
          <div className="about__content">
            <p className="about__text">
              I'm <strong>Kasthuri A</strong>, a Computer Science graduate from
              <strong> Musiri Institute of Technology</strong>, passionate about
              creating impactful digital experiences. With a solid foundation in
              both frontend and backend technologies, I specialize in building
              full-stack web applications using <strong>Java</strong>,{' '}
              <strong>Spring Boot</strong>, <strong>React.js</strong>, and{' '}
              <strong>MySQL</strong>.
            </p>
            <p className="about__text">
              My journey in software development started with a curiosity about
              how the web works, and it has grown into a deep commitment to
              writing clean, maintainable code. I enjoy transforming complex
              problems into intuitive, user-friendly solutions that deliver real
              value.
            </p>
            <p className="about__text">
              I'm actively seeking opportunities to grow as a{' '}
              <strong>Software Developer</strong> where I can contribute to
              innovative projects, collaborate with talented teams, and continue
              honing my craft in a professional environment.
            </p>
          </div>

          <div className="about__cards">
            <div className="about__card glass-card">
              <div className="about__card-icon">
                <User size={22} />
              </div>
              <h3 className="about__card-title">Who I Am</h3>
              <p className="about__card-text">
                An aspiring Software Developer eager to apply academic knowledge
                to real-world challenges.
              </p>
            </div>

            <div className="about__card glass-card">
              <div className="about__card-icon">
                <Code size={22} />
              </div>
              <h3 className="about__card-title">What I Do</h3>
              <p className="about__card-text">
                Build full-stack web apps with clean UIs, robust APIs, and
                efficient database-driven architectures.
              </p>
            </div>

            <div className="about__card glass-card">
              <div className="about__card-icon">
                <Briefcase size={22} />
              </div>
              <h3 className="about__card-title">My Goal</h3>
              <p className="about__card-text">
                Land a role at a forward-thinking company where I can grow,
                contribute, and make an impact.
              </p>
            </div>

            <div className="about__card glass-card">
              <div className="about__card-icon">
                <MapPin size={22} />
              </div>
              <h3 className="about__card-title">Location</h3>
              <p className="about__card-text">
                Tiruchirappalli, Tamil Nadu, India — open to relocation and
                remote opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
