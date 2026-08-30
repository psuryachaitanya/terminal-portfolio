import matter from 'gray-matter'
import type { ContentMeta } from './types'

export function parseCollection<T extends ContentMeta>(
  files: Record<string, string>
): T[] {
  return Object.entries(files).map(([path, raw]) => {
    const { data, content } = matter(raw)
    const filename = path.split('/').pop() ?? path
    const slug = filename.replace(/\.md$/, '')
    return {
      ...(data as Omit<T, 'slug' | 'body'>),
      slug,
      body: content.trim(),
    } as T
  })
}
