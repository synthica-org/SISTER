/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/apply",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSc851kN-KrRSHFF6xYTc-9m6YUf_W20Oq0uvWsQ5x2nZxeOqg/viewform?usp=header",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
