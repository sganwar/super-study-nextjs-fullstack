// next.config.js

// 1. Import the 'version' from your project's package.json
const { version } = require('./package.json');

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 2. Expose the version as a public environment variable
  //    (NEXT_PUBLIC_ prefix makes it accessible on the client-side)
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
  /* other config options here */
};

export default nextConfig;