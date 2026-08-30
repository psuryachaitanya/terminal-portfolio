// src/components/CommandInput.tsx
import { useState, type FormEvent } from 'react'
import { SuggestionChips } from './SuggestionChips'

export function CommandInput({ onSubmit }: { onSubmit: (value: string) => void }) {
  const [value, setValue] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!value.trim()) return
    onSubmit(value)
    setValue('')
  }

  function handleChipSelect(command: string) {
    onSubmit(command)
  }

  return (
    <div className="command-input-area">
      <SuggestionChips onSelect={handleChipSelect} />
      <form className="command-input" onSubmit={handleSubmit}>
        <span className="command-input__prompt">&gt;</span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type a command, or ask a question..."
          autoFocus
          aria-label="Command input"
        />
      </form>
    </div>
  )
}
