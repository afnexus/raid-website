import { motion, useScroll, useTransform } from "framer-motion";
import React, {
  CanvasHTMLAttributes,
  RefObject,
  useEffect,
  useRef,
} from "react";
import { draw } from "../utils/raid-draw";
import ScrollDownPrompt from "./ScrollDownPrompt";

export type ScrollAnimationProps = CanvasHTMLAttributes<HTMLCanvasElement> & {
  scale: number;
  scrollBoxRef: RefObject<HTMLDivElement>;
};

export default function ScrollAnimation(props: ScrollAnimationProps) {
  const { scale, scrollBoxRef } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({ target: scrollBoxRef });
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  const onDraw = (resize?: boolean) => {
    const progress = window.scrollY / (window.innerHeight * scale * 0.5);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    if (resize) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // var image = new Image();
    // image.src = "nightSkyBackground.svg";
    // image.onload = () => {
    draw(context, progress);
    // };
  };

  useEffect(() => {
    onDraw(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      onDraw();
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      onDraw(true);
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.div style={{ opacity }}>
      <ScrollDownPrompt />
      <canvas ref={canvasRef} {...props} />
    </motion.div>
  );
}
