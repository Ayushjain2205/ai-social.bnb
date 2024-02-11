import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.2.1/inobounce.min.js"
          integrity="sha512-Yqdl0nKSSuorWbQ4S9gPMG4THi/meaKxojlnfsak9isATD+dYT2/e7YLw6GyqR1W5uk9rSmv7v4Uu9keCvbYAQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
