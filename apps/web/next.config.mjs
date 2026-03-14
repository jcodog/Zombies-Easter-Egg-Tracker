/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  devIndicators: {
    position: "bottom-right",
  },
}

export default nextConfig
