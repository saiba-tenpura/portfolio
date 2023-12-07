export default defineAppConfig({
  navigation: [
    {
      'title': 'About',
      'path': '/about',
    },
    {
      'title': 'Blog',
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
      ],
    },
  ],
  socials: {
    github: 'https://github.com/saiba-tenpura',
  },
})
