import React from 'react';
import fs from 'fs';

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:420',
    production: 'https://mydomain.com',
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync('pages')
    .filter((staticPage) => ![
      '_app.tsx',
      '_document.tsx',
      '_error.tsx',
      'sitemap.xml.tsx',
      '500.tsx',
      '404.tsx',
      '.DS_Store',
    ].includes(staticPage))
    .map((staticPagePath) => `${baseUrl}/${staticPagePath}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
    .map((url) => `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
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
