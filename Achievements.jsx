import { Trophy, Code2, Zap } from 'lucide-react'
import './Achievements.css'

const achievements = [
  {
    icon: <Code2 size={22} />,
    title: 'Institute Codethon Participant',
    description:
      'Participated in the Institute-level Codethon, competing against peers in algorithmic problem-solving and timed coding challenges.',
  },
  {
    icon: <Zap size={22} />,
    title: 'React Frontend Project',
    description:
      'Successfully developed and delivered a complete React frontend project, demonstrating proficiency in component architecture and modern UI development.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Milestones & Achievements</h2>
          <p className="section-subtitle">
            Key accomplishments from my academic and coding journey
          </p>
        </div>

        <div className="achievements__grid">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="achievement-card glass-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="achievement-card__icon">{item.icon}</div>
              <div className="achievement-card__content">
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__text">{item.description}</p>
              </div>
              <div className="achievement-card__badge">
                <Trophy size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
