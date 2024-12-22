/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./build", // Changes the build output directory to `./dist`.
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.md$/,
      // This is the asset module.
      type: "asset/source",
    });
    return config;
  },
};

// module.exports = {};

export default nextConfig;
