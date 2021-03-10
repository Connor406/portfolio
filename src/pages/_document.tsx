import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/public/fonts/TradesmithRegular.aeb60701.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/public/fonts/TuesdayNight-Regular.fdd10873.ttf"
            as="font"
            crossOrigin=""
          />
          <link href="index.css" rel="stylesheet" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
