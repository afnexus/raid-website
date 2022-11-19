import ScrollAnimation from './ScrollAnimation';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { useRef } from 'react';

export default function LandingScreen() {
  const scrollYScale = 3;
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Box background="black" overflowX="hidden">
      <Box ref={scrollBoxRef} h={`${scrollYScale * 100}vh`}>
        <Box
          display="flex"
          w="100vw"
          h="100vh"
          alignItems="center"
          justifyContent="center"
          position="fixed">
          <ScrollAnimation
            style={{ width: '100vw', height: '100vh' }}
            scale={scrollYScale}
            scrollBoxRef={scrollBoxRef}
          />
        </Box>
      </Box>
      <Box
        w="100vw"
        h="100vh"
        background="black"
        color="white"
        display="flex"
        justifyContent="center">
        <Container maxW={900} m={24}>
          <Heading>who are we?</Heading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
