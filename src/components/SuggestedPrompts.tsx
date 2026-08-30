import {
  User,
  Briefcase,
  FolderGit2,
  FileText,
  Mic,
  GraduationCap,
  Newspaper,
  ScrollText,
  Mail,
  type LucideIcon,
} from 'lucide-react'
import { COMMANDS } from '../lib/commands/registry'

const PROMPTS: Record<string, { label: string; icon: LucideIcon }> = {
  whoami: { label: "What's your background?", icon: User },
  experience: { label: "What's your work experience?", icon: Briefcase },
  projects: { label: 'What have you built?', icon: FolderGit2 },
  publications: { label: 'Have you published any papers?', icon: FileText },
  talks: { label: 'Have you given any talks?', icon: Mic },
  teaching: { label: 'Have you taught before?', icon: GraduationCap },
  blog: { label: 'Do you write anywhere?', icon: Newspaper },
  resume: { label: 'Can I see your resume?', icon: ScrollText },
  contact: { label: 'How can I reach you?', icon: Mail },
}

export function SuggestedPrompts({ onSelect }: { onSelect: (command: string) => void }) {
  const prompts = COMMANDS.filter((c) => PROMPTS[c.name])

  return (
    <div className="suggested-prompts">
      {prompts.map((cmd) => {
        const { label, icon: Icon } = PROMPTS[cmd.name]
        return (
          <button
            key={cmd.name}
            type="button"
            className="suggested-prompts__card"
            onClick={() => onSelect(cmd.name)}
          >
            <Icon size={18} className="suggested-prompts__icon" />
            <span>{label}</span>
          </button>
        )
      })}
    </div>
  )
}
