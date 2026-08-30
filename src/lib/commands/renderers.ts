// src/lib/commands/renderers.ts
import {
  experience,
  projects,
  publications,
  talks,
  teaching,
  blog,
  profile,
  resume,
} from '../content'
import { COMMANDS } from './registry'

export type Renderer = (args: string[]) => string

export const renderers: Record<string, Renderer> = {
  whoami: () => `${profile.name} — ${profile.title}\n\n${profile.bio}`,

  experience: () =>
    experience
      .map(
        (e) =>
          `${e.role} @ ${e.company} (${e.startDate} – ${e.endDate})\n${e.location}\n${e.summary}`
      )
      .join('\n\n'),

  projects: () =>
    projects
      .map((p) => `${p.title}${p.link ? ` (${p.link})` : ''}\n${p.summary}`)
      .join('\n\n'),

  publications: (args) => {
    if (args[0]) {
      const pub = publications.find((p) => p.slug === args[0])
      return pub
        ? `${pub.title}\n${pub.venue}, ${pub.date}\n\n${pub.body}\n\n${pub.citation}`
        : `No publication found for "${args[0]}". Try "publications" to list all.`
    }
    return publications
      .map((p) => `${p.title} — ${p.venue} (${p.date}) [slug: ${p.slug}]`)
      .join('\n')
  },

  talks: () =>
    talks.length > 0
      ? talks
          .map((t) => `${t.title} — ${t.venue}, ${t.location} (${t.date})`)
          .join('\n\n')
      : "No talks yet — I'll list them here once I've given one.",

  teaching: () =>
    teaching.map((t) => `${t.title} — ${t.venue} (${t.date})`).join('\n\n'),

  blog: (args) => {
    if (args[0]) {
      const post = blog.find((p) => p.slug === args[0])
      return post
        ? `${post.title} (${post.date})\n\n${post.body}`
        : `No post found for "${args[0]}". Try "blog" to list all.`
    }
    if (blog.length === 0) {
      return "No posts yet — check back soon."
    }
    return blog.map((p) => `${p.title} (${p.date}) [slug: ${p.slug}]`).join('\n')
  },

  resume: () =>
    `${resume.summary}${resume.pdfUrl ? `\n\nDownload: ${resume.pdfUrl}` : ''}`,

  contact: () =>
    [
      `Email: ${profile.email}`,
      profile.github ? `GitHub: ${profile.github}` : null,
      profile.linkedin ? `LinkedIn: ${profile.linkedin}` : null,
    ]
      .filter(Boolean)
      .join('\n'),

  help: () =>
    `Available commands:\n${COMMANDS.map((c) => `  ${c.name} — ${c.description}`).join('\n')}`,
}
