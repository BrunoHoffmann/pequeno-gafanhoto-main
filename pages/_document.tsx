import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/pg-logo.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/pg-logo.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/pg-logo.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/favicon/site.webmanifest" rel="manifest" />
        <link color="#000000" href="/pg-logo.svg" rel="mask-icon" />
        <link href="/favicon/favicon.ico" rel="shortcut icon" />
      </Head>
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
