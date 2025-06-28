import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/api/payment/notification/:path",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Replace this actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST",
          },
          {
            key: "Access-Control-Allow-headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept,Accept-Version, Content-Lenght, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "gx5y1lnjlpdfvkim.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
