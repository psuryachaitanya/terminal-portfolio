import { Mail, Github, Linkedin } from 'lucide-react'
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
      <span className="profile-header__badge">{profile.title}</span>
      <p className="profile-header__tagline">{profile.tagline}</p>
      <p className="profile-header__bio">{profile.bio}</p>
      <div className="profile-header__links">
        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="profile-header__link"
            aria-label="Email"
          >
            <Mail size={16} />
            Email
          </a>
        )}
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="profile-header__link"
            aria-label="GitHub"
          >
            <Github size={16} />
            GitHub
          </a>
        )}
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="profile-header__link"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}
