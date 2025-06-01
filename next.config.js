/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enable the `app` directory
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Allow http protocol
        hostname: '**', // Allow any hostname
        port: '', // Leave empty for no specific port
        pathname: '/**', // Match all paths
      },
      {
        protocol: 'https', // Allow https protocol
        hostname: '**', // Allow any hostname
        port: '', // Leave empty for no specific port
        pathname: '/**', // Match all paths
      },
    ],
  },
};

export default nextConfig;
