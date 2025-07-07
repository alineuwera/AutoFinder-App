import type { NextConfig } from "next";

const nextConfig: NextConfig & {
  experimental?: {
    turbopack?: boolean;
  };
} = {
  experimental: {
    turbopack: false, // Explicitly disable Turbopack to avoid the font module error
  },
};

export default nextConfig;