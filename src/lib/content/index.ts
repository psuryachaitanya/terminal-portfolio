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

const experienceFiles = import.meta.glob('/src/content/experience/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>
export const experience: ExperienceItem[] = parseCollection<ExperienceItem>(
  experienceFiles
).sort((a, b) => b.startDate.localeCompare(a.startDate))

const projectFiles = import.meta.glob('/src/content/projects/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>
export const projects: ProjectItem[] = parseCollection<ProjectItem>(projectFiles)

const publicationFiles = import.meta.glob('/src/content/publications/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>
export const publications: PublicationItem[] = parseCollection<PublicationItem>(
  publicationFiles
).sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))

const talkFiles = import.meta.glob('/src/content/talks/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>
export const talks: TalkItem[] = parseCollection<TalkItem>(talkFiles).sort(
  (a, b) => (b.date ?? '').localeCompare(a.date ?? '')
)

const teachingFiles = import.meta.glob('/src/content/teaching/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>
export const teaching: TeachingItem[] = parseCollection<TeachingItem>(teachingFiles).sort(
  (a, b) => (b.date ?? '').localeCompare(a.date ?? '')
)

const blogFiles = import.meta.glob('/src/content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>
export const blog: BlogPost[] = parseCollection<BlogPost>(blogFiles).sort(
  (a, b) => (b.date ?? '').localeCompare(a.date ?? '')
)

const profileFiles = import.meta.glob('/src/content/profile.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>
const profileRaw = Object.values(profileFiles)[0] ?? ''
const profileParsed = matter(profileRaw)
export const profile: Profile = {
  ...(profileParsed.data as Omit<Profile, 'bio'>),
  bio: profileParsed.content.trim(),
}

const resumeFiles = import.meta.glob('/src/content/resume.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>
const resumeRaw = Object.values(resumeFiles)[0] ?? ''
const resumeParsed = matter(resumeRaw)
export const resume: ResumeInfo = {
  ...(resumeParsed.data as Omit<ResumeInfo, 'summary'>),
  summary: resumeParsed.content.trim(),
}
