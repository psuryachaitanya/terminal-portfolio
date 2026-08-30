// src/lib/commands/registry.ts
export interface Command {
  name: string
  description: string
  keywords: string[]
}

export const COMMANDS: Command[] = [
  { name: 'whoami', description: 'About me', keywords: ['about', 'who', 'bio', 'introduce', 'yourself'] },
  { name: 'experience', description: 'Work experience', keywords: ['work', 'job', 'career', 'employment', 'history'] },
  { name: 'projects', description: 'Projects and portfolio', keywords: ['project', 'portfolio', 'built', 'built', 'app', 'apps'] },
  { name: 'publications', description: 'Publications', keywords: ['paper', 'papers', 'publication', 'research', 'article'] },
  { name: 'talks', description: 'Talks and presentations', keywords: ['talk', 'speak', 'speaking', 'presentation', 'conference'] },
  { name: 'teaching', description: 'Teaching experience', keywords: ['teach', 'teaching', 'course', 'class', 'lecture'] },
  { name: 'blog', description: 'Blog posts', keywords: ['blog', 'post', 'writing', 'article'] },
  { name: 'resume', description: 'Resume / CV', keywords: ['resume', 'cv', 'download'] },
  { name: 'contact', description: 'Contact info', keywords: ['contact', 'email', 'reach', 'linkedin', 'github'] },
  { name: 'help', description: 'List available commands', keywords: ['help', 'commands', 'options', 'menu'] },
  { name: 'clear', description: 'Clear the screen', keywords: ['clear', 'reset', 'cls'] },
]
