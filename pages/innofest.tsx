import Head from "next/head";
import InnoFest from "../features/innofest";
import { Stack } from "@chakra-ui/react";

export default function Home() {
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
      <Stack overflowX="hidden">
        <InnoFest />
      </Stack>
    </div>
  );
}
