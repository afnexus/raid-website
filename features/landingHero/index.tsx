import ScrollAnimation from "./components/ScrollAnimation";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ScrollDownPrompt from "./components/ScrollDownPrompt";
import { motion, useScroll, useTransform } from "framer-motion";

type LandingHeroProps = {};

export default function LandingHero(props: LandingHeroProps) {
  const scrollYScale = 3;
  const scrollBoxRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: scrollBoxRef.current ? scrollBoxRef : undefined,
  });

  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const opacity = useTransform(
    scrollY,
    [0, scrollHeight * 0.7, scrollHeight * 0.8],
    [1, 1, 0]
  );

  useEffect(() => {
    setScrollHeight(window.innerHeight * scrollYScale);
  }, []);

  return (
    <Box ref={scrollBoxRef} h={`${scrollYScale * 110}vh`}>
      <Box
        display="flex"
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        position="fixed"
      >
        <motion.div style={{ opacity: opacity }}>
          <ScrollDownPrompt />
          <ScrollAnimation
            scale={scrollYScale}
            style={{ width: "100vw", height: "100vh" }}
          />
        </motion.div>
      </Box>
    </Box>
  );
}
