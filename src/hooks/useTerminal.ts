import { useState } from 'react'
import { computeResponse } from '../lib/commands/dispatch'
import { makeBubble, type Bubble } from '../lib/bubble'

const WELCOME_TEXT =
  'Welcome. Type "help" to see available commands, or click a suggestion below.'

export function useTerminal() {
  const [bubbles, setBubbles] = useState<Bubble[]>([
    makeBubble('terminal', WELCOME_TEXT),
  ])

  function submit(raw: string) {
    const trimmed = raw.trim()
    if (!trimmed) return

    const result = computeResponse(trimmed)

    if (result.clear) {
      setBubbles([])
      return
    }

    const userBubble = makeBubble('user', trimmed)
    const responseBubble = makeBubble('terminal', result.text ?? '')
    setBubbles((prev) => [...prev, userBubble, responseBubble])
  }

  return { bubbles, submit }
}
