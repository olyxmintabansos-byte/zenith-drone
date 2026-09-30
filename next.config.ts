import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/zenith-drone",
  images: { unoptimized: true },
};

export default nextConfig;
