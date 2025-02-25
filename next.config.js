/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ceaseless-ocelot-977.convex.cloud",
        pathname: "/api/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
