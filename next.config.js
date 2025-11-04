/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"], // ✅ autorise les images externes de Wikipedia
  },
};

module.exports = nextConfig;
