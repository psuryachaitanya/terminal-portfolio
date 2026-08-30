import { describe, it, expect } from 'vitest'
import { parseCollection } from './parse'
import type { ContentMeta } from './types'

interface TestItem extends ContentMeta {
  extra: string
}

describe('parseCollection', () => {
  it('parses frontmatter and body, deriving slug from the file path', () => {
    const files = {
      '/src/content/fixtures/2024-01-01-example.md':
        '---\ntitle: "Example"\nextra: "value"\n---\n\nHello world.\n',
    }

    const result = parseCollection<TestItem>(files)

    expect(result).toEqual([
      {
        title: 'Example',
        extra: 'value',
        slug: '2024-01-01-example',
        body: 'Hello world.',
      },
    ])
  })

  it('returns an empty array when no files are given', () => {
    expect(parseCollection<TestItem>({})).toEqual([])
  })
})
