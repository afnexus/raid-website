import {
  Text,
} from "@chakra-ui/react";
import { Container, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { nYellow } from "@afnexus/hummingbird-ui-assets";

export type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
  const router = useRouter();
  return (
    <Box
      w="100vw"
      position="absolute"
      justifyContent="center"
      zIndex={1000}
      my={3}
    >
      <Container maxW="container.xl" textAlign="center">
        <Button onClick={() => router.push("/")} variant="ghost">
          Home
        </Button>
        <Button onClick={() => router.push("/events")} variant="ghost">
          Events
        </Button>
        <Button onClick={() => router.push("/blog")} variant="ghost">
          Blog
        </Button>
        <Button
          onClick={() =>
            router.push("https://form.gov.sg/61ea66776c89fd001206bed0")
          }
          variant="ghost"
        >
          Join us
        </Button>
        <Button
          onClick={() => router.push("/innofest")}
          variant="solid"
          color={nYellow[400]}
        >
          <Text as="span" textShadow="0 0 10px #ffcd7e">InnoFest</Text>
        </Button>
      </Container>
    </Box>
  );
}
