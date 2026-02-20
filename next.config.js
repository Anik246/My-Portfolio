/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // prevents avif_node_dec.wasm errors on Netlify
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
