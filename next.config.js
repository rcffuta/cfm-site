/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        allowedDevOrigins: ["http://192.168.8.233"], // 👈 Add your local IP here
    },
}

module.exports = nextConfig
