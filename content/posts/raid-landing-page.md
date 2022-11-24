---
title: "Making an Aircraft Fly on a Website"
tags: "code-n-tell, typescript, nextjs, canvas, hooks"
date: "2022-11-21"
author: "Small Ryan"
---

### The Challenge

When I was tasked to design the landing page for the RAID website, I wanted to create a landing page that was unique and cool, to show of our capabilities as an innovation department. Having been inspired by Apple and Huawei, which have cool scroll effects that move and spin 3D renders of their products, I felt like it would be a suitable challenge to include a similar effect in our landing page. However, lacking the time and resources to build and render a 3D animation, I had to think of other means to achieve a similar effect.

Inspired by how the original DOOM used smartly used optical illusions to make the game appear 3D, despite existing in a 2D game engine (you can read more about it [here](https://doomwiki.org/wiki/Doom_rendering_engine#:~:text=The%20Doom%20rendering%20engine%20is,Dave%20Taylor%2C%20and%20Paul%20Radek).), I challenged myself to make the aircraft in the RAiD logo fly up and towards the user, as they scrolled down the page.

### Setting Up the Draw Function

I decided to use the html5 canvas element so that I would have more precise control of how the svgs are transformed and rendered. To do this, I first created a canvas element, and added a ref to it. This ref will allow my draw function to access the canvas's context, enabling it to draw onto the canvas.

```
//ScrollAnimation.tsx
const canvasRef = useRef<HTMLCanvasElement>(null);
...
return (
	<canvas ref={canvasRef} {...props} />
);
```

I created two useEffect hooks to subscribe `onDraw` to the `onscroll` and `onresize` events.

```
//ScrollAnimation.tsx
useEffect(() => {
	const onScroll = () => {
		onDraw();
	};
	window.addEventListener("scroll", onScroll);

	return () => window.removeEventListener("scroll", onScroll);
}, [onDraw]);

useEffect(() => {
	const onResize = () => {
		onDraw(true);
	};
	window.addEventListener("resize", onResize);

	return () => window.removeEventListener("resize", onResize);
}, [onDraw]);
```

The `onDraw` functon then passes the canvas's context and a progress value to the draw function, and handles resizing of the canvas as an option. The progress value is a normalised number which represents the progress of the animation, 0 being the start and 1 being the end of the animation.

```
//ScrollAnimation.tsx
const onDraw = useCallback(
	(resize?: boolean) => {
		const progress = window.scrollY / (window.innerHeight * scale * 0.5);
		const canvas = canvasRef.current;
		if (!canvas) return;

		const context = canvas.getContext("2d");
		if (!context) return;
		if (resize) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
		draw(context, progress); //in raid-draw.ts
	},
	[scale]
);
```

Now we have a blank canvas to play with, controlled by draw function that is invoked everytime the user scrolls and resizes the page.

### Creating the Illusion of Rotation

To create the illusion of the aircraft rotating to face the user, I had the idea to layer two SVGs of the aircraft, a bottom view (facing the top) and a front view (facing the user), and "squash" the bottom view as the animation progresses.

To achieve this, I first split the draw function to handle the diffrent objects drawn to the canvas.

```
//raid-draw.ts
export const draw = (ctx: CanvasRenderingContext2D, progress: number) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); //clear the canvas

  function handleRaidLogo(transformData: TransformData) {
		//Draw the R, I and D characters in the RAiD logo
		...
  }


  function handlePlaneUp() {
		//Draw the up view of the aircraft (facing up)
		...
  }

  function handlePlaneFront(
  ) {
		//Draw the front view of the aircraft (facing the user)
		...
  }

  function handlePlane() {
		//Draw the aircraft
		...
		handlePlaneFront();
		handlePlaneUp();
  }

  handleRaidLogo();
  handlePlane();
};
```

To draw the diffrent SVGs to the canvas, I created new Path2D objects for each SVG, and used `ctx.fill(path)` to draw the SVG to canvas,

```
//raid-draw.ts

const planeUpPath = new Path2D(planeUp);

export const draw = (ctx: CanvasRenderingContext2D, progress: number) => {
	...
	function handlePlaneUp() {
		ctx.fill(planeUpPath)
	}
	...
	function handlePlaneFront() {
		ctx.fill(planeUpPath)
	}
	...
}
```

I then used `ctx.setTransform(a,b,c,d,e,f)` (params reperesent: `xscale, yskew, xskew, yscale, dx, dy` respectively) to modify the `yScale` of the planeUp as the animation progresses

```
//raid-draw.ts
...
function handlePlaneUp() {
	//xscale, yskew, xskew, yscale, dx, dy
	ctx.setTransform(1,0,0,1-progress,0,0)
	ctx.fill(planeUpPath)
}
...
```

![1](/posts/raid-landing-page/1.gif)

This however, presented a new problem. The SVG was scaling upwards along the yAxis, as the anchor point of the `yScale` was the top left point of the SVG, which made the SVG appear to move upwards and away from the aircraft front SVG. To make the yScale tranformation appear to converge at the aircraft front SVG, I needed to also move the aircraft up SVG downwards as the animation progressed.

```
//raid-draw.ts
...
const PLANE_Y_OFFSET_MULTIPLIER = -194; //This is a magic number, which i assume represents the number of pixels between the top and the rotation axis of the aircraft.
...
function handlePlaneUp() {
	//xscale, yskew, xskew, yscale, dx, dy
	const dy = PLANE_Y_OFFSET_MULTIPLIER * progress
	const yscale = 1 - progress;
	ctx.setTransform(1,0,0,yscale,0,dy)
	ctx.fill(planeUpPath)
}
...
```

![2](/posts/raid-landing-page/2.gif)

Now our aircraft appears to rotate towards the user!

### Takeoff!

Now, I wanted to animate my aircraft to fly up and towards the user as the animation progressed. To acheive this, I needed a way to pass transform data from handlePlane to handlePlaneUp and handlePlaneFront, so that they would move in unison, while handlePlaneFront still retains controll of it rotation animation.

To achieve this, I created new util functions to allow transformData to be applied to each other

```
//transform.ts
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

```

I also included the option to include the transform's width and height, so that the anchor position of the object would be set to the center-point of the object.

```
//transform.ts setTransformData

ctx.setTransform(
	...,
	(tranformData.dx ?? 0) -
		((tranformData.width ?? 0) / 2) * (tranformData.xscale ?? 1),
	(tranformData.dy ?? 0) -
		((tranformData.height ?? 0) / 2) * (tranformData.xscale ?? 1)
);

```

![3](/posts/raid-landing-page/3.gif)

With these functions ready, I simply bound the yPosition of the aircraft to a sine curve, then bound the scale of the aircraft to an exponential curve after the plane has reached its peak, to make the plane appear like it was flying up and towards the user.

```
//raid-draw
...
function handlePlaneUp(transformData: TransformData, rotateProgress: number) {...}

function handlePlaneFront(transformData: TransformData, rotateProgress: number) {...}

function handlePlane(tranformData: TransformData) {
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
...
```
