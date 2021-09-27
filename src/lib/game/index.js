import { nextFrame } from "./frame.js";

const { clientWidth, clientHeight } = document.documentElement;
let ctx = null;
let y = 0;

function drawBlock(x, y, w, h, color = "#fff") {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawBackground() {
  drawBlock(0, 0, clientWidth, clientHeight, "#000");
}

function startAnimation() {
  nextFrame(() => {
    if (y >= clientHeight) {
      y = 0;
      startAnimation();
      return;
    }
    drawBackground();
    drawBlock(clientWidth / 2 - 50, y++, 100, 100);
    startAnimation();
  });
}

export default function (container) {
  const canvas = document.createElement("canvas");
  canvas.width = clientWidth;
  canvas.height = clientHeight;
  ctx = canvas.getContext("2d");
  startAnimation();
  container.appendChild(canvas);
}
