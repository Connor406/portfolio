import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/TradesmithRegular.otf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/TuesdayNight-Regular.otf"
            as="font"
            crossOrigin="anonymous"
          />
          <link href="index.css" rel="stylesheet" />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
                <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', ${process.env.GOOGLE_ANALYTICS});
                </script>`,
            }}
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
