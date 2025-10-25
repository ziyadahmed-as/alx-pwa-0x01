// pages/_document.tsx

import { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document configuration for Next.js.
 * This file enables Progressive Web App (PWA) support
 * by linking the manifest file, defining theme colors,
 * and providing icon references for various platforms.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link the PWA manifest file */}
        <link rel="manifest" href="/manifest.json" />

        {/* Define the theme color for browser UI elements */}
        <meta name="theme-color" content="#0070f3" />

        {/* Application icons for different devices */}
        <link
          rel="icon"
          href="/icons/android-chrome-192x192.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-152x152.png"
          type="image/png"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
