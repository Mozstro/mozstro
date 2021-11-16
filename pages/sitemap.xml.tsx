import React from 'react';
import fs from 'fs';
import { getAllPosts } from './api/posts';
import { getAllProjects } from './api/projects';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:420',
    production: 'https://www.mozstro.com',
  }[process.env.NODE_ENV];

  const pages = fs
    .readdirSync('pages')
    .filter((page) => ![
      '_app.tsx',
      '_document.tsx',
      '_error.tsx',
      'sitemap.xml.tsx',
      '500.tsx',
      '404.tsx',
      'api',
      '.DS_Store',
    ].includes(page))
    .map((pagePath) => `${baseUrl}/${pagePath}`);

  const posts = await getAllPosts(['slug', 'date']);
  const projects = await getAllProjects(['slug', 'date']);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
    .map((url) => `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `)
    .join('')}
      ${posts
    .map(({ slug, date }) => `
              <url>
                <loc>${baseUrl}/posts/${slug}</loc>
                <lastmod>${date}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `)
    .join('')}
      ${projects
    .map(({ slug, date }) => `
              <url>
                <loc>${baseUrl}/projects/${slug}</loc>
                <lastmod>${date}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `)
    .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
