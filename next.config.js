/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true
    },
    basePath: '/zinePortfolio',
    assetPrefix: '/zinePortfolio'
  }
  
  module.exports = nextConfig