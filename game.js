window.onload = function () {
  const { clientWidth, clientHeight } = document.documentElement;
  const canvas = document.createElement("canvas");
  canvas.width = clientWidth;
  canvas.height = clientHeight;
  const ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);
};
