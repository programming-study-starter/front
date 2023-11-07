/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/back-api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACK_API_URL}/:path*`
      }
    ];
  }
}

module.exports = nextConfig
