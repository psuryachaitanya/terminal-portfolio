import { Bot } from 'lucide-react'
import type { Bubble } from '../lib/bubble'
import { useStreamingText } from '../hooks/useStreamingText'

export function MessageBubble({
  bubble,
  shouldStream,
}: {
  bubble: Bubble
  shouldStream: boolean
}) {
  const { visibleText, isStreaming, complete } = useStreamingText(
    bubble.content,
    shouldStream
  )

  if (bubble.role === 'user') {
    return (
      <div className="message message--user">
        <div className="message__bubble">{bubble.content}</div>
      </div>
    )
  }

  return (
    <div
      className="message message--assistant"
      onClick={isStreaming ? complete : undefined}
    >
      <div className="message__avatar">
        <Bot size={16} />
      </div>
      <div className="message__content">
        <p className="message__text">
          {visibleText}
          {isStreaming && <span className="message__cursor" aria-hidden="true" />}
        </p>
      </div>
    </div>
  )
}
