import { profile } from '../lib/content'

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export function ProfileHeader() {
  const initials = getInitials(profile.name)

  return (
    <div className="profile-header">
      <div className="profile-header__avatar">{initials}</div>
      <h1 className="profile-header__name">{profile.name}</h1>
      <p className="profile-header__title">{profile.title}</p>
      <p className="profile-header__bio">{profile.bio}</p>
      <div className="profile-header__links">
        {profile.email && (
          <a href={`mailto:${profile.email}`} className="profile-header__link">
            Email
          </a>
        )}
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="profile-header__link"
          >
            GitHub
          </a>
        )}
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="profile-header__link"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}
