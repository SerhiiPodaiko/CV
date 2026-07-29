import type { CvData } from '@/types/cv'

export const defaultCvData: CvData = {
  hero: {
    name: 'SERHII PODAIKO',
    title: 'Senior Full-Stack Engineer',
    location: 'Lviv, Ukraine',
    email: 'podajko1997@gmail.com',
    phone: '+380 98 921 51 96',
    linkedin: 'https://www.linkedin.com/in/serhii-podaiko-346505160/',
    github: 'https://github.com/yourusername',
    telegram: 'https://t.me/ser816',
    employment_type: 'Full-time',
    work_mode: 'Remote / Hybrid',
    salary: '$3000 - $4500',
  },
  about:
    'Frontend Developer with ~7 years of experience (6+ years commercial), including the last ~3 years working as a Fullstack Developer.\n' +
      ' \n' +
      'I specialize in building scalable web and mobile applications using React, Next.js, Vue, React Native, and Node.js on the backend side.\n' +
      ' \n' +
      'Strong focus on performance, architecture, and clean, maintainable code. Comfortable working in team environments, contributing to product decisions, and delivering production-ready solutions across both frontend and backend layers.\n' +
      ' \n' +
      'Passionate about modern frontend ecosystems, system design, and engineering best practices.',
  experience: [
    {
      id: '1',
      company: 'Lytvynov Production',
      role: 'Full-Stack Engineer & Mobile',
      period: 'Nov 2023 - Jul 2026',
      location: 'Remote',
      employment_type: 'Full-time',
      descriptions: [
          'Owned the delivery of the platform\'s most critical features, driving complex initiatives from concept to production with minimal oversight.',
          'Solved complex production and engineering challenges, improving application stability, performance, and long-term maintainability.',
          'Partnered with stakeholders to turn business requirements into production-ready features.\n',
          'Led front-end development across multiple parallel client projects, driving technical decisions and ensuring consistent delivery across all engagements.',
          'Introduced AI-assisted engineering workflows that automated repetitive engineering tasks and significantly accelerated feature delivery.'
      ],
      tags: ['React', 'Next.js', 'React Native', 'Node.js', 'Nest.js', 'PWA', 'Electron']
    },
    {
      id: '2',
      company: 'N-Code School',
      role: 'Mentor / Teacher',
      period: 'Dec 2023 - Jun 2024',
      location: 'Remote',
      employment_type: 'Part-time',
      descriptions: ['Mentored aspiring front-end developers through hands-on projects, code reviews, and architecture guidance, helping them build production-ready React/Vue applications.'],
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue']
    },
    {
      id: '3',
      company: 'W8-Shipping',
      role: 'React Native Engineer',
      period: 'Jul 2023 - Oct 2023',
      location: 'Remote',
      employment_type: 'Part-time (contract)',
      descriptions: [
          'Platform for trading and buying cars from the Copart auction.',
          'Built a Chrome extension and companion mobile application, enabling traders to access live Copart auction data seamlessly across desktop and mobile platforms.',
          'Implemented a resilient proxy/VPN solution to overcome regional API restrictions, ensuring uninterrupted access to real-time auction data.'
      ],
      tags: ['React Native', 'Chrome Extension', 'JavaScript', 'React', 'Webpack']
    },
    {
      id: '4',
      company: 'Riseapps',
      role: 'React / Next Engineer',
      period: 'Mar 2023 - Sep 2023',
      location: 'Remote',
      employment_type: 'Full-time',
      descriptions: [
        'Platform connecting brands with athletes for product-partnership promotion.',
        'Owned the implementation of the platform\'s payment and authentication systems, enabling a secure and production-ready launch.',
        'Led localization and SEO initiatives, preparing the product for international expansion and improving discoverability across search engines and browsers.'
      ],
      tags: ['React', 'Next', 'SSR', 'SEO', 'Performance']
    },
    {
      id: '5',
      company: 'Solar Digital',
      role: 'React / Vue Developer',
      period: 'Jul 2022 - Nov 2022',
      location: 'Remote',
      employment_type: 'Full-time (contract)',
      descriptions: [
        'Business-improvement and e-commerce client applications.',
        'Led front-end development across multiple React and Vue projects, owning technical decisions, delivering business-critical functionality, and driving products through successful production releases.'
      ],
      tags: ['React', 'Vue', 'VanillaJS', 'Figma']
    },
    {
      id: '6',
      company: 'RadantService',
      role: 'React Developer',
      period: 'Feb 2021 - May 2022',
      location: 'Remote',
      employment_type: 'Full-time',
      descriptions: [
        'Sporting-goods e-commerce/marketplace platform.',
        'Contributed to the successful delivery of a sporting-goods marketplace, building core product functionality, improving the customer purchasing experience, and supporting the platform through production and ongoing enhancements.'
      ],
      tags: ['React', 'VanillaJS', 'CRM', 'TS', 'Figma']
    },
    {
      id: '7',
      company: 'Company INC',
      role: 'Front-End Developer',
      period: 'Jan 2019 - Feb 2021',
      location: 'Remote',
      employment_type: 'Full-time',
      descriptions: ['Developed responsive landing pages and advertising campaigns, including WordPress-based websites, improving page performance, SEO, and cross-browser compatibility while delivering consistent user experiences across devices.'],
      tags: ['HTML5', 'CSS3', 'SASS', 'Responsive', 'Adobe Photoshop', 'Avacode']
    },
  ],
  skills: [
    'HTML5 / CSS3',
    'JS / TS',
    'React / Next.js',
    'React Native',
    'Vue / Nuxt.js',
    'Redux / Zustand / TanStack',
    'REST / GraphQL / WebSocket',
    'Node / Nest / MongoDB',
    'AWS',
    'Docker / CI/CD',
    'AWS',
    'Git',
    'Figma',
    'Tailwind CSS / Shadcn',
    'Vite/Webpack',
    'PWA',
    'Electron',
    'Chrome Extensions',
    'React Testing Library / Playwright',
    'Make/n8n',
    'Claude Code / MCP',
    'LLM API '
  ],
  education: [
    {
      id: '1',
      institution: 'Technology / Engineering - Lviv Polytechnic National University',
      degree: 'Master\'s Degree',
      period: '2015 - 2020',
    },
  ],
}
