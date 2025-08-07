import { createTimeline, animate } from 'animejs';

//* ----------------------------------------------------------------------------
export function timeLineTextItem() {
  const tl1Animation = animate('.tl-1', {
    scale: [0.5, 1],
    opacity: { from: 0 },
  });
  const tl2Animation = animate('.tl-2', {
    scale: [0.5, 1],
    opacity: { from: 0 },
  });
  const tl3Animation = animate('.tl-3', {
    scale: [0.5, 1],
    opacity: { from: 0 },
  });
  const tl4Animation = animate('.tl-4', {
    translateX: { from: '-17rem' },
    opacity: { from: 0 },
  });
  const tl5Animation = animate('.tl-5', {
    scale: [0.7, 1],
    opacity: { from: 0 },
  });
  const hd1Animation = animate('.hd-1', {
    translateX: { from: '-17rem' },
    opacity: { from: 0 },
  });

  const tlA = createTimeline();
  tlA
    .sync(hd1Animation)
    .sync(tl1Animation, '-=400')
    .sync(tl2Animation, '-=400')
    .sync(tl3Animation, '-=400')
    .sync(tl5Animation, '-=1000')
    .sync(tl4Animation, '-=400');

  const tlB = createTimeline({ defaults: { duration: 600 } });
  tlB.add(
    ['.tl-4, .hd-1'],
    {
      scale: [1, 1.2, 1],
    },
    0
  );

  const tlMain = createTimeline();
  tlMain.sync(tlA).sync(tlB);
}
