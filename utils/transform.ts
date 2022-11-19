export type TransformData = {
  xscale?: number;
  yskew?: number;
  xskew?: number;
  yscale?: number;
  dx?: number;
  dy?: number;
  width?: number;
  height?: number;
};
export const setTransformData = (
  ctx: CanvasRenderingContext2D,
  tranformData: TransformData
) => {
  //xscale, yskew, xskew, yscale, dx, dy
  ctx.setTransform(
    tranformData.xscale ?? 1,
    tranformData.yskew ?? 0,
    tranformData.xskew ?? 0,
    tranformData.yscale ?? 1,
    (tranformData.dx ?? 0) -
      ((tranformData.width ?? 0) / 2) * (tranformData.xscale ?? 1),
    (tranformData.dy ?? 0) -
      ((tranformData.height ?? 0) / 2) * (tranformData.xscale ?? 1)
  );
};

export const applyTransformData = (
  a: TransformData,
  b: TransformData
): TransformData => {
  return {
    xscale: (a.xscale ?? 1) * (b.xscale ?? 1),
    yskew: (a.yskew ?? 0) + (b.yskew ?? 0),
    xskew: (a.xskew ?? 0) + (b.xskew ?? 0),
    yscale: (a.yscale ?? 1) * (b.yscale ?? 1),
    dx: (a.dx ?? 0) + (b.dx ?? 0),
    dy: (a.dy ?? 0) + (b.dy ?? 0),
    width: b.width ?? a.width ?? 0, //override if value is provided
    height: b.height ?? a.height ?? 0, //override if value is provided
  };
};
