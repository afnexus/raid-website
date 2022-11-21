import ScrollAnimation from "./components/ScrollAnimation";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";

type LandingHeroProps = {};

export default function LandingHero(props: LandingHeroProps) {
  const scrollYScale = 3;
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Box ref={scrollBoxRef} h={`${scrollYScale * 100}vh`}>
      <Box
        display="flex"
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        position="fixed"
      >
        <ScrollAnimation
          scale={scrollYScale}
          scrollBoxRef={scrollBoxRef}
          style={{ width: "100vw", height: "100vh" }}
        />
      </Box>
    </Box>
  );
}
