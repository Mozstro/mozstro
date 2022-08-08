import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { SERVICES_PATH } from '../../lib/mdx';

export function getServiceSlugs(): string[] {
  return fs.readdirSync(SERVICES_PATH);
}

type ServiceItems = {
  [key: string]: string;
};

export function getServiceBySlug(slug: string, fields: string[] = []): ServiceItems {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(SERVICES_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: ServiceItems = {};

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

export function getAllServices(fields: string[] = []): ServiceItems[] {
  const slugs = getServiceSlugs();
  const services = slugs
    .map((slug) => getServiceBySlug(slug, fields))
    // sort services by date in descending order
    .sort((service1, service2) =>
      (service1.date > service2.date ? -1 : 1));
  return services;
}

export function getLatestService(fields: string[] = []): ServiceItems {
  const slugs = getServiceSlugs();
  const service = slugs
    .map((slug) => getServiceBySlug(slug, fields))
    // sort services by date in descending order
    .sort((service1, service2) =>
      (service1.date > service2.date ? -1 : 1))[0];
  return service;
}
