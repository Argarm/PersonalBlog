// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // Necesario para next/image en export estático
  },
  trailingSlash: true, // Recomendado para GitHub Pages
  basePath: '', // Si tu repo es un subdirectorio, ponlo aquí
  assetPrefix: '', // Si tu repo es un subdirectorio, ponlo aquí
};

export default nextConfig;
