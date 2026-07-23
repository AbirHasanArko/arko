import createMDX from '@next/mdx';/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'huggingface.co' },
    ],
  },
  reactStrictMode: true,
};

const withMDX = createMDX();

export default withMDX(nextConfig);