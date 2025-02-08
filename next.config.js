/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/1.6Exercise",
  assetPrefix: process.env.NODE_ENV === "production" ? "/1.6Exercise/" : "",
};

module.exports = nextConfig;
