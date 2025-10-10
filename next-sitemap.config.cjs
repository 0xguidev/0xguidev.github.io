/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://0xguidev.github.io',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/dashboard/*', '/blog/*'],
};
