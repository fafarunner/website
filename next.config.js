const { withContentlayer } = require("next-contentlayer2");

const basePath = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/issues",
        destination: "https://github.com/fafarunner/fafarunner/issues",
        permanent: false,
      },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: "raw.githubusercontent.com" },
      { hostname: "microsoft.com" },
      { hostname: "snapcraft.io" },
      { hostname: "flathub.org" },
      { hostname: "lh3.googleusercontent.com" },
    ],
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
  },
  env: {
    NEXT_PUBLIC_GIT_COMMIT_SHA: process.env.GIT_COMMIT_SHA,
    NEXT_PUBLIC_GOOGLE_ID: process.env.GOOGLE_ID,
    NEXT_PUBLIC_SHOW_PARTICLES: process.env.SHOW_PARTICLES,
    NEXT_PUBLIC_WEBSITE_GLOBAL_GRAY: process.env.WEBSITE_GLOBAL_GRAY,
    GH_TOKEN: process.env.GH_TOKEN,
    GH_REPO_OWNER: process.env.GH_REPO_OWNER,
    GH_REPO: process.env.GH_REPO,
  },
};

module.exports = withContentlayer(nextConfig);
