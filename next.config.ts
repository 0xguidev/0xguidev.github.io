import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const nextConfig: NextConfig = withPWA({
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
});

export default nextConfig;
