type Contact = {
  name: string
  link: string
}

type Project = {
  name: string
  description: string
  type: string
  link: string
}

export const contacts: Contact[] = [
  {
    name: 'Email',
    link: 'mailto:faidilf@proton.me'
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/faidil'
  }
]

export const projects: Project[] = [
  {
    name: 'famozzy.github.io',
    description: 'My personal website (this current website you are viewing right now).',
    type: 'web',
    link: 'https://famozzy.github.io'
  },
  {
    name: 'qorum',
    description: 'Submission for Dicoding React Developer Expert final project.',
    type: 'web',
    link: 'https://github.com/Famozzy/qorum'
  }
]

export const hostnames = ['moltres', 'zapdos', 'articuno']
