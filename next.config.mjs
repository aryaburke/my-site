/** @type {import('next').NextConfig} */
import nextFileLoader from "next-file-loader";

const nextConfig = {
  distDir: "./build", // Changes the build output directory to `./build`.
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.md$/,
      // This is the asset module.
      type: "asset/source",
    });
    return config;
  },
};

const withNextFileLoader = nextFileLoader([
  {
    // Video loader
    test: /\.(mp4|webm|mkv|ogg|ogv|wmv|avi|mov|flv|m4v|3gp)$/i,
    outputPath: "static/videos/[name].[hash:8].[ext]",
  },
  {
    // Audio loader
    test: /\.(mp3|wav|flac|ogg|aac|m4a|wma|ape)$/i,
    outputPath: "static/audios/[name].[hash:8].[ext]",
  },
  {
    // Cursor/font loader
    test: /\.(ani|ttf)$/i,
    outputPath: "static/cursors/[name].[ext]",
  },
  {
    // Custom file content resolution
    test: /\.(rar|zip)$/i,
    outputPath: "static/other/[name].[hash:8].[ext]",
    resolve: ({ src, content, resourcePath }) => {
      return `export default {
        src: "${src}",
        fileSize: "100KB",
        resourcePath: "${resourcePath}"
      }`;
    },
  },
]);

export default withNextFileLoader(nextConfig);
