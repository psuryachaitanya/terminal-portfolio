import { useState, type FormEvent } from 'react'

export function CommandInput({ onSubmit }: { onSubmit: (value: string) => void }) {
  const [value, setValue] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!value.trim()) return
    onSubmit(value)
    setValue('')
  }

  return (
    <form className="command-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask a question..."
        autoFocus
        aria-label="Message input"
      />
      <button type="submit" className="command-input__send" aria-label="Send">
        ↑
      </button>
    </form>
  )
}
