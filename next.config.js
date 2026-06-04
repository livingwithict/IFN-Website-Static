/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  
  // 1. THIS IS THE MAGIC FIX
  // It forces Next.js to export /support-innovation/index.html
  trailingSlash: true, 
  
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;