import Head from "next/head";
import InnoFest from "../features/innofest";
import { Stack } from "@chakra-ui/react";
// @ts-ignore
import logo1 from '../public/swift.png';
import { Box, LinkOverlay } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

export default function Home() {

  const logo = require('../public/swift.png');

  return (
    <div>
      <Head>
        <title>RAiD</title>
        <meta
          name="description"
          content="The unofficially official website for RAiD"
        />
        <link rel="icon" href="/raid.svg" />
      </Head>
      <Box style={{padding: 35}}>
        <Image width='125px' src='https://i.imgur.com/uViUK5S.png' alt='SWiFT' />
      </Box>
      <Stack overflowX="hidden">
        <InnoFest />
      </Stack>
    </div>
  );
}
