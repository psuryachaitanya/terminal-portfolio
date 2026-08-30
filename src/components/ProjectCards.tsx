import { projects } from '../lib/content'

export function ProjectCards() {
  if (projects.length === 0) return null

  return (
    <section className="profile-section">
      <h2 className="profile-section__title">Projects</h2>
      <div className="project-cards">
        {projects.map((item) => (
          <div key={item.slug} className="project-card">
            <h3 className="project-card__title">{item.title}</h3>
            <p className="project-card__summary">{item.summary}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
              >
                View →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
