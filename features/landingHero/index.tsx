import ScrollAnimation from "./components/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import ScrollDownPrompt from "./components/ScrollDownPrompt";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box } from "@mui/material";

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
    <motion.div style={{ opacity: opacity, overflowX: "hidden" }}>
      <Box ref={scrollBoxRef} sx={{ height: `${scrollYScale * 110}vh` }}>
        <Box
          sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          <ScrollDownPrompt />
          <ScrollAnimation
            scale={scrollYScale}
            style={{ width: "100vw", height: "100vh" }}
          />
        </Box>
      </Box>
    </motion.div>
  );
}
