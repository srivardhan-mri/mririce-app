const fs = require('fs');
const path = require('path');

// Function to slugify a string
const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word characters
    .replace(/[\s_-]+/g, '-') // replace spaces and underscores with a hyphen
    .replace(/^-+|-+$/g, ''); // remove leading or trailing hyphens
};

const today = new Date().toISOString().split('T')[0];

const staticUrls = [
  { loc: 'https://www.mririce.com/home', changefreq: 'daily', priority: '1.0', lastmod: today },
  { loc: 'https://www.mririce.com/about', changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: 'https://www.mririce.com/products', changefreq: 'weekly', priority: '0.9', lastmod: today },
  { loc: 'https://www.mririce.com/brands', changefreq: 'monthly', priority: '0.7', lastmod: today },
  { loc: 'https://www.mririce.com/quality', changefreq: 'monthly', priority: '0.7', lastmod: today },
  { loc: 'https://www.mririce.com/contact', changefreq: 'yearly', priority: '0.9', lastmod: today },
  { loc: 'https://www.mririce.com/privacy-policy', changefreq: 'yearly', priority: '0.3', lastmod: today },
  { loc: 'https://www.mririce.com/terms-conditions', changefreq: 'yearly', priority: '0.3', lastmod: today },
  { loc: 'https://www.mririce.com/blog', changefreq: 'weekly', priority: '0.6', lastmod: today }
];

const productFilePath = path.join(__dirname, 'src', 'app', 'services', 'data', 'products.json');
const brandFilePath = path.join(__dirname, 'src', 'app', 'services', 'data', 'brands.json');
const blogFilePath = path.join(__dirname, 'src', 'app', 'services', 'data', 'blogs.json');

const products = JSON.parse(fs.readFileSync(productFilePath, 'utf8'));
const brands = JSON.parse(fs.readFileSync(brandFilePath, 'utf8'));
const blogPosts = JSON.parse(fs.readFileSync(blogFilePath, 'utf8'));

const productUrls = products.map(product => ({
  loc: `https://www.mririce.com/products/${slugify(product.name)}`,
  changefreq: 'weekly',
  priority: '0.8',
  lastmod: product.lastmod || today
}));

const brandUrls = brands.map(brand => ({
  loc: `https://www.mririce.com/brands/${slugify(brand.name)}`,
  changefreq: 'monthly',
  priority: '0.7',
  lastmod: brand.lastmod || today
}));

const blogUrls = blogPosts.map(post => ({
  loc: `https://www.mririce.com/blog/${post.slug}`,
  changefreq: 'weekly',
  priority: '0.7',
  lastmod: post.lastmod || today
}));

const allUrls = [...staticUrls, ...productUrls, ...brandUrls, ...blogUrls];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>`;

const sitemapPath = path.join(__dirname, 'src', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapContent);

console.log('sitemap.xml generated successfully.');
