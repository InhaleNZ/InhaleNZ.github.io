import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: isDev ? undefined : 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
