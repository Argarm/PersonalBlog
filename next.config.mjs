/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/' : '',
};

export default nextConfig;
