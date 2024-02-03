import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen p-12 md:p-24 overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
