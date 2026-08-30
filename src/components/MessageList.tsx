// src/components/MessageList.tsx
import { useEffect, useRef } from 'react'
import type { Bubble } from '../lib/bubble'
import { MessageBubble } from './MessageBubble'

export function MessageList({ bubbles }: { bubbles: Bubble[] }) {
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [bubbles])

  return (
    <div className="message-list">
      {bubbles.map((bubble) => (
        <MessageBubble key={bubble.id} bubble={bubble} />
      ))}
      <div ref={endRef} />
    </div>
  )
}
