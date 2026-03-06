/**
 * Centralized content for the portfolio. Edit copy and links here.
 */

export const site = {
  title: 'Portfolio',
  tagline: 'Developer · Gamer · Creator',
} as const;

export const navLinks = [
  { href: '#about', label: 'Level 1: About' },
  { href: '#what-i-do', label: 'Stats' },
  { href: '#hobbies', label: 'Achievements' },
  { href: '#projects', label: 'Quest log' },
  { href: '#contact', label: 'Insert coin' },
] as const;

export const hero = {
  title: 'Welcome',
  subtitle: 'Press Start to continue',
  cta: 'Enter',
} as const;

export const about = {
  title: 'Level 1: About',
  bio: `I'm a developer who loves building things and playing games. This site is my base camp — where I share what I do, what I like, and where I'm headed.`,
  education: 'Your degree or learning path',
  location: 'Earth (for now)',
  avatarAlt: 'Profile',
} as const;

export const skills = [
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'CSS', level: 85 },
  { name: 'Astro', level: 70 },
] as const;

export const hobbies = [
  { title: 'Gaming', description: 'Retro and indie games, RPGs, and the occasional speedrun.' },
  { title: 'Music', description: 'Listening and sometimes making — chiptune and synthwave.' },
  { title: 'Reading', description: 'Sci-fi, fantasy, and tech books.' },
  { title: 'Side projects', description: 'Small tools and experiments that may or may not ship.' },
] as const;

export const projects = [
  { title: 'Project Alpha', description: 'A cool thing I built. Tech: Astro, TypeScript.', href: '#', tags: ['Astro', 'TS'] },
  { title: 'Project Beta', description: 'Another cool thing. Maybe a game or a CLI tool.', href: '#', tags: ['Node', 'Game'] },
  { title: 'Project Gamma', description: 'Work in progress or past experiment.', href: '#', tags: ['React'] },
] as const;

export const contact = {
  title: 'Insert coin to contact',
  links: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Email', href: 'mailto:you@example.com' },
  ],
} as const;

export const footer = {
  line: 'No continues remaining.',
  copyright: `© ${new Date().getFullYear()} All rights reserved.`,
} as const;
