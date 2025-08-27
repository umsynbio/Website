import type { NextConfig } from "next";


const SUBPATH = "/~umichsynbio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: SUBPATH, 
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    year: "2025",
    student_count: "36",
    NEXT_PUBLIC_BASE_PATH: SUBPATH,
  },
};

export default nextConfig;