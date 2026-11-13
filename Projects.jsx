import { useState } from 'react'
import { ExternalLink, ChevronRight } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'SkillSwap – Future Connect',
    description:
      'A skill exchange platform where users can teach and learn skills without money. Connect with peers, list your expertise, discover new skills, and grow together in a collaborative learning community.',
    longDescription:
      'SkillSwap enables a barter-style skill marketplace. Users create profiles, list what they can teach, browse skills they want to learn, and connect with matched partners. The platform features real-time matching, user reviews, and session scheduling.',
    technologies: ['React.js', 'Java', 'Spring Boot', 'MySQL'],
    category: 'Full Stack',
    image: null,
    liveUrl: '#', // Replace with your live project URL
    githubUrl: '#', // Replace with your GitHub repository URL
    highlights: [
      'User authentication and profile management',
      'Skill listing and search functionality',
      'Peer-to-peer skill matching algorithm',
      'RESTful API with Spring Boot backend',
    ],
  },
  {
    id: 2,
    title: 'Blood Donation Management System',
    description:
      'A web application designed to manage blood donor information and blood donation details. Streamlines the process of donor registration, blood inventory tracking, and connecting donors with those in need.',
    longDescription:
      'This system simplifies blood donation management by allowing administrators to register donors, track blood inventory, and manage donation records. It provides a clean interface for searching available blood types and connecting donors with recipients.',
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    image: null,
    liveUrl: '#', // Replace with your live project URL
    githubUrl: '#', // Replace with your GitHub repository URL
    highlights: [
      'Donor registration and management',
      'Blood inventory tracking dashboard',
      'Search and filter by blood type',
      'Responsive design for all devices',
    ],
  },
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card glass-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image / Placeholder */}
              <div className="project-card__image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-card__placeholder">
                    <span className="project-card__placeholder-text">
                      {project.title.split(' ')[0]}
                    </span>
                    <span className="project-card__placeholder-sub">Screenshot</span>
                  </div>
                )}
                <div className="project-card__category">{project.category}</div>
              </div>

              {/* Content */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {expandedId === project.id
                    ? project.longDescription
                    : project.description}
                </p>

                {expandedId === project.id && (
                  <ul className="project-card__highlights">
                    {project.highlights.map((item, i) => (
                      <li key={i}>
                        <ChevronRight size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  className="project-card__toggle"
                  onClick={() =>
                    setExpandedId(expandedId === project.id ? null : project.id)
                  }
                >
                  {expandedId === project.id ? 'Show Less' : 'Read More'}
                </button>

                {/* Tech tags */}
                <div className="project-card__tags">
                  {project.technologies.map(tech => (
                    <span key={tech} className="project-card__tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-card__actions">
                  <a
                    href={project.liveUrl}
                    className="btn btn-primary btn--sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="btn btn-outline btn--sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <span>GH</span>
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
