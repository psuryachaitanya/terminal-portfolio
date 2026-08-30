import { COMMANDS } from '../lib/commands/registry'

const PROMPT_LABELS: Record<string, string> = {
  whoami: "What's your background?",
  experience: "What's your work experience?",
  projects: 'What have you built?',
  publications: 'Have you published any papers?',
  talks: 'Have you given any talks?',
  teaching: 'Have you taught before?',
  blog: 'Do you write anywhere?',
  resume: 'Can I see your resume?',
  contact: 'How can I reach you?',
}

export function SuggestedPrompts({ onSelect }: { onSelect: (command: string) => void }) {
  const prompts = COMMANDS.filter((c) => PROMPT_LABELS[c.name])

  return (
    <div className="suggested-prompts">
      {prompts.map((cmd) => (
        <button
          key={cmd.name}
          type="button"
          className="suggested-prompts__card"
          onClick={() => onSelect(cmd.name)}
        >
          {PROMPT_LABELS[cmd.name]}
        </button>
      ))}
    </div>
  )
}
