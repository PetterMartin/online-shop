/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.noroff.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
