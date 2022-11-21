import { Box, Container, Heading, Text } from '@chakra-ui/react';

type LandingBodyProps = {};

export default function LandingBody(props: LandingBodyProps) {
  return (
    <Box
      w="100vw"
      h="100vh"
      color="white"
      display="flex"
      justifyContent="center">
      <Container maxW={900}>
        <Heading>Who are We?</Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Container>
    </Box>
  );
}
