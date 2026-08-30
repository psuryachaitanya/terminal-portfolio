import { useTerminal } from '../hooks/useTerminal'
import { MessageList } from './MessageList'
import { CommandInput } from './CommandInput'
import { SuggestedPrompts } from './SuggestedPrompts'
import { NewChatButton } from './NewChatButton'
import { ThemeToggle } from './ThemeToggle'

export function ChatPanel() {
  const { bubbles, submit, reset } = useTerminal()
  const isEmpty = bubbles.length === 0

  return (
    <div className="chat-panel">
      <div className="chat-panel__header">
        <span className="chat-panel__title">Ask about Surya</span>
        <div className="chat-panel__header-actions">
          <NewChatButton onClick={reset} disabled={isEmpty} />
          <ThemeToggle />
        </div>
      </div>

      {isEmpty ? (
        <div className="chat-panel__empty">
          <h2 className="chat-panel__greeting">Ask me anything</h2>
          <p className="chat-panel__subgreeting">
            I can answer questions about Surya's experience, projects, publications, and more.
          </p>
          <SuggestedPrompts onSelect={submit} />
        </div>
      ) : (
        <MessageList bubbles={bubbles} />
      )}

      <CommandInput onSubmit={submit} />
    </div>
  )
}
