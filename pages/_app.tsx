import "../styles/globals.css";
import "../node_modules/@afnexus/hummingbird-ui-assets/dist/main.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import ZendeskWidget from "../features/contact";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "@afnexus/hummingbird-ui-react";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme(darkTheme);
  theme.typography.button.fontWeight = "bold";
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
        <ZendeskWidget />
      </Layout>
    </ThemeProvider>
  );
}
