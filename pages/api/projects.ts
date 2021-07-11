import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { PROJECTS_PATH } from '../../lib/mdx';

export function getProjectSlugs(): string[] {
  return fs.readdirSync(PROJECTS_PATH);
}

type ProjectItems = {
  [key: string]: string;
};

export function getProjectBySlug(slug: string, fields: string[] = []): ProjectItems {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(PROJECTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: ProjectItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllProjects(fields: string[] = []): ProjectItems[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort projects by date in descending order
    .sort((project1, project2) =>
      (project1.date > project2.date ? -1 : 1));
  return projects;
}

export function getLatestProject(fields: string[] = []): ProjectItems {
  const slugs = getProjectSlugs();
  const project = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort projects by date in descending order
    .sort((project1, project2) =>
      (project1.date > project2.date ? -1 : 1))[0];
  return project;
}
