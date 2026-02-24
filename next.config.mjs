/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export", // 👈 เพิ่มอันนี้
  basePath: process.env.NEXT_PUBLIC_BASE_PATH, /* path /car-insurance-demo */
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
