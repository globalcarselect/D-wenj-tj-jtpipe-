/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  images: {
    domains: ['www.cn-pipes.com', 'cdn.cn-pipes.com', 'images.unsplash.com', 'via.placeholder.com', 'localhost'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // Allow local images to be served directly
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // SEO optimizations
  trailingSlash: true,
  // Bundle optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig