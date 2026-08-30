import { Plus } from 'lucide-react'

export function NewChatButton({
  onClick,
  disabled,
}: {
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      className="new-chat-button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Start a new chat"
      title="New chat"
    >
      <Plus size={14} />
      New chat
    </button>
  )
}
