// src/lib/content/index.ts
import { parseCollection } from './parse'
import matter from 'gray-matter'
import type {
  ExperienceItem,
  ProjectItem,
  PublicationItem,
  TalkItem,
  TeachingItem,
  BlogPost,
  Profile,
  ResumeInfo,
} from './types'

function glob(pattern: string): Record<string, string> {
  return import.meta.glob(pattern, {
    eager: true,
    query: '?raw',
    import: 'default',
  }) as Record<string, string>
}

export const experience: ExperienceItem[] = parseCollection<ExperienceItem>(
  glob('/src/content/experience/*.md')
).sort((a, b) => b.startDate.localeCompare(a.startDate))

export const projects: ProjectItem[] = parseCollection<ProjectItem>(
  glob('/src/content/projects/*.md')
)

export const publications: PublicationItem[] = parseCollection<PublicationItem>(
  glob('/src/content/publications/*.md')
).sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))

export const talks: TalkItem[] = parseCollection<TalkItem>(
  glob('/src/content/talks/*.md')
).sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))

export const teaching: TeachingItem[] = parseCollection<TeachingItem>(
  glob('/src/content/teaching/*.md')
).sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))

export const blog: BlogPost[] = parseCollection<BlogPost>(
  glob('/src/content/blog/*.md')
).sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))

const profileFiles = glob('/src/content/profile.md')
const profileRaw = Object.values(profileFiles)[0] ?? ''
const profileParsed = matter(profileRaw)
export const profile: Profile = {
  ...(profileParsed.data as Omit<Profile, 'bio'>),
  bio: profileParsed.content.trim(),
}

const resumeFiles = glob('/src/content/resume.md')
const resumeRaw = Object.values(resumeFiles)[0] ?? ''
const resumeParsed = matter(resumeRaw)
export const resume: ResumeInfo = {
  ...(resumeParsed.data as Omit<ResumeInfo, 'summary'>),
  summary: resumeParsed.content.trim(),
}
