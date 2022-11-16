import { Box, Image } from '@chakra-ui/react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { planeUp, planeFront } from '../../data/paths';
import { useFlubber } from '../../utils/use-flubber';

export type LandingScreenProps = {};

const paths = [planeUp, planeFront];

export default function LandingScreen(props: LandingScreenProps) {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, 1]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [1, 1, 1.3, 90]
  );
  const path = useFlubber(progress, paths);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <Box h="300vh">
      <Box
        display="flex"
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        position="fixed">
        <Box position="relative" w="900px">
          <Image src="/logo/RAID.svg" alt="raid" w="100%" />
          <svg
            width="100vw"
            height="100vh"
            style={{ position: 'fixed', left: 0, top: 0 }}>
            <motion.path
              fill="#202020"
              d={path}
              scale={scale}
              style={{
                x: 'calc(50vw - 220px)',
                y: 'calc(50vh - 170px)',
                translateY: translateY,
              }}
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}
