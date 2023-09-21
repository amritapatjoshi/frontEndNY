/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

const env = process.env.NEXT_PUBLIC_APP_ENV || 'local';

require('dotenv').config({
  path: `.env.${env}`,
});

module.exports = nextConfig