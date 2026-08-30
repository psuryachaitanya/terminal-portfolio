// src/lib/commands/dispatch.ts
import { resolveCommand } from './fuzzy-match'
import { renderers } from './renderers'

export interface DispatchResult {
  clear: boolean
  text?: string
}

export function computeResponse(rawInput: string): DispatchResult {
  const trimmed = rawInput.trim()
  const [cmdWord, ...args] = trimmed.split(/\s+/)

  if (cmdWord?.toLowerCase() === 'clear') {
    return { clear: true }
  }

  const resolved = resolveCommand(trimmed) ?? (cmdWord ? resolveCommand(cmdWord) : null)

  if (!resolved) {
    return {
      clear: false,
      text: `Command not found: "${trimmed}". Type "help" to see available commands.`,
    }
  }

  // Only forward the trailing words as renderer args when the user actually
  // typed the resolved command as the first word (e.g. "publications
  // example-paper"). When the command was reached via fuzzy keyword scoring
  // over a free-text sentence (e.g. "tell me about your papers"), the
  // trailing words are part of the sentence, not command arguments.
  const passthroughArgs = cmdWord?.toLowerCase() === resolved ? args : []
  return { clear: false, text: renderers[resolved](passthroughArgs) }
}
