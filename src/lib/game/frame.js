export const { nextFrame, cancelNextFrame } = (function () {
  let lastTime = 0;
  const vendors = ["webkit", "moz"];
  while (vendors.length && !window.requestAnimationFrame) {
    const v = vendors.shift();
    window.requestAnimationFrame = window[`${v}RequestAnimationFrame`];
    window.cancelAnimationFrame = window[`${v}CancelAnimationFrame`] || window[`${v}CancelRequestAnimationFrame`];
  }
  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback) {
      const currTime = (window.performance || window.Date).now();
      const interval = Math.max(0, 16.7 - (currTime - lastTime));
      lastTime = currTime + interval;
      return window.setTimeout(function () {
        callback(lastTime);
      }, interval);
    };
  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  return {
    nextFrame: window.requestAnimationFrame,
    cancelNextFrame: window.cancelAnimationFrame,
  };
})();

export const getScreenFps = (targetCount = 50) => {
  if (targetCount < 1) throw new Error("targetCount cannot be less than 1.");
  const beginDate = Date.now();
  let count = 0;
  return new Promise((resolve) => {
    (function log() {
      nextFrame(() => {
        if (++count >= targetCount) {
          const diffDate = Date.now() - beginDate;
          const fps = (count / diffDate) * 1000;
          return resolve(fps);
        }
        log();
      });
    })();
  });
};
