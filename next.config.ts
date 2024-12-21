import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
        protocol: "https",
        port: "",
        pathname: "/PokeAPI/**",
        search: ""
      }
    ]
  }
};

export default nextConfig;
