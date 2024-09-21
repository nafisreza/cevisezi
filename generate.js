import fs from 'fs';
import path from 'path';
import { Client, Databases, Query } from 'appwrite';

// Replace with Bogdan's domain
const DOMAIN = 'https://cevisezi.ro';

const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/blogs',
];

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66c61a5d000d73102232');

const databases = new Databases(client);

async function fetchBlogPosts() {
  try {
    const response = await databases.listDocuments(
      '66cc9c7700022ecf031b',
      '66cc9c98001bd1aa9d87',
      [Query.equal("status", "active")]
    );
    return response.documents;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

async function generateSitemap() {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static routes
  staticRoutes.forEach(route => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${DOMAIN}${route}</loc>\n`;
    sitemap += `    <changefreq>weekly</changefreq>\n`;
    sitemap += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
    sitemap += `  </url>\n`;
  });

  // Fetch and add dynamic blog post routes
  const blogPosts = await fetchBlogPosts();
  blogPosts.forEach(post => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${DOMAIN}/post/${post.$id}</loc>\n`;
    sitemap += `    <lastmod>${new Date(post.$updatedAt).toISOString()}</lastmod>\n`;
    sitemap += `    <changefreq>monthly</changefreq>\n`;
    sitemap += `    <priority>0.6</priority>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += '</urlset>';

  fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();