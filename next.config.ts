import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/healthcheck",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
