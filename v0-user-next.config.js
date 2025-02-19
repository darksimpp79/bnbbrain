/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sjc.microlink.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "v0.blob.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Dodaj tę opcję, aby upewnić się, że CSS jest prawidłowo ładowany
  poweredByHeader: false,
  experimental: {
    optimizeCss: true, // Włącz optymalizację CSS
  },
}

module.exports = nextConfig

