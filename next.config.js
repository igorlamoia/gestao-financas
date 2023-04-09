/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts', 'api.tsx'],
};

module.exports = nextConfig;
