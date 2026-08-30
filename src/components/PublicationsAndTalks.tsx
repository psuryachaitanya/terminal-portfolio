import { publications, talks } from '../lib/content'

export function PublicationsAndTalks() {
  if (publications.length === 0 && talks.length === 0) return null

  return (
    <section className="profile-section">
      <h2 className="profile-section__title">Publications &amp; Talks</h2>
      {publications.length > 0 && (
        <ul className="highlight-list">
          {publications.map((item) => (
            <li key={item.slug} className="highlight-list__item">
              <span className="highlight-list__label">Paper</span>
              <div className="highlight-list__body">
                <div className="highlight-list__title">{item.title}</div>
                <div className="highlight-list__venue">{item.venue}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {talks.length > 0 && (
        <ul className="highlight-list">
          {talks.map((item) => (
            <li key={item.slug} className="highlight-list__item">
              <span className="highlight-list__label">Talk</span>
              <div className="highlight-list__body">
                <div className="highlight-list__title">{item.title}</div>
                <div className="highlight-list__venue">{item.venue}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
