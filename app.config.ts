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
  skill_list: {
    'Frontend': [
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind',
      'Nuxt',
      'Vue.js',
      'Next.js',
      'Bootstrap',
    ],
    'Backend': [
      'PHP',
      'Laravel',
      'MySQL',
      'REST APIs',
      'Redis',
    ],
    'DevOps': [
      'Bash',
      'Git',
      'Linux',
      'Ansible',
      'Docker',
      'Jenkins',
    ],
  },
  socials: {
    github: 'https://github.com/saiba-tenpura',
  },
})
