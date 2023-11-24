/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // {
          //   key: 'Content-Type' , 
          //   value : 'application/json',
          // },
          {
            key: 'Access-Control-Allow-Origin', 
            value : '*',
          },
          {
            key: 'Access-Control-Allow_Credntials', 
            value  : 'true',
          },
        ],
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/back-api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACK_API_URL}/:path*`
      },
    ];
  }
}

module.exports = nextConfig
