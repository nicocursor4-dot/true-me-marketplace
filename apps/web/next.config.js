/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@trueme/shared', '@trueme/ui'],
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
