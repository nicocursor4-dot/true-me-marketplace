/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@trueme/shared', '@trueme/ui'],
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.aceternity.com' },
      { protocol: 'https', hostname: 'deifkwefumgah.cloudfront.net' },
    ],
  },
  experimental: {
    // typedRoutes: true, // Disabled temporarily for development
  },
}

module.exports = nextConfig
