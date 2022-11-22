import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import ZendeskWidget from "../features/contact";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
        <ZendeskWidget />
      </Layout>
    </ChakraProvider>
  );
}
