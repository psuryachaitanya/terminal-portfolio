import { ProfileHeader } from './ProfileHeader'
import { ExperienceTimeline } from './ExperienceTimeline'
import { PublicationsAndTalks } from './PublicationsAndTalks'

export function ProfilePanel() {
  return (
    <div className="profile-panel">
      <ProfileHeader />
      <ExperienceTimeline />
      <PublicationsAndTalks />
    </div>
  )
}
