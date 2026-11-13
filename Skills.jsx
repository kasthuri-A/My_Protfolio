import { useState } from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90, color: '#e34f26' },
      { name: 'CSS3', level: 85, color: '#1572b6' },
      { name: 'JavaScript', level: 80, color: '#f7df1e' },
      { name: 'React.js', level: 75, color: '#61dafb' },
      { name: 'Bootstrap', level: 80, color: '#7952b3' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 85, color: '#ed8b00' },
      { name: 'Spring Boot', level: 70, color: '#6db33f' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 75, color: '#00758f' },
      { name: 'SQL', level: 80, color: '#336791' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 75, color: '#f05032' },
      { name: 'GitHub', level: 80, color: '#6e7681' },
      { name: 'VS Code', level: 90, color: '#007acc' },
      { name: 'IntelliJ IDEA', level: 75, color: '#fe315d' },
    ],
  },
]

/* Simple SVG skill icons as inline components */
const SkillIcon = ({ name }) => {
  const icons = {
    'HTML5': '🌐',
    'CSS3': '🎨',
    'JavaScript': '⚡',
    'React.js': '⚛️',
    'Bootstrap': '🅱️',
    'Java': '☕',
    'Spring Boot': '🍃',
    'MySQL': '🗃️',
    'SQL': '📊',
    'Git': '🔀',
    'GitHub': '🐙',
    'VS Code': '💻',
    'IntelliJ IDEA': '🧠',
  }
  return <span className="skill-icon-emoji">{icons[name] || '🔧'}</span>
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend')

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring products to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills__tabs">
          {skillCategories.map(cat => (
            <button
              key={cat.title}
              className={`skills__tab ${activeCategory === cat.title ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.title)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Skills */}
        <div className="skills__grid">
          {skillCategories
            .find(c => c.title === activeCategory)
            ?.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skills__card glass-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skills__card-header">
                  <SkillIcon name={skill.name} />
                  <span className="skills__card-name">{skill.name}</span>
                  <span className="skills__card-level">{skill.level}%</span>
                </div>
                <div className="skills__progress-track">
                  <div
                    className="skills__progress-fill"
                    style={{
                      '--progress-width': `${skill.level}%`,
                      '--progress-color': skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
        </div>

        {/* All Skills Overview */}
        <div className="skills__overview">
          <h3 className="skills__overview-title">All Technologies</h3>
          <div className="skills__tags">
            {skillCategories.flatMap(c => c.skills).map(skill => (
              <span key={skill.name} className="skills__tag" style={{ borderColor: skill.color }}>
                <SkillIcon name={skill.name} />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
