import '../styles/globals.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import ZendeskWidget from '../features/contact';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
      <ZendeskWidget/>
    </Layout>
  </ChakraProvider>)
}
