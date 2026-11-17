import { projects } from './projects.js';

// Homepage copy is independent of the individual case-study pages.
const homepageCopy = {
 'quick-meal': {
  category: '01 / FOOD ORDERING',
  focus: 'PRODUCT MANAGEMENT',
  subtitle: 'spend less time deciding what to order',
  description: 'A proposed DoorDash feature that helps students filter meals by time and budget, with estimated all-in prices shown before checkout.',
  tags: ['customer discovery', 'feature prioritization', 'mvp scoping'],
 },
 focuspet: {
  category: '02 / FOCUS & PRODUCTIVITY',
  focus: 'AGILE DEVELOPMENT',
  subtitle: 'stay focused with flexible blocking and gamified feedback',
  description: 'A gamified desktop app that combines flexible distraction blocking with focus feedback and visual insights into working habits and trends.',
  tags: ['feature prioritization', 'agile development', 'feedback-driven iteration'],
 },
 teamslot: {
  year: '2026',
  category: '03 / GROUP SCHEDULING',
  focus: 'PRODUCT DEVELOPMENT',
  subtitle: 'find a meeting time that fits your team’s rules',
  description: 'A group scheduling tool that combines availability with team-specific attendance rules to suggest meeting times, with Google Calendar integration.',
  tags: ['problem framing', 'workflow design', 'rapid prototyping'],
 },
 tabby: {
  year: '2026',
  category: '04 / BILL SPLITTING',
  focus: 'PRODUCT DEVELOPMENT',
  subtitle: 'split the bill based on what you ordered',
  description: 'A bill-splitting app that scans receipts, assigns individual and shared items to diners, and calculates each person’s total with configurable tax and tip splitting.',
  tags: ['problem framing', 'interaction design', 'product iteration'],
 },
 wetrack: {
  year: '2024',
  category: '05 / TRAVEL FINANCE',
  focus: 'SOFTWARE ENGINEERING',
  subtitle: 'manage your spending across currencies',
  description: 'A travel finance app for international students and frequent travelers that combines currency conversion, spending categories, and exchange rates with budgets and reminders.',
  tags: ['product ideation', 'ux design', 'data visualization'],
 },
};

export const homepageProjects = projects.map(project => {
 const copy = homepageCopy[project.slug];
 const year = copy.year || project.status.match(/\b(?:19|20)\d{2}\b/)?.[0];
 return { ...project, ...copy, status: year ? `${year} · ${copy.focus}` : copy.focus };
});
