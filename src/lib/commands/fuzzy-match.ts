// src/lib/commands/fuzzy-match.ts
import { COMMANDS } from './registry'

export function resolveCommand(input: string): string | null {
  const trimmed = input.trim().toLowerCase()
  if (!trimmed) return null

  const exact = COMMANDS.find((c) => c.name === trimmed)
  if (exact) return exact.name

  const words = trimmed.split(/\s+/)

  for (const word of words) {
    const exactWord = COMMANDS.find((c) => c.name === word)
    if (exactWord) return exactWord.name
  }

  // Weight by keyword length so a more specific keyword (e.g. "papers",
  // matched by publications) outweighs a shorter, more generic one
  // (e.g. "about", matched by whoami) when both match a single word each.
  let best: { name: string; score: number } | null = null
  for (const cmd of COMMANDS) {
    let score = 0
    for (const word of words) {
      if (cmd.keywords.includes(word)) score += word.length
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { name: cmd.name, score }
    }
  }

  return best ? best.name : null
}
