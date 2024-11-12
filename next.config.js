/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "de-DE", "nl-NL"],
    defaultLocale: "en-US",
  },
};
module.exports = nextConfig;
