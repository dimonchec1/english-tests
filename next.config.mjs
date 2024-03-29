// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        CERTIFICATION_URL: process.env.CERTIFICATION_URL || 'test'
    },
  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
        //TODO: DANGEROUS, REMOVE PLS
        {
            hostname: '65.mchs.gov.ru',
        },
        {
            hostname: 'upload.wikimedia.org'
        }
    ]
  }
};
export default config;
