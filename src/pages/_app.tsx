import { ThemeProvider } from "styled-components";
import NextNprogress from "nextjs-progressbar";

import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";

import { Toaster } from "react-hot-toast";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: any) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <ThemeProvider theme={theme}>
          <NextNprogress
            color={theme.primary}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow
          />

          <Toaster position="bottom-right" />
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
