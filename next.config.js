/** @type {import('next').NextConfig} */
const nextConfig = {
 // output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      }
    ],
  },
  experimental: {
    // This allows all Cloud Workstations domains to connect to the dev server.
    allowedDevOrigins: ["*.cloudworkstations.dev"],
  },
};

module.exports = nextConfig;
