import fs from 'fs';
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');
export const PROJECTS_PATH = path.join(process.cwd(), 'projects');
export const SERVICES_PATH = path.join(process.cwd(), 'services');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

// projectFilePaths is the list of all mdx files inside the PROJECTS_PATH directory
export const projectFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

// serviceFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const serviceFilePaths = fs
  .readdirSync(SERVICES_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))