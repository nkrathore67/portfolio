/**
 * Centralized content for the portfolio. Edit copy and links here.
 */

export const site = {
  title: 'Neeraj Kumar Rathor',
  tagline: 'Software Engineer · Cloud · DevOps',
} as const;

export const navLinks = [
  { href: 'about', label: 'Level 1: About' },
  { href: 'experience', label: 'XP Log' },
  { href: 'skills', label: 'Stats' },
  { href: 'hobbies', label: 'Achievements' },
  { href: 'projects', label: 'Quest log' },
  { href: 'contact', label: 'Insert coin' },
] as const;

export const hero = {
  title: 'Neeraj Kumar Rathor',
  subtitle: 'Press Start to continue',
  cta: 'Enter',
} as const;

export const about = {
  title: 'Level 1: About',
  bio: `Software Engineer at Denso (Tokyo, Japan) building cloud-native and full-stack solutions for automotive and enterprise systems. M.Tech in CSE from IIT Hyderabad. AWS Certified Solutions Architect with hands-on experience in DevOps, infrastructure automation (Terraform, Ansible), CI/CD pipelines, and observability. Passionate about high-performance systems, clean architecture, and open-source tools.`,
  education: 'M.Tech CSE — IIT Hyderabad (2024, CGPA 7.57)  ·  B.E. CSE — MBM Engineering College, Jodhpur (2021, CGPA 7.95)',
  location: 'Tokyo, Japan',
  avatarAlt: 'Neeraj Kumar Rathor',
} as const;

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Denso',
    location: 'Tokyo, Japan',
    period: 'Oct 2024 – Present',
    bullets: [
      'Build cloud-native applications and full-stack solutions for automotive and enterprise systems.',
      'Design and implement Infrastructure as Code (IaC) using Terraform for scalable cloud deployments.',
      'Manage CI/CD pipelines (GitHub Actions, Jenkins) to automate build, test, and deployment processes.',
      'Optimise AWS infrastructure: EC2, RDS, S3, CloudFront, and Load Balancers for high availability.',
      'Implement observability and monitoring with Prometheus, Grafana, and CloudWatch.',
      'Full-stack development with React (frontend) and Node.js (backend).',
    ],
  },
  {
    role: 'Software Developer',
    company: 'AppPerfect Corp.',
    location: 'India',
    period: 'Feb 2021 – Jul 2022',
    bullets: [
      'Designed, developed, and maintained software features and products.',
      'Led and coordinated engineering teams across multiple deliverables.',
      'Added support for newly released browsers and development platforms.',
      'Debugged existing products and wrote functional specs and test plans.',
    ],
  },
  {
    role: 'Intern',
    company: 'LinuxWorld Informatics Pvt. Ltd.',
    location: 'India',
    period: 'Jun 2019 – Jul 2019',
    bullets: [
      'Trained in RHEL7/8, Ansible, AWS, Hadoop, and Docker.',
      'Built an Automated Python CGI project integrating multiple technologies end-to-end.',
      'Showcased a startup on the Jazbaa platform under the IIEC community.',
    ],
  },
] as const;

export const skills = [
  { name: 'AWS', level: 90 },
  { name: 'Docker/K8s', level: 85 },
  { name: 'CI/CD', level: 85 },
  { name: 'Grafana', level: 80 },
  { name: 'Terraform', level: 80 },
  { name: 'Python', level: 80 },
  { name: 'Ansible', level: 75 },
  { name: 'C++', level: 75 },
  { name: 'React', level: 70 },
  { name: 'Node.js', level: 70 },
] as const;

export const hobbies = [
  {
    title: 'Football',
    description: 'Regular player — love the teamwork and competition on the field.',
  },
  {
    title: 'Table Tennis',
    description: 'Quick reflexes and strategy — a favourite way to unwind.',
  },
  {
    title: 'Swimming',
    description: 'Keeping fit and clearing the mind with regular sessions in the pool.',
  },
] as const;

export const projects = [
  {
    title: 'O2PL & SGT Scheduler',
    description: 'Two advanced concurrency control schedulers (Optimistic Two-Phase Locking & Serialization Graph Testing) for multi-threaded transaction processing on multi-core CPUs. Includes comparative analysis against BOCC and FOCC.',
    href: 'https://github.com/nkrathore67',
    tags: ['C++', 'Multithreading', 'Mutex'],
  },
  {
    title: 'Global Monitoring System',
    description: 'End-to-end monitoring for Kubernetes clusters, AWS services, Linux machines, databases, and logs. Covers website and backend observability.',
    href: 'https://github.com/nkrathore67',
    tags: ['Grafana', 'Prometheus', 'AWS', 'Selenium', 'Shell'],
  },
  {
    title: 'Polluting Bloom Filters via Flow Radar',
    description: 'Research project exposing false-positive vulnerabilities in Bloom filters used in network security applications.',
    href: 'https://github.com/nkrathore67',
    tags: ['Python', 'Networking', 'Security'],
  },
  {
    title: 'Qscape',
    description: 'Automated queue management system that analyses appointment databases and waiting room occupancy. Uses ML to estimate wait times.',
    href: 'https://github.com/nkrathore67',
    tags: ['AWS EC2', 'Machine Learning', 'Object Detection'],
  },
] as const;

export const contact = {
  title: 'Insert coin to contact',
  links: [
    { label: 'GitHub', href: 'https://github.com/nkrathore67' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/neeraj-kumar-rathor-7ab735181/' },
    { label: 'Email', href: 'mailto:nkrathore67@gmail.com' },
  ],
} as const;

export const footer = {
  line: 'No continues remaining.',
  copyright: `© ${new Date().getFullYear()} Neeraj Kumar Rathor. All rights reserved.`,
} as const;
