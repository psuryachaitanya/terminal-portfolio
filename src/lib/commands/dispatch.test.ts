// src/lib/commands/dispatch.test.ts
import { describe, it, expect } from 'vitest'
import { computeResponse } from './dispatch'

describe('computeResponse', () => {
  it('signals clear for the clear command', () => {
    expect(computeResponse('clear')).toEqual({ clear: true })
  })

  it('resolves an exact command and returns rendered text', () => {
    const result = computeResponse('help')
    expect(result.clear).toBe(false)
    expect(result.text).toContain('Available commands')
  })

  it('resolves free text via fuzzy matching', () => {
    const result = computeResponse('tell me about your papers')
    expect(result.clear).toBe(false)
    expect(result.text).toContain('[slug:')
  })

  it('falls back to a not-found message for unrecognized input', () => {
    const result = computeResponse('asdkjaskjd')
    expect(result.clear).toBe(false)
    expect(result.text).toContain('Command not found')
  })

  it('passes arguments through to the renderer', () => {
    const result = computeResponse('publications example-paper')
    expect(result.text).toContain('[Paper Title]')
  })
})
