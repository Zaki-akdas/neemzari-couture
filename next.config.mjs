/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // We use native <img> tags (not next/image) so the site is simple and the
  // live preview works without image-optimization requests. Swap to next/image
  // later if you need automatic AVIF/WebP and srcset generation.
  images: { unoptimized: true },
  // Allow the sandbox live-preview origin to reach the dev server.
  allowedDevOrigins: ["*.e2b.app"],
};

export default nextConfig;
