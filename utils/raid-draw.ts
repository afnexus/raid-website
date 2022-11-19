import { dChar, iChar, planeFront, planeUp, rChar } from '../data/paths';
import {
  applyTransformData,
  setTransformData,
  TransformData,
} from './transform';

const PLANE_Y_OFFSET_MULTIPLIER = -194; //This is a magic number
const PLANE_W = 300;

export const draw = (ctx: CanvasRenderingContext2D, progress: number) => {
  setTransformData(ctx, {});
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const scale = Math.min(ctx.canvas.width / 1000, 1);

  function handleRaidLogo(transformData: TransformData) {
    ctx.fillStyle = `rgba(0,0,0,${1 - progress * 2})`;
    const rPath = new Path2D(rChar);
    setTransformData(ctx, transformData);
    ctx.fill(rPath);
    const iPath = new Path2D(iChar);
    setTransformData(ctx, transformData);
    ctx.fill(iPath);
    const dPath = new Path2D(dChar);
    setTransformData(ctx, transformData);
    ctx.fill(dPath);
  }

  function handlePlaneFront(
    transformData: TransformData,
    rotateProgress: number
  ) {
    const planeUpPath = new Path2D(planeUp);
    const dy = -(
      rotateProgress *
      (PLANE_Y_OFFSET_MULTIPLIER * (transformData.yscale ?? 1))
    ); //to follow the y scaling of the plane.
    const t: TransformData = applyTransformData(transformData, {
      yscale: 1 - rotateProgress,
      dy,
    });

    setTransformData(ctx, t);
    // ctx.setTransform(1, 0, 0, 1 * 1 - progress, 0, 0); //scale the yscale to give the illusion of turning forward
    ctx.fill(planeUpPath);
  }

  function handlePlaneUp(transformData: TransformData, rotateProgress: number) {
    const planeFrontPath = new Path2D(planeFront);
    setTransformData(ctx, transformData);
    ctx.fill(planeFrontPath);
  }

  function handlePlane(tranformData: TransformData) {
    ctx.fillStyle = '#000000';
    const rotateProgress =
      Math.sin(Math.max(0, (progress - 0.3) * 1.5) * 2.6) * 1.5;
    const lScale =
      progress > 0.7 ? Math.pow(2, 1 + 20 * (progress - 0.7)) / 2 : 1;
    const t: TransformData = applyTransformData(tranformData, {
      dx: ctx.canvas.width / 2 - 70 * scale * (1 - progress),
      dy:
        (-ctx.canvas.height / 2) * Math.sin(progress * 2.6) * 1 +
        (scale - 1) +
        ctx.canvas.height / 2,
      yscale: lScale,
      xscale: lScale,
    });

    handlePlaneFront(t, rotateProgress);
    handlePlaneUp(t, rotateProgress);
  }
  handleRaidLogo({
    yscale: scale * 3,
    xscale: scale * 3,
    dx: ctx.canvas.width / 2,
    dy: ctx.canvas.height / 2,
    width: 300,
    height: 200,
  });
  handlePlane({
    yscale: scale,
    xscale: scale,
    width: PLANE_W,
    height: PLANE_W,
  });
};
