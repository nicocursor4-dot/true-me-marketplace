/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@trueme/shared', '@trueme/ui'],
  experimental: {
    // typedRoutes: true, // Disabled temporarily for development
  },
}

module.exports = nextConfig
