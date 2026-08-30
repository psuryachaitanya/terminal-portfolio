export interface ContentMeta {
  title: string
  date?: string
  slug: string
  body: string
}

export interface ExperienceItem extends ContentMeta {
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  summary: string
  tags: string[]
}

export interface ProjectItem extends ContentMeta {
  summary: string
  link?: string
  tags: string[]
}

export interface PublicationItem extends ContentMeta {
  venue: string
  link?: string
  citation: string
}

export interface TalkItem extends ContentMeta {
  venue: string
  location: string
  type: string
}

export interface TeachingItem extends ContentMeta {
  venue: string
  location: string
  type: string
}

export interface BlogPost extends ContentMeta {
  tags: string[]
}

export interface Profile {
  name: string
  title: string
  tagline: string
  email: string
  github?: string
  linkedin?: string
  location?: string
  bio: string
}

export interface ResumeInfo {
  summary: string
  pdfUrl?: string
}
