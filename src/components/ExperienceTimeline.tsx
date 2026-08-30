import { experience } from '../lib/content'

export function ExperienceTimeline() {
  if (experience.length === 0) return null

  return (
    <section className="profile-section">
      <h2 className="profile-section__title">Experience</h2>
      <ul className="experience-timeline">
        {experience.map((item) => (
          <li key={item.slug} className="experience-timeline__item">
            <div className="experience-timeline__dates">
              {item.startDate} – {item.endDate}
            </div>
            <div className="experience-timeline__role">{item.role}</div>
            <div className="experience-timeline__company">
              {item.company} · {item.location}
            </div>
            <p className="experience-timeline__summary">{item.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
