export default defineAppConfig({
  navigation: [
    {
      'title': 'About',
      'path': '/about',
    },
    {
      'title': 'Projects',
      'path': '/projects',
    },
  ],
  skill_list: {
    'Frontend': [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'Nuxt.js',
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
