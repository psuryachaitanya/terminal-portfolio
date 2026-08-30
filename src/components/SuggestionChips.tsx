// src/components/SuggestionChips.tsx
import { COMMANDS } from '../lib/commands/registry'

export function SuggestionChips({ onSelect }: { onSelect: (command: string) => void }) {
  const visible = COMMANDS.filter((c) => c.name !== 'clear')

  return (
    <div className="suggestion-chips">
      {visible.map((cmd) => (
        <button
          key={cmd.name}
          className="chip"
          onClick={() => onSelect(cmd.name)}
          type="button"
        >
          {cmd.name}
        </button>
      ))}
    </div>
  )
}
