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
        'HTML5',
        'CSS3',
        'JavaScript',
        'Tailwind',
        'Nuxt',
        'Vue.js',
        'Next.js',
        'Bootstrap',
      ],
    },
    {
      category: 'Backend',
      skills: [
        'PHP',
        'Laravel',
        'MySQL',
        'NPM',
      ],
    },
    {
      category: 'DevOps',
      skills: [
        'Bash',
        'Git',
        'Ansible',
        'Docker',
        'Jenkins',
      ],
    },
  ],
  socials: {
    github: 'https://github.com/saiba-tenpura',
  },
})
