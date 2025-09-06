
const fs = require('fs');
const path = require('path');

const urls = [
  { loc: 'https://www.mririce.com/home', changefreq: 'daily', priority: '1.0' },
  { loc: 'https://www.mririce.com/about', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://www.mririce.com/products', changefreq: 'weekly', priority: '0.9' },
  { loc: 'https://www.mririce.com/brands', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://www.mririce.com/quality', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://www.mririce.com/contact', changefreq: 'yearly', priority: '0.9' },
  { loc: 'https://www.mririce.com/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { loc: 'https://www.mririce.com/terms-conditions', changefreq: 'yearly', priority: '0.3' },
  { loc: 'https://www.mririce.com/blog', changefreq: 'weekly', priority: '0.6' }
];

const today = new Date().toISOString().split('T')[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>`;

const sitemapPath = path.join(__dirname, 'src', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapContent);

console.log('sitemap.xml generated successfully.');
