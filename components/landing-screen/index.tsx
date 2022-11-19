import { Box, Image } from '@chakra-ui/react';
import { planeUp, planeFront } from '../../data/paths';
import { useFlubber } from '../../utils/use-flubber';
import ScrollAnimation from './ScrollAnimation';

export type LandingScreenProps = {};

const paths = [planeUp, planeFront];

export default function LandingScreen(props: LandingScreenProps) {
  const scale = 3;
  return (
    <Box h={`${scale * 100}vh`}>
      <Box
        display="flex"
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        position="fixed">
        <ScrollAnimation
          style={{ width: '100vw', height: '100vh' }}
          scale={scale}
        />
      </Box>
    </Box>
  );
}
