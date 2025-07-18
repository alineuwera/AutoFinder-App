import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},  // just empty object or remove this line completely if you want
};
// next.config.js
module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};


export default nextConfig;
