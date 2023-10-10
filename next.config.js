/** @type {import('next').NextConfig} */

const imagesHost = process.env.IMAGE_HOST_NAME || 'localhost';
const imagesCacheTTL = process.env.IMAGE_CACHE_TTL || 60;

const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: +imagesCacheTTL,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: imagesHost
      }
    ]
  }
}

const env = process.env.NEXT_PUBLIC_APP_ENV || 'local';

require('dotenv').config({
  path: `.env.${env}`,
});

module.exports = nextConfig