/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 REQUIRED for GitHub Pages

  images: {
    unoptimized: true, // 👈 REQUIRED (next/image not supported on Pages)
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
    ],
  },
};

module.exports = nextConfig;
