// src/components/TerminalShell.tsx
import { useTerminal } from '../hooks/useTerminal'
import { MessageList } from './MessageList'
import { CommandInput } from './CommandInput'
import { ThemeToggle } from './ThemeToggle'

export function TerminalShell() {
  const { bubbles, submit } = useTerminal()

  return (
    <div className="terminal-shell">
      <div className="terminal-shell__titlebar">
        <span className="dot dot--red" />
        <span className="dot dot--yellow" />
        <span className="dot dot--green" />
        <span className="terminal-shell__title">guest@portfolio: ~</span>
        <ThemeToggle />
      </div>
      <MessageList bubbles={bubbles} />
      <CommandInput onSubmit={submit} />
    </div>
  )
}
