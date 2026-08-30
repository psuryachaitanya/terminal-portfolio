// src/lib/commands/fuzzy-match.test.ts
import { describe, it, expect } from 'vitest'
import { resolveCommand } from './fuzzy-match'

describe('resolveCommand', () => {
  it('matches an exact command name', () => {
    expect(resolveCommand('whoami')).toBe('whoami')
  })

  it('matches free text via keywords', () => {
    expect(resolveCommand('tell me about your papers')).toBe('publications')
  })

  it('is case-insensitive', () => {
    expect(resolveCommand('WHOAMI')).toBe('whoami')
  })

  it('returns null for unrecognized input', () => {
    expect(resolveCommand('asdkjaskjd')).toBeNull()
  })

  it('returns null for empty input', () => {
    expect(resolveCommand('   ')).toBeNull()
  })

  it('prefers an exact command-name match over a keyword match elsewhere in the input', () => {
    expect(resolveCommand('help me understand your projects')).toBe('help')
  })
})
