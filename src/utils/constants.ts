export const PROFILE_DATA = {
  name: 'Amritha Raj Herle',
  username: 'herleraja',
  tagline: 'A passionate fullstack developer',
  location: 'Germany',
  company: 'IBM',

  github: {
    username: 'herleraja',
    url: 'https://github.com/herleraja',
    contributionOrgs: ['elyra-ai', 'carbon-design-system', 'ibm-watson-iot'],
  },

  stackoverflow: {
    userId: 5227954,
    url: 'https://stackoverflow.com/users/5227954/amrith-raj-herle',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/herleraja/',
    facebook: 'https://www.facebook.com/herleraja/',
    githubIBM: 'https://github.ibm.com/Amritha-Herle',
  },

  skills: {
    primary: ['React', 'JavaScript'],
    languages: ['Java', 'Python', 'TypeScript'],
    frontend: ['HTML', 'CSS', 'Tailwind CSS'],
    backend: ['Spring Boot', 'Hibernate', 'Node.js'],
    databases: ['PostgreSQL', 'DB2', 'Cloudant'],
    devops: ['Docker', 'Kubernetes', 'Git'],
    cloud: ['IBM Cloud', 'AWS'],
    other: ['IoT', 'Data Analytics', 'AI & ML', 'GWT', 'Sencha'],
  },

  featuredProjects: [
    'carbon-addons-iot-react',
    'maximo-asset-monitor-sdk',
    'maximo-asset-monitor-device-library-search',
    'iot-python',
    'iot-nodejs',
    'iot-java',
    'canvas',
    'javaLearning',
  ],

  ibmWatsonIotContributions: [
    'carbon-addons-iot-react',
    'maximo-asset-monitor-sdk',
    'iot-python',
    'iot-nodejs',
    'iot-java',
  ],
};

export const API_CONFIG = {
  github: {
    baseUrl: 'https://api.github.com',
    username: import.meta.env.VITE_GITHUB_USERNAME || 'herleraja',
  },
  stackoverflow: {
    baseUrl: 'https://api.stackexchange.com/2.3',
    userId: import.meta.env.VITE_STACKOVERFLOW_ID || '5227954',
  },
  cacheDuration: 5 * 60 * 1000, // 5 minutes
};
