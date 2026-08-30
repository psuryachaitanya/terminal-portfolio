// src/components/MessageBubble.tsx
import type { Bubble } from '../lib/bubble'

export function MessageBubble({ bubble }: { bubble: Bubble }) {
  return (
    <div className={`bubble bubble--${bubble.role}`}>
      <span className="bubble__prompt">
        {bubble.role === 'user' ? '>' : '$'}
      </span>
      <pre className="bubble__content">{bubble.content}</pre>
    </div>
  )
}
