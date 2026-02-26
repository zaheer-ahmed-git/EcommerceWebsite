/** @type {import('next').NextConfig} */
const nextConfig = {
  // Firebase Hosting serves the static `out` folder.
  // Remove `output: "export"` when checkout needs a Node server.
  output: "export",
  images: {
    // The default image optimizer needs a server. Static export cannot use it.
    unoptimized: true,
  },
};

module.exports = nextConfig;
