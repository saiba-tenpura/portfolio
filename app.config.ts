export default defineAppConfig({
  navigation: [
    {
      'text': 'Home',
      'path': '/',
    },
    {
      'text': 'About',
      'path': '/about',
    },
    {
      'text': 'Blog',
      'path': '/blog',
    },
  ],
  skillSets: [
    {
      category: 'Frontend',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Tailwind',
        'Nuxt',
        'Vue.js',
        'Next.js',
        'Bootstrap',
        'NPM',
      ],
    },
    {
      category: 'Backend',
      skills: [
        'PHP',
        'Laravel',
        'MySQL',
        'Bash',
        'Python',
        'Traefik',
        'Powershell',
      ],
    },
    {
      category: 'DevOps',
      skills: [
        'Git',
        'Ansible',
        'Docker',
        'Jenkins',
      ],
    },
    {
      category: 'Miscellaneous',
      skills: [
        'Blender',
        'Gimp',
        'Godot',
        'Inkscape',
        'LaTeX',
      ],
    },
  ],
  socials: {
    github: 'https://github.com/saiba-tenpura',
  },
})
