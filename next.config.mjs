/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/NOMBRE-DEL-REPOSITORIO',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/NOMBRE-DEL-REPOSITORIO/' : '',
};

export default nextConfig;
