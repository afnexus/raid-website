import { Spinner } from '@chakra-ui/react';
import React, { CanvasHTMLAttributes, useEffect, useRef } from 'react';
import { draw } from '../../utils/raid-draw';

export type ScrollAnimationProps = CanvasHTMLAttributes<HTMLCanvasElement> & {
  scale: number;
};

export default function ScrollAnimation(props: ScrollAnimationProps) {
  const { scale } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onDraw = (resize?: boolean) => {
    const progress = window.scrollY / (window.innerHeight * scale * 0.5);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    if (resize) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    draw(context, progress);
  };

  useEffect(() => {
    onDraw(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      onDraw();
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      onDraw(true);
    };
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}
