export interface Bubble {
  id: string
  role: 'user' | 'terminal'
  content: string
}

export function makeBubble(role: Bubble['role'], content: string): Bubble {
  return { id: crypto.randomUUID(), role, content }
}
