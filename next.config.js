/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // The Arena preview serves the app from a *.e2b.app host.
  allowedDevOrigins: ["*.e2b.app"],
  // Do not advertise the framework version.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          // Note: no X-Frame-Options / frame-ancestors here on purpose, so the
          // sandboxed live preview can keep embedding the app.
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/portrait.:ext(webp|png)",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
    ];
  },
};

module.exports = nextConfig;
