import { ProfileHeader } from './ProfileHeader'
import { ExperienceTimeline } from './ExperienceTimeline'
import { ProjectCards } from './ProjectCards'
import { PublicationsAndTalks } from './PublicationsAndTalks'

export function ProfilePanel() {
  return (
    <div className="profile-panel">
      <ProfileHeader />
      <ExperienceTimeline />
      <ProjectCards />
      <PublicationsAndTalks />
    </div>
  )
}
