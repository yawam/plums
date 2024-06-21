/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "utfs.io" }] },
};
// utfs.io
export default nextConfig;
