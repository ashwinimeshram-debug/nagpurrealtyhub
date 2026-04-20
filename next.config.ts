import type { NextConfig } from "next";

const nextConfig = {
  images: {
    // Allows images from common hosting providers
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Example: Unsplash
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // Example: ImgBB
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Example: Cloudinary
      }
    ],
  },
};

export default nextConfig;