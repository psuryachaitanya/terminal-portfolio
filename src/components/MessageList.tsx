import { useEffect, useRef } from 'react'
import type { Bubble } from '../lib/bubble'
import { MessageBubble } from './MessageBubble'

export function MessageList({ bubbles }: { bubbles: Bubble[] }) {
  const endRef = useRef<HTMLDivElement>(null)
  const lastBubbleId = bubbles[bubbles.length - 1]?.id

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [bubbles])

  return (
    <div className="message-list">
      {bubbles.map((bubble) => (
        <MessageBubble
          key={bubble.id}
          bubble={bubble}
          shouldStream={bubble.role === 'terminal' && bubble.id === lastBubbleId}
        />
      ))}
      <div ref={endRef} />
    </div>
  )
}
