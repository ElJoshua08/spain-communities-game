import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-mad2-1.cdninstagram.com",
      }
    ]
  }
};

export default nextConfig;
