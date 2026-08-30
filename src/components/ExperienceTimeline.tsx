import { experience } from '../lib/content'

function bulletsFromBody(body: string): string[] {
  return body
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => line.slice(2))
}

export function ExperienceTimeline() {
  if (experience.length === 0) return null

  return (
    <section className="profile-section">
      <h2 className="profile-section__title">Experience</h2>
      <ul className="experience-timeline">
        {experience.map((item, index) => (
          <li
            key={item.slug}
            className="experience-timeline__item"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="experience-timeline__dates">
              {item.startDate} – {item.endDate}
            </div>
            <div className="experience-timeline__role">{item.role}</div>
            <div className="experience-timeline__company">
              {item.company} · {item.location}
            </div>
            <ul className="experience-timeline__bullets">
              {bulletsFromBody(item.body).map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            {item.tags.length > 0 && (
              <div className="experience-timeline__tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
