import { defineMessages } from 'react-intl';

// Navigation messages
export const navigationMessages = defineMessages({
  home: {
    id: 'nav.home',
    defaultMessage: 'Home',
  },
  about: {
    id: 'nav.about',
    defaultMessage: 'About',
  },
  skills: {
    id: 'nav.skills',
    defaultMessage: 'Skills',
  },
  projects: {
    id: 'nav.projects',
    defaultMessage: 'Projects',
  },
  contact: {
    id: 'nav.contact',
    defaultMessage: 'Contact',
  },
});

// Hero section messages
export const heroMessages = defineMessages({
  greeting: {
    id: 'hero.greeting',
    defaultMessage: "Hi, I'm",
  },
  viewWork: {
    id: 'hero.viewWork',
    defaultMessage: 'View My Work',
  },
  getInTouch: {
    id: 'hero.getInTouch',
    defaultMessage: 'Get In Touch',
  },
});

// About section messages
export const aboutMessages = defineMessages({
  title: {
    id: 'about.title',
    defaultMessage: 'About',
  },
  titleHighlight: {
    id: 'about.titleHighlight',
    defaultMessage: 'Me',
  },
  subtitle: {
    id: 'about.subtitle',
    defaultMessage: 'Passionate about creating innovative solutions that make a real impact',
  },
  descriptionPart1: {
    id: 'about.description.part1',
    defaultMessage: "I'm a passionate fullstack developer currently working at",
  },
  descriptionPart2: {
    id: 'about.description.part2',
    defaultMessage:
      ', where I specialize in building scalable IoT solutions and data analytics platforms.',
  },
  descriptionPart3: {
    id: 'about.description.part3',
    defaultMessage: 'With expertise in',
  },
  descriptionPart4: {
    id: 'about.description.part4',
    defaultMessage:
      ', I love creating innovative solutions that make a real impact. My work focuses on IoT platforms, cloud technologies, and building robust enterprise applications.',
  },
  descriptionPart5: {
    id: 'about.description.part5',
    defaultMessage: 'Based in',
  },
  descriptionPart6: {
    id: 'about.description.part6',
    defaultMessage:
      ", I'm always excited to collaborate on challenging projects and contribute to open-source communities.",
  },
  statsPublicRepos: {
    id: 'about.stats.publicRepos',
    defaultMessage: 'Public Repos',
  },
  statsGithubFollowers: {
    id: 'about.stats.githubFollowers',
    defaultMessage: 'GitHub Followers',
  },
  statsStackOverflowRep: {
    id: 'about.stats.stackOverflowRep',
    defaultMessage: 'Stack Overflow Rep',
  },
  statsSoBadges: {
    id: 'about.stats.soBadges',
    defaultMessage: 'SO Badges',
  },
  highlightIotTitle: {
    id: 'about.highlight.iot.title',
    defaultMessage: 'IoT & Data Analytics',
  },
  highlightIotDescription: {
    id: 'about.highlight.iot.description',
    defaultMessage: 'Building scalable IoT solutions and data analytics platforms at IBM',
  },
  highlightFullstackTitle: {
    id: 'about.highlight.fullstack.title',
    defaultMessage: 'Full-Stack Development',
  },
  highlightFullstackDescription: {
    id: 'about.highlight.fullstack.description',
    defaultMessage: 'Expertise in React, Java, Python, and TypeScript for end-to-end solutions',
  },
  highlightCloudTitle: {
    id: 'about.highlight.cloud.title',
    defaultMessage: 'Cloud Technologies',
  },
  highlightCloudDescription: {
    id: 'about.highlight.cloud.description',
    defaultMessage: 'Proficient in cloud platforms and building robust enterprise applications',
  },
  highlightOpensourceTitle: {
    id: 'about.highlight.opensource.title',
    defaultMessage: 'Open Source',
  },
  highlightOpensourceDescription: {
    id: 'about.highlight.opensource.description',
    defaultMessage: 'Active contributor to open-source communities and collaborative projects',
  },
});

// Skills section messages
export const skillsMessages = defineMessages({
  title: {
    id: 'skills.title',
    defaultMessage: 'Skills &',
  },
  titleHighlight: {
    id: 'skills.titleHighlight',
    defaultMessage: 'Technologies',
  },
  subtitle: {
    id: 'skills.subtitle',
    defaultMessage:
      'A comprehensive overview of my technical expertise and the tools I use to build amazing products',
  },
  categoryPrimarySkills: {
    id: 'skills.category.primarySkills',
    defaultMessage: 'Primary Skills',
  },
  categoryLanguages: {
    id: 'skills.category.languages',
    defaultMessage: 'Languages',
  },
  categoryFrontend: {
    id: 'skills.category.frontend',
    defaultMessage: 'Frontend',
  },
  categoryBackend: {
    id: 'skills.category.backend',
    defaultMessage: 'Backend',
  },
  categoryDatabases: {
    id: 'skills.category.databases',
    defaultMessage: 'Databases',
  },
  categoryDevops: {
    id: 'skills.category.devops',
    defaultMessage: 'DevOps',
  },
  categoryCloud: {
    id: 'skills.category.cloud',
    defaultMessage: 'Cloud',
  },
  categoryOther: {
    id: 'skills.category.other',
    defaultMessage: 'Other',
  },
});

// Projects section messages
export const projectsMessages = defineMessages({
  title: {
    id: 'projects.title',
    defaultMessage: 'Featured',
  },
  titleHighlight: {
    id: 'projects.titleHighlight',
    defaultMessage: 'Projects',
  },
  subtitle: {
    id: 'projects.subtitle',
    defaultMessage: 'A showcase of my recent work and open-source contributions',
  },
  loading: {
    id: 'projects.loading',
    defaultMessage: 'Loading projects...',
  },
  noDescription: {
    id: 'projects.noDescription',
    defaultMessage: 'No description available',
  },
  buttonCode: {
    id: 'projects.button.code',
    defaultMessage: 'Code',
  },
  buttonDemo: {
    id: 'projects.button.demo',
    defaultMessage: 'Demo',
  },
  contributionIbm: {
    id: 'projects.contribution.ibm',
    defaultMessage: 'IBM Watson IoT',
  },
});

// Contact section messages
export const contactMessages = defineMessages({
  title: {
    id: 'contact.title',
    defaultMessage: 'Get In',
  },
  titleHighlight: {
    id: 'contact.titleHighlight',
    defaultMessage: 'Touch',
  },
  subtitle: {
    id: 'contact.subtitle',
    defaultMessage:
      'Feel free to reach out for collaborations, opportunities, or just a friendly chat!',
  },
  methodLinkedinTitle: {
    id: 'contact.method.linkedin.title',
    defaultMessage: 'LinkedIn',
  },
  methodLinkedinValue: {
    id: 'contact.method.linkedin.value',
    defaultMessage: 'Connect with me',
  },
  methodGithubTitle: {
    id: 'contact.method.github.title',
    defaultMessage: 'GitHub',
  },
  methodStackoverflowTitle: {
    id: 'contact.method.stackoverflow.title',
    defaultMessage: 'Stack Overflow',
  },
  infoLocation: {
    id: 'contact.info.location',
    defaultMessage: 'Location',
  },
  infoCompany: {
    id: 'contact.info.company',
    defaultMessage: 'Company',
  },
  footer: {
    id: 'contact.footer',
    defaultMessage: 'Built with React, TypeScript & Tailwind CSS.',
  },
});

// Common messages
export const commonMessages = defineMessages({
  and: {
    id: 'common.and',
    defaultMessage: 'and',
  },
});

export const defaultLocale = 'en';
