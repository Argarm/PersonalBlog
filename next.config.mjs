/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/Argarm.github.io',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/Argarm.github.io' : '',
};

export default nextConfig;
