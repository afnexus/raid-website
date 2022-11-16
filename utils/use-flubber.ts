//from https://codesandbox.io/s/framer-motion-morphsvg-example-dp7to?from-embed=&file=/src/use-flubber.ts:0-371

import { interpolate } from 'flubber'; //flubber does not have type definitions
import { MotionValue, useTransform } from 'framer-motion';

export const getIndex = (_: any, index: number) => index;

export function useFlubber(progress: MotionValue<number>, paths: string[]) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a: any, b: any) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  } as any); //flubber does not have type definitions
}
