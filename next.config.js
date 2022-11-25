/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raid.swiftoffice.org", "github.com"],
  },
};

module.exports = nextConfig;
