// Drawing code.
// ----------------------------------------------------------------------------
const paintCanvas = document.getElementById("input_canvas");
const context = paintCanvas.getContext("2d");
context.lineCap = "round";
context.lineWidth = 40;
let x = 0,
  y = 0;
let isMouseDown = false;

const stopDrawing = () => {
  isMouseDown = false;
};
const startDrawing = (event) => {
  isMouseDown = true;
  [x, y] = [event.offsetX, event.offsetY];
};
const drawLine = (event) => {
  if (isMouseDown) {
    const newX = event.offsetX;
    const newY = event.offsetY;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(newX, newY);
    context.stroke();
    x = newX;
    y = newY;
    drawSvae();
  }
};

paintCanvas.addEventListener("mousedown", startDrawing);
paintCanvas.addEventListener("mousemove", drawLine);
paintCanvas.addEventListener("mouseup", stopDrawing);
paintCanvas.addEventListener("mouseout", stopDrawing);

// Sliders code.
// ----------------------------------------------------------------------------
var backCanvas = document.createElement("canvas");
backCanvas.width = 280;
backCanvas.height = 280;
var backCtx = backCanvas.getContext("2d");

var theta_slider = document.getElementById("theta_slider");
old_angle = theta_slider.value * (3.14 / 180.0);
theta_slider.oninput = function () {
  angle = this.value * (3.14 / 180.0);
  delta_angle = old_angle - angle;
  old_angle = angle;
  backCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  backCtx.drawImage(paintCanvas, 0, 0);
  context.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.translate(140, 140);
  context.rotate(delta_angle);
  context.translate(-140, -140);
  context.drawImage(backCanvas, 0, 0);
  drawSvae();
};

var delta_x0_slider = document.getElementById("delta_x0_slider");
old_delta_x0 = delta_x0_slider.value;
delta_x0_slider.oninput = function () {
  delta_x0 = this.value;
  delta_delta_x0 = old_delta_x0 - delta_x0;
  old_delta_x0 = delta_x0;
  backCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  backCtx.drawImage(paintCanvas, 0, 0);
  context.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.translate(0, delta_delta_x0);
  context.drawImage(backCanvas, 0, 0);
  drawSvae();
};

var delta_x1_slider = document.getElementById("delta_x1_slider");
old_delta_x1 = delta_x1_slider.value;
delta_x1_slider.oninput = function () {
  delta_x1 = this.value;
  delta_delta_x1 = old_delta_x1 - delta_x1;
  old_delta_x1 = delta_x1;
  backCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  backCtx.drawImage(paintCanvas, 0, 0);
  context.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.translate(-delta_delta_x1, 0);
  context.drawImage(backCanvas, 0, 0);
  drawSvae();
};
// var theta_slider = document.getElementById("theta_slider");

// ----------------------------------------------------------------------------
grid = math.matrix([
  [-1, 1, 1],
  [-0.9259, 1.0, 1.0],
  [-0.8519, 1.0, 1.0],
  [-0.7778, 1.0, 1.0],
  [-0.7037, 1.0, 1.0],
  [-0.6296, 1.0, 1.0],
  [-0.5556, 1.0, 1.0],
  [-0.4815, 1.0, 1.0],
  [-0.4074, 1.0, 1.0],
  [-0.3333, 1.0, 1.0],
  [-0.2593, 1.0, 1.0],
  [-0.1852, 1.0, 1.0],
  [-0.1111, 1.0, 1.0],
  [-0.037, 1.0, 1.0],
  [0.037, 1.0, 1.0],
  [0.1111, 1.0, 1.0],
  [0.1852, 1.0, 1.0],
  [0.2593, 1.0, 1.0],
  [0.3333, 1.0, 1.0],
  [0.4074, 1.0, 1.0],
  [0.4815, 1.0, 1.0],
  [0.5556, 1.0, 1.0],
  [0.6296, 1.0, 1.0],
  [0.7037, 1.0, 1.0],
  [0.7778, 1.0, 1.0],
  [0.8519, 1.0, 1.0],
  [0.9259, 1.0, 1.0],
  [1, 1, 1],
  [-1.0, 0.9259, 1.0],
  [-0.9259, 0.9259, 1.0],
  [-0.8519, 0.9259, 1.0],
  [-0.7778, 0.9259, 1.0],
  [-0.7037, 0.9259, 1.0],
  [-0.6296, 0.9259, 1.0],
  [-0.5556, 0.9259, 1.0],
  [-0.4815, 0.9259, 1.0],
  [-0.4074, 0.9259, 1.0],
  [-0.3333, 0.9259, 1.0],
  [-0.2593, 0.9259, 1.0],
  [-0.1852, 0.9259, 1.0],
  [-0.1111, 0.9259, 1.0],
  [-0.037, 0.9259, 1.0],
  [0.037, 0.9259, 1.0],
  [0.1111, 0.9259, 1.0],
  [0.1852, 0.9259, 1.0],
  [0.2593, 0.9259, 1.0],
  [0.3333, 0.9259, 1.0],
  [0.4074, 0.9259, 1.0],
  [0.4815, 0.9259, 1.0],
  [0.5556, 0.9259, 1.0],
  [0.6296, 0.9259, 1.0],
  [0.7037, 0.9259, 1.0],
  [0.7778, 0.9259, 1.0],
  [0.8519, 0.9259, 1.0],
  [0.9259, 0.9259, 1.0],
  [1.0, 0.9259, 1.0],
  [-1.0, 0.8519, 1.0],
  [-0.9259, 0.8519, 1.0],
  [-0.8519, 0.8519, 1.0],
  [-0.7778, 0.8519, 1.0],
  [-0.7037, 0.8519, 1.0],
  [-0.6296, 0.8519, 1.0],
  [-0.5556, 0.8519, 1.0],
  [-0.4815, 0.8519, 1.0],
  [-0.4074, 0.8519, 1.0],
  [-0.3333, 0.8519, 1.0],
  [-0.2593, 0.8519, 1.0],
  [-0.1852, 0.8519, 1.0],
  [-0.1111, 0.8519, 1.0],
  [-0.037, 0.8519, 1.0],
  [0.037, 0.8519, 1.0],
  [0.1111, 0.8519, 1.0],
  [0.1852, 0.8519, 1.0],
  [0.2593, 0.8519, 1.0],
  [0.3333, 0.8519, 1.0],
  [0.4074, 0.8519, 1.0],
  [0.4815, 0.8519, 1.0],
  [0.5556, 0.8519, 1.0],
  [0.6296, 0.8519, 1.0],
  [0.7037, 0.8519, 1.0],
  [0.7778, 0.8519, 1.0],
  [0.8519, 0.8519, 1.0],
  [0.9259, 0.8519, 1.0],
  [1.0, 0.8519, 1.0],
  [-1.0, 0.7778, 1.0],
  [-0.9259, 0.7778, 1.0],
  [-0.8519, 0.7778, 1.0],
  [-0.7778, 0.7778, 1.0],
  [-0.7037, 0.7778, 1.0],
  [-0.6296, 0.7778, 1.0],
  [-0.5556, 0.7778, 1.0],
  [-0.4815, 0.7778, 1.0],
  [-0.4074, 0.7778, 1.0],
  [-0.3333, 0.7778, 1.0],
  [-0.2593, 0.7778, 1.0],
  [-0.1852, 0.7778, 1.0],
  [-0.1111, 0.7778, 1.0],
  [-0.037, 0.7778, 1.0],
  [0.037, 0.7778, 1.0],
  [0.1111, 0.7778, 1.0],
  [0.1852, 0.7778, 1.0],
  [0.2593, 0.7778, 1.0],
  [0.3333, 0.7778, 1.0],
  [0.4074, 0.7778, 1.0],
  [0.4815, 0.7778, 1.0],
  [0.5556, 0.7778, 1.0],
  [0.6296, 0.7778, 1.0],
  [0.7037, 0.7778, 1.0],
  [0.7778, 0.7778, 1.0],
  [0.8519, 0.7778, 1.0],
  [0.9259, 0.7778, 1.0],
  [1.0, 0.7778, 1.0],
  [-1.0, 0.7037, 1.0],
  [-0.9259, 0.7037, 1.0],
  [-0.8519, 0.7037, 1.0],
  [-0.7778, 0.7037, 1.0],
  [-0.7037, 0.7037, 1.0],
  [-0.6296, 0.7037, 1.0],
  [-0.5556, 0.7037, 1.0],
  [-0.4815, 0.7037, 1.0],
  [-0.4074, 0.7037, 1.0],
  [-0.3333, 0.7037, 1.0],
  [-0.2593, 0.7037, 1.0],
  [-0.1852, 0.7037, 1.0],
  [-0.1111, 0.7037, 1.0],
  [-0.037, 0.7037, 1.0],
  [0.037, 0.7037, 1.0],
  [0.1111, 0.7037, 1.0],
  [0.1852, 0.7037, 1.0],
  [0.2593, 0.7037, 1.0],
  [0.3333, 0.7037, 1.0],
  [0.4074, 0.7037, 1.0],
  [0.4815, 0.7037, 1.0],
  [0.5556, 0.7037, 1.0],
  [0.6296, 0.7037, 1.0],
  [0.7037, 0.7037, 1.0],
  [0.7778, 0.7037, 1.0],
  [0.8519, 0.7037, 1.0],
  [0.9259, 0.7037, 1.0],
  [1.0, 0.7037, 1.0],
  [-1.0, 0.6296, 1.0],
  [-0.9259, 0.6296, 1.0],
  [-0.8519, 0.6296, 1.0],
  [-0.7778, 0.6296, 1.0],
  [-0.7037, 0.6296, 1.0],
  [-0.6296, 0.6296, 1.0],
  [-0.5556, 0.6296, 1.0],
  [-0.4815, 0.6296, 1.0],
  [-0.4074, 0.6296, 1.0],
  [-0.3333, 0.6296, 1.0],
  [-0.2593, 0.6296, 1.0],
  [-0.1852, 0.6296, 1.0],
  [-0.1111, 0.6296, 1.0],
  [-0.037, 0.6296, 1.0],
  [0.037, 0.6296, 1.0],
  [0.1111, 0.6296, 1.0],
  [0.1852, 0.6296, 1.0],
  [0.2593, 0.6296, 1.0],
  [0.3333, 0.6296, 1.0],
  [0.4074, 0.6296, 1.0],
  [0.4815, 0.6296, 1.0],
  [0.5556, 0.6296, 1.0],
  [0.6296, 0.6296, 1.0],
  [0.7037, 0.6296, 1.0],
  [0.7778, 0.6296, 1.0],
  [0.8519, 0.6296, 1.0],
  [0.9259, 0.6296, 1.0],
  [1.0, 0.6296, 1.0],
  [-1.0, 0.5556, 1.0],
  [-0.9259, 0.5556, 1.0],
  [-0.8519, 0.5556, 1.0],
  [-0.7778, 0.5556, 1.0],
  [-0.7037, 0.5556, 1.0],
  [-0.6296, 0.5556, 1.0],
  [-0.5556, 0.5556, 1.0],
  [-0.4815, 0.5556, 1.0],
  [-0.4074, 0.5556, 1.0],
  [-0.3333, 0.5556, 1.0],
  [-0.2593, 0.5556, 1.0],
  [-0.1852, 0.5556, 1.0],
  [-0.1111, 0.5556, 1.0],
  [-0.037, 0.5556, 1.0],
  [0.037, 0.5556, 1.0],
  [0.1111, 0.5556, 1.0],
  [0.1852, 0.5556, 1.0],
  [0.2593, 0.5556, 1.0],
  [0.3333, 0.5556, 1.0],
  [0.4074, 0.5556, 1.0],
  [0.4815, 0.5556, 1.0],
  [0.5556, 0.5556, 1.0],
  [0.6296, 0.5556, 1.0],
  [0.7037, 0.5556, 1.0],
  [0.7778, 0.5556, 1.0],
  [0.8519, 0.5556, 1.0],
  [0.9259, 0.5556, 1.0],
  [1.0, 0.5556, 1.0],
  [-1.0, 0.4815, 1.0],
  [-0.9259, 0.4815, 1.0],
  [-0.8519, 0.4815, 1.0],
  [-0.7778, 0.4815, 1.0],
  [-0.7037, 0.4815, 1.0],
  [-0.6296, 0.4815, 1.0],
  [-0.5556, 0.4815, 1.0],
  [-0.4815, 0.4815, 1.0],
  [-0.4074, 0.4815, 1.0],
  [-0.3333, 0.4815, 1.0],
  [-0.2593, 0.4815, 1.0],
  [-0.1852, 0.4815, 1.0],
  [-0.1111, 0.4815, 1.0],
  [-0.037, 0.4815, 1.0],
  [0.037, 0.4815, 1.0],
  [0.1111, 0.4815, 1.0],
  [0.1852, 0.4815, 1.0],
  [0.2593, 0.4815, 1.0],
  [0.3333, 0.4815, 1.0],
  [0.4074, 0.4815, 1.0],
  [0.4815, 0.4815, 1.0],
  [0.5556, 0.4815, 1.0],
  [0.6296, 0.4815, 1.0],
  [0.7037, 0.4815, 1.0],
  [0.7778, 0.4815, 1.0],
  [0.8519, 0.4815, 1.0],
  [0.9259, 0.4815, 1.0],
  [1.0, 0.4815, 1.0],
  [-1.0, 0.4074, 1.0],
  [-0.9259, 0.4074, 1.0],
  [-0.8519, 0.4074, 1.0],
  [-0.7778, 0.4074, 1.0],
  [-0.7037, 0.4074, 1.0],
  [-0.6296, 0.4074, 1.0],
  [-0.5556, 0.4074, 1.0],
  [-0.4815, 0.4074, 1.0],
  [-0.4074, 0.4074, 1.0],
  [-0.3333, 0.4074, 1.0],
  [-0.2593, 0.4074, 1.0],
  [-0.1852, 0.4074, 1.0],
  [-0.1111, 0.4074, 1.0],
  [-0.037, 0.4074, 1.0],
  [0.037, 0.4074, 1.0],
  [0.1111, 0.4074, 1.0],
  [0.1852, 0.4074, 1.0],
  [0.2593, 0.4074, 1.0],
  [0.3333, 0.4074, 1.0],
  [0.4074, 0.4074, 1.0],
  [0.4815, 0.4074, 1.0],
  [0.5556, 0.4074, 1.0],
  [0.6296, 0.4074, 1.0],
  [0.7037, 0.4074, 1.0],
  [0.7778, 0.4074, 1.0],
  [0.8519, 0.4074, 1.0],
  [0.9259, 0.4074, 1.0],
  [1.0, 0.4074, 1.0],
  [-1.0, 0.3333, 1.0],
  [-0.9259, 0.3333, 1.0],
  [-0.8519, 0.3333, 1.0],
  [-0.7778, 0.3333, 1.0],
  [-0.7037, 0.3333, 1.0],
  [-0.6296, 0.3333, 1.0],
  [-0.5556, 0.3333, 1.0],
  [-0.4815, 0.3333, 1.0],
  [-0.4074, 0.3333, 1.0],
  [-0.3333, 0.3333, 1.0],
  [-0.2593, 0.3333, 1.0],
  [-0.1852, 0.3333, 1.0],
  [-0.1111, 0.3333, 1.0],
  [-0.037, 0.3333, 1.0],
  [0.037, 0.3333, 1.0],
  [0.1111, 0.3333, 1.0],
  [0.1852, 0.3333, 1.0],
  [0.2593, 0.3333, 1.0],
  [0.3333, 0.3333, 1.0],
  [0.4074, 0.3333, 1.0],
  [0.4815, 0.3333, 1.0],
  [0.5556, 0.3333, 1.0],
  [0.6296, 0.3333, 1.0],
  [0.7037, 0.3333, 1.0],
  [0.7778, 0.3333, 1.0],
  [0.8519, 0.3333, 1.0],
  [0.9259, 0.3333, 1.0],
  [1.0, 0.3333, 1.0],
  [-1.0, 0.2593, 1.0],
  [-0.9259, 0.2593, 1.0],
  [-0.8519, 0.2593, 1.0],
  [-0.7778, 0.2593, 1.0],
  [-0.7037, 0.2593, 1.0],
  [-0.6296, 0.2593, 1.0],
  [-0.5556, 0.2593, 1.0],
  [-0.4815, 0.2593, 1.0],
  [-0.4074, 0.2593, 1.0],
  [-0.3333, 0.2593, 1.0],
  [-0.2593, 0.2593, 1.0],
  [-0.1852, 0.2593, 1.0],
  [-0.1111, 0.2593, 1.0],
  [-0.037, 0.2593, 1.0],
  [0.037, 0.2593, 1.0],
  [0.1111, 0.2593, 1.0],
  [0.1852, 0.2593, 1.0],
  [0.2593, 0.2593, 1.0],
  [0.3333, 0.2593, 1.0],
  [0.4074, 0.2593, 1.0],
  [0.4815, 0.2593, 1.0],
  [0.5556, 0.2593, 1.0],
  [0.6296, 0.2593, 1.0],
  [0.7037, 0.2593, 1.0],
  [0.7778, 0.2593, 1.0],
  [0.8519, 0.2593, 1.0],
  [0.9259, 0.2593, 1.0],
  [1.0, 0.2593, 1.0],
  [-1.0, 0.1852, 1.0],
  [-0.9259, 0.1852, 1.0],
  [-0.8519, 0.1852, 1.0],
  [-0.7778, 0.1852, 1.0],
  [-0.7037, 0.1852, 1.0],
  [-0.6296, 0.1852, 1.0],
  [-0.5556, 0.1852, 1.0],
  [-0.4815, 0.1852, 1.0],
  [-0.4074, 0.1852, 1.0],
  [-0.3333, 0.1852, 1.0],
  [-0.2593, 0.1852, 1.0],
  [-0.1852, 0.1852, 1.0],
  [-0.1111, 0.1852, 1.0],
  [-0.037, 0.1852, 1.0],
  [0.037, 0.1852, 1.0],
  [0.1111, 0.1852, 1.0],
  [0.1852, 0.1852, 1.0],
  [0.2593, 0.1852, 1.0],
  [0.3333, 0.1852, 1.0],
  [0.4074, 0.1852, 1.0],
  [0.4815, 0.1852, 1.0],
  [0.5556, 0.1852, 1.0],
  [0.6296, 0.1852, 1.0],
  [0.7037, 0.1852, 1.0],
  [0.7778, 0.1852, 1.0],
  [0.8519, 0.1852, 1.0],
  [0.9259, 0.1852, 1.0],
  [1.0, 0.1852, 1.0],
  [-1.0, 0.1111, 1.0],
  [-0.9259, 0.1111, 1.0],
  [-0.8519, 0.1111, 1.0],
  [-0.7778, 0.1111, 1.0],
  [-0.7037, 0.1111, 1.0],
  [-0.6296, 0.1111, 1.0],
  [-0.5556, 0.1111, 1.0],
  [-0.4815, 0.1111, 1.0],
  [-0.4074, 0.1111, 1.0],
  [-0.3333, 0.1111, 1.0],
  [-0.2593, 0.1111, 1.0],
  [-0.1852, 0.1111, 1.0],
  [-0.1111, 0.1111, 1.0],
  [-0.037, 0.1111, 1.0],
  [0.037, 0.1111, 1.0],
  [0.1111, 0.1111, 1.0],
  [0.1852, 0.1111, 1.0],
  [0.2593, 0.1111, 1.0],
  [0.3333, 0.1111, 1.0],
  [0.4074, 0.1111, 1.0],
  [0.4815, 0.1111, 1.0],
  [0.5556, 0.1111, 1.0],
  [0.6296, 0.1111, 1.0],
  [0.7037, 0.1111, 1.0],
  [0.7778, 0.1111, 1.0],
  [0.8519, 0.1111, 1.0],
  [0.9259, 0.1111, 1.0],
  [1.0, 0.1111, 1.0],
  [-1.0, 0.037, 1.0],
  [-0.9259, 0.037, 1.0],
  [-0.8519, 0.037, 1.0],
  [-0.7778, 0.037, 1.0],
  [-0.7037, 0.037, 1.0],
  [-0.6296, 0.037, 1.0],
  [-0.5556, 0.037, 1.0],
  [-0.4815, 0.037, 1.0],
  [-0.4074, 0.037, 1.0],
  [-0.3333, 0.037, 1.0],
  [-0.2593, 0.037, 1.0],
  [-0.1852, 0.037, 1.0],
  [-0.1111, 0.037, 1.0],
  [-0.037, 0.037, 1.0],
  [0.037, 0.037, 1.0],
  [0.1111, 0.037, 1.0],
  [0.1852, 0.037, 1.0],
  [0.2593, 0.037, 1.0],
  [0.3333, 0.037, 1.0],
  [0.4074, 0.037, 1.0],
  [0.4815, 0.037, 1.0],
  [0.5556, 0.037, 1.0],
  [0.6296, 0.037, 1.0],
  [0.7037, 0.037, 1.0],
  [0.7778, 0.037, 1.0],
  [0.8519, 0.037, 1.0],
  [0.9259, 0.037, 1.0],
  [1.0, 0.037, 1.0],
  [-1.0, -0.037, 1.0],
  [-0.9259, -0.037, 1.0],
  [-0.8519, -0.037, 1.0],
  [-0.7778, -0.037, 1.0],
  [-0.7037, -0.037, 1.0],
  [-0.6296, -0.037, 1.0],
  [-0.5556, -0.037, 1.0],
  [-0.4815, -0.037, 1.0],
  [-0.4074, -0.037, 1.0],
  [-0.3333, -0.037, 1.0],
  [-0.2593, -0.037, 1.0],
  [-0.1852, -0.037, 1.0],
  [-0.1111, -0.037, 1.0],
  [-0.037, -0.037, 1.0],
  [0.037, -0.037, 1.0],
  [0.1111, -0.037, 1.0],
  [0.1852, -0.037, 1.0],
  [0.2593, -0.037, 1.0],
  [0.3333, -0.037, 1.0],
  [0.4074, -0.037, 1.0],
  [0.4815, -0.037, 1.0],
  [0.5556, -0.037, 1.0],
  [0.6296, -0.037, 1.0],
  [0.7037, -0.037, 1.0],
  [0.7778, -0.037, 1.0],
  [0.8519, -0.037, 1.0],
  [0.9259, -0.037, 1.0],
  [1.0, -0.037, 1.0],
  [-1.0, -0.1111, 1.0],
  [-0.9259, -0.1111, 1.0],
  [-0.8519, -0.1111, 1.0],
  [-0.7778, -0.1111, 1.0],
  [-0.7037, -0.1111, 1.0],
  [-0.6296, -0.1111, 1.0],
  [-0.5556, -0.1111, 1.0],
  [-0.4815, -0.1111, 1.0],
  [-0.4074, -0.1111, 1.0],
  [-0.3333, -0.1111, 1.0],
  [-0.2593, -0.1111, 1.0],
  [-0.1852, -0.1111, 1.0],
  [-0.1111, -0.1111, 1.0],
  [-0.037, -0.1111, 1.0],
  [0.037, -0.1111, 1.0],
  [0.1111, -0.1111, 1.0],
  [0.1852, -0.1111, 1.0],
  [0.2593, -0.1111, 1.0],
  [0.3333, -0.1111, 1.0],
  [0.4074, -0.1111, 1.0],
  [0.4815, -0.1111, 1.0],
  [0.5556, -0.1111, 1.0],
  [0.6296, -0.1111, 1.0],
  [0.7037, -0.1111, 1.0],
  [0.7778, -0.1111, 1.0],
  [0.8519, -0.1111, 1.0],
  [0.9259, -0.1111, 1.0],
  [1.0, -0.1111, 1.0],
  [-1.0, -0.1852, 1.0],
  [-0.9259, -0.1852, 1.0],
  [-0.8519, -0.1852, 1.0],
  [-0.7778, -0.1852, 1.0],
  [-0.7037, -0.1852, 1.0],
  [-0.6296, -0.1852, 1.0],
  [-0.5556, -0.1852, 1.0],
  [-0.4815, -0.1852, 1.0],
  [-0.4074, -0.1852, 1.0],
  [-0.3333, -0.1852, 1.0],
  [-0.2593, -0.1852, 1.0],
  [-0.1852, -0.1852, 1.0],
  [-0.1111, -0.1852, 1.0],
  [-0.037, -0.1852, 1.0],
  [0.037, -0.1852, 1.0],
  [0.1111, -0.1852, 1.0],
  [0.1852, -0.1852, 1.0],
  [0.2593, -0.1852, 1.0],
  [0.3333, -0.1852, 1.0],
  [0.4074, -0.1852, 1.0],
  [0.4815, -0.1852, 1.0],
  [0.5556, -0.1852, 1.0],
  [0.6296, -0.1852, 1.0],
  [0.7037, -0.1852, 1.0],
  [0.7778, -0.1852, 1.0],
  [0.8519, -0.1852, 1.0],
  [0.9259, -0.1852, 1.0],
  [1.0, -0.1852, 1.0],
  [-1.0, -0.2593, 1.0],
  [-0.9259, -0.2593, 1.0],
  [-0.8519, -0.2593, 1.0],
  [-0.7778, -0.2593, 1.0],
  [-0.7037, -0.2593, 1.0],
  [-0.6296, -0.2593, 1.0],
  [-0.5556, -0.2593, 1.0],
  [-0.4815, -0.2593, 1.0],
  [-0.4074, -0.2593, 1.0],
  [-0.3333, -0.2593, 1.0],
  [-0.2593, -0.2593, 1.0],
  [-0.1852, -0.2593, 1.0],
  [-0.1111, -0.2593, 1.0],
  [-0.037, -0.2593, 1.0],
  [0.037, -0.2593, 1.0],
  [0.1111, -0.2593, 1.0],
  [0.1852, -0.2593, 1.0],
  [0.2593, -0.2593, 1.0],
  [0.3333, -0.2593, 1.0],
  [0.4074, -0.2593, 1.0],
  [0.4815, -0.2593, 1.0],
  [0.5556, -0.2593, 1.0],
  [0.6296, -0.2593, 1.0],
  [0.7037, -0.2593, 1.0],
  [0.7778, -0.2593, 1.0],
  [0.8519, -0.2593, 1.0],
  [0.9259, -0.2593, 1.0],
  [1.0, -0.2593, 1.0],
  [-1.0, -0.3333, 1.0],
  [-0.9259, -0.3333, 1.0],
  [-0.8519, -0.3333, 1.0],
  [-0.7778, -0.3333, 1.0],
  [-0.7037, -0.3333, 1.0],
  [-0.6296, -0.3333, 1.0],
  [-0.5556, -0.3333, 1.0],
  [-0.4815, -0.3333, 1.0],
  [-0.4074, -0.3333, 1.0],
  [-0.3333, -0.3333, 1.0],
  [-0.2593, -0.3333, 1.0],
  [-0.1852, -0.3333, 1.0],
  [-0.1111, -0.3333, 1.0],
  [-0.037, -0.3333, 1.0],
  [0.037, -0.3333, 1.0],
  [0.1111, -0.3333, 1.0],
  [0.1852, -0.3333, 1.0],
  [0.2593, -0.3333, 1.0],
  [0.3333, -0.3333, 1.0],
  [0.4074, -0.3333, 1.0],
  [0.4815, -0.3333, 1.0],
  [0.5556, -0.3333, 1.0],
  [0.6296, -0.3333, 1.0],
  [0.7037, -0.3333, 1.0],
  [0.7778, -0.3333, 1.0],
  [0.8519, -0.3333, 1.0],
  [0.9259, -0.3333, 1.0],
  [1.0, -0.3333, 1.0],
  [-1.0, -0.4074, 1.0],
  [-0.9259, -0.4074, 1.0],
  [-0.8519, -0.4074, 1.0],
  [-0.7778, -0.4074, 1.0],
  [-0.7037, -0.4074, 1.0],
  [-0.6296, -0.4074, 1.0],
  [-0.5556, -0.4074, 1.0],
  [-0.4815, -0.4074, 1.0],
  [-0.4074, -0.4074, 1.0],
  [-0.3333, -0.4074, 1.0],
  [-0.2593, -0.4074, 1.0],
  [-0.1852, -0.4074, 1.0],
  [-0.1111, -0.4074, 1.0],
  [-0.037, -0.4074, 1.0],
  [0.037, -0.4074, 1.0],
  [0.1111, -0.4074, 1.0],
  [0.1852, -0.4074, 1.0],
  [0.2593, -0.4074, 1.0],
  [0.3333, -0.4074, 1.0],
  [0.4074, -0.4074, 1.0],
  [0.4815, -0.4074, 1.0],
  [0.5556, -0.4074, 1.0],
  [0.6296, -0.4074, 1.0],
  [0.7037, -0.4074, 1.0],
  [0.7778, -0.4074, 1.0],
  [0.8519, -0.4074, 1.0],
  [0.9259, -0.4074, 1.0],
  [1.0, -0.4074, 1.0],
  [-1.0, -0.4815, 1.0],
  [-0.9259, -0.4815, 1.0],
  [-0.8519, -0.4815, 1.0],
  [-0.7778, -0.4815, 1.0],
  [-0.7037, -0.4815, 1.0],
  [-0.6296, -0.4815, 1.0],
  [-0.5556, -0.4815, 1.0],
  [-0.4815, -0.4815, 1.0],
  [-0.4074, -0.4815, 1.0],
  [-0.3333, -0.4815, 1.0],
  [-0.2593, -0.4815, 1.0],
  [-0.1852, -0.4815, 1.0],
  [-0.1111, -0.4815, 1.0],
  [-0.037, -0.4815, 1.0],
  [0.037, -0.4815, 1.0],
  [0.1111, -0.4815, 1.0],
  [0.1852, -0.4815, 1.0],
  [0.2593, -0.4815, 1.0],
  [0.3333, -0.4815, 1.0],
  [0.4074, -0.4815, 1.0],
  [0.4815, -0.4815, 1.0],
  [0.5556, -0.4815, 1.0],
  [0.6296, -0.4815, 1.0],
  [0.7037, -0.4815, 1.0],
  [0.7778, -0.4815, 1.0],
  [0.8519, -0.4815, 1.0],
  [0.9259, -0.4815, 1.0],
  [1.0, -0.4815, 1.0],
  [-1.0, -0.5556, 1.0],
  [-0.9259, -0.5556, 1.0],
  [-0.8519, -0.5556, 1.0],
  [-0.7778, -0.5556, 1.0],
  [-0.7037, -0.5556, 1.0],
  [-0.6296, -0.5556, 1.0],
  [-0.5556, -0.5556, 1.0],
  [-0.4815, -0.5556, 1.0],
  [-0.4074, -0.5556, 1.0],
  [-0.3333, -0.5556, 1.0],
  [-0.2593, -0.5556, 1.0],
  [-0.1852, -0.5556, 1.0],
  [-0.1111, -0.5556, 1.0],
  [-0.037, -0.5556, 1.0],
  [0.037, -0.5556, 1.0],
  [0.1111, -0.5556, 1.0],
  [0.1852, -0.5556, 1.0],
  [0.2593, -0.5556, 1.0],
  [0.3333, -0.5556, 1.0],
  [0.4074, -0.5556, 1.0],
  [0.4815, -0.5556, 1.0],
  [0.5556, -0.5556, 1.0],
  [0.6296, -0.5556, 1.0],
  [0.7037, -0.5556, 1.0],
  [0.7778, -0.5556, 1.0],
  [0.8519, -0.5556, 1.0],
  [0.9259, -0.5556, 1.0],
  [1.0, -0.5556, 1.0],
  [-1.0, -0.6296, 1.0],
  [-0.9259, -0.6296, 1.0],
  [-0.8519, -0.6296, 1.0],
  [-0.7778, -0.6296, 1.0],
  [-0.7037, -0.6296, 1.0],
  [-0.6296, -0.6296, 1.0],
  [-0.5556, -0.6296, 1.0],
  [-0.4815, -0.6296, 1.0],
  [-0.4074, -0.6296, 1.0],
  [-0.3333, -0.6296, 1.0],
  [-0.2593, -0.6296, 1.0],
  [-0.1852, -0.6296, 1.0],
  [-0.1111, -0.6296, 1.0],
  [-0.037, -0.6296, 1.0],
  [0.037, -0.6296, 1.0],
  [0.1111, -0.6296, 1.0],
  [0.1852, -0.6296, 1.0],
  [0.2593, -0.6296, 1.0],
  [0.3333, -0.6296, 1.0],
  [0.4074, -0.6296, 1.0],
  [0.4815, -0.6296, 1.0],
  [0.5556, -0.6296, 1.0],
  [0.6296, -0.6296, 1.0],
  [0.7037, -0.6296, 1.0],
  [0.7778, -0.6296, 1.0],
  [0.8519, -0.6296, 1.0],
  [0.9259, -0.6296, 1.0],
  [1.0, -0.6296, 1.0],
  [-1.0, -0.7037, 1.0],
  [-0.9259, -0.7037, 1.0],
  [-0.8519, -0.7037, 1.0],
  [-0.7778, -0.7037, 1.0],
  [-0.7037, -0.7037, 1.0],
  [-0.6296, -0.7037, 1.0],
  [-0.5556, -0.7037, 1.0],
  [-0.4815, -0.7037, 1.0],
  [-0.4074, -0.7037, 1.0],
  [-0.3333, -0.7037, 1.0],
  [-0.2593, -0.7037, 1.0],
  [-0.1852, -0.7037, 1.0],
  [-0.1111, -0.7037, 1.0],
  [-0.037, -0.7037, 1.0],
  [0.037, -0.7037, 1.0],
  [0.1111, -0.7037, 1.0],
  [0.1852, -0.7037, 1.0],
  [0.2593, -0.7037, 1.0],
  [0.3333, -0.7037, 1.0],
  [0.4074, -0.7037, 1.0],
  [0.4815, -0.7037, 1.0],
  [0.5556, -0.7037, 1.0],
  [0.6296, -0.7037, 1.0],
  [0.7037, -0.7037, 1.0],
  [0.7778, -0.7037, 1.0],
  [0.8519, -0.7037, 1.0],
  [0.9259, -0.7037, 1.0],
  [1.0, -0.7037, 1.0],
  [-1.0, -0.7778, 1.0],
  [-0.9259, -0.7778, 1.0],
  [-0.8519, -0.7778, 1.0],
  [-0.7778, -0.7778, 1.0],
  [-0.7037, -0.7778, 1.0],
  [-0.6296, -0.7778, 1.0],
  [-0.5556, -0.7778, 1.0],
  [-0.4815, -0.7778, 1.0],
  [-0.4074, -0.7778, 1.0],
  [-0.3333, -0.7778, 1.0],
  [-0.2593, -0.7778, 1.0],
  [-0.1852, -0.7778, 1.0],
  [-0.1111, -0.7778, 1.0],
  [-0.037, -0.7778, 1.0],
  [0.037, -0.7778, 1.0],
  [0.1111, -0.7778, 1.0],
  [0.1852, -0.7778, 1.0],
  [0.2593, -0.7778, 1.0],
  [0.3333, -0.7778, 1.0],
  [0.4074, -0.7778, 1.0],
  [0.4815, -0.7778, 1.0],
  [0.5556, -0.7778, 1.0],
  [0.6296, -0.7778, 1.0],
  [0.7037, -0.7778, 1.0],
  [0.7778, -0.7778, 1.0],
  [0.8519, -0.7778, 1.0],
  [0.9259, -0.7778, 1.0],
  [1.0, -0.7778, 1.0],
  [-1.0, -0.8519, 1.0],
  [-0.9259, -0.8519, 1.0],
  [-0.8519, -0.8519, 1.0],
  [-0.7778, -0.8519, 1.0],
  [-0.7037, -0.8519, 1.0],
  [-0.6296, -0.8519, 1.0],
  [-0.5556, -0.8519, 1.0],
  [-0.4815, -0.8519, 1.0],
  [-0.4074, -0.8519, 1.0],
  [-0.3333, -0.8519, 1.0],
  [-0.2593, -0.8519, 1.0],
  [-0.1852, -0.8519, 1.0],
  [-0.1111, -0.8519, 1.0],
  [-0.037, -0.8519, 1.0],
  [0.037, -0.8519, 1.0],
  [0.1111, -0.8519, 1.0],
  [0.1852, -0.8519, 1.0],
  [0.2593, -0.8519, 1.0],
  [0.3333, -0.8519, 1.0],
  [0.4074, -0.8519, 1.0],
  [0.4815, -0.8519, 1.0],
  [0.5556, -0.8519, 1.0],
  [0.6296, -0.8519, 1.0],
  [0.7037, -0.8519, 1.0],
  [0.7778, -0.8519, 1.0],
  [0.8519, -0.8519, 1.0],
  [0.9259, -0.8519, 1.0],
  [1.0, -0.8519, 1.0],
  [-1.0, -0.9259, 1.0],
  [-0.9259, -0.9259, 1.0],
  [-0.8519, -0.9259, 1.0],
  [-0.7778, -0.9259, 1.0],
  [-0.7037, -0.9259, 1.0],
  [-0.6296, -0.9259, 1.0],
  [-0.5556, -0.9259, 1.0],
  [-0.4815, -0.9259, 1.0],
  [-0.4074, -0.9259, 1.0],
  [-0.3333, -0.9259, 1.0],
  [-0.2593, -0.9259, 1.0],
  [-0.1852, -0.9259, 1.0],
  [-0.1111, -0.9259, 1.0],
  [-0.037, -0.9259, 1.0],
  [0.037, -0.9259, 1.0],
  [0.1111, -0.9259, 1.0],
  [0.1852, -0.9259, 1.0],
  [0.2593, -0.9259, 1.0],
  [0.3333, -0.9259, 1.0],
  [0.4074, -0.9259, 1.0],
  [0.4815, -0.9259, 1.0],
  [0.5556, -0.9259, 1.0],
  [0.6296, -0.9259, 1.0],
  [0.7037, -0.9259, 1.0],
  [0.7778, -0.9259, 1.0],
  [0.8519, -0.9259, 1.0],
  [0.9259, -0.9259, 1.0],
  [1.0, -0.9259, 1.0],
  [-1, -1, 1],
  [-0.9259, -1.0, 1.0],
  [-0.8519, -1.0, 1.0],
  [-0.7778, -1.0, 1.0],
  [-0.7037, -1.0, 1.0],
  [-0.6296, -1.0, 1.0],
  [-0.5556, -1.0, 1.0],
  [-0.4815, -1.0, 1.0],
  [-0.4074, -1.0, 1.0],
  [-0.3333, -1.0, 1.0],
  [-0.2593, -1.0, 1.0],
  [-0.1852, -1.0, 1.0],
  [-0.1111, -1.0, 1.0],
  [-0.037, -1.0, 1.0],
  [0.037, -1.0, 1.0],
  [0.1111, -1.0, 1.0],
  [0.1852, -1.0, 1.0],
  [0.2593, -1.0, 1.0],
  [0.3333, -1.0, 1.0],
  [0.4074, -1.0, 1.0],
  [0.4815, -1.0, 1.0],
  [0.5556, -1.0, 1.0],
  [0.6296, -1.0, 1.0],
  [0.7037, -1.0, 1.0],
  [0.7778, -1.0, 1.0],
  [0.8519, -1.0, 1.0],
  [0.9259, -1.0, 1.0],
  [1, -1, 1],
]);

function randn() {
  var u1 = Math.random();
  var u2 = Math.random();

  var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(Math.PI * 2 * u2);

  return z0;
}

const sess_enc = new onnx.InferenceSession();
loadingEncPromise = sess_enc.loadModel("onnx/svae_encoder.onnx");

const sess_dec = new onnx.InferenceSession();
loadingDecPromise = sess_dec.loadModel("onnx/svae_decoder.onnx");

async function drawSvae() {
  await loadingEncPromise;
  await loadingDecPromise;

  const imgData = context.getImageData(0, 0, 280, 280);
  const input_enc = new onnx.Tensor(new Float32Array(imgData.data), "float32");

  // const input_enc = new onnx.Tensor(new Float32Array(28 * 28), 'float32', [28, 28])
  const outputMapEnc = await sess_enc.run([input_enc]);
  const outputTensorEnc = outputMapEnc.values().next().value;

  // Sample.
  mu = Array.prototype.slice.call(outputTensorEnc.data.slice(0, 5));
  logvar = Array.prototype.slice.call(outputTensorEnc.data.slice(5, 10));
  std = math.exp(math.multiply(0.5, logvar));
  eps = math.matrix([randn(), randn(), randn(), randn(), randn()]);
  z = math.add(mu, math.dotMultiply(std, eps));
  theta = math.subset(z, math.index(0));
  delta_x0 = math.subset(z, math.index(1));
  delta_x1 = math.subset(z, math.index(2));
  z = math.subset(z, math.index([3, 4]));
  console.log(mu[0]);

  // Transform coords.
  transform = math.matrix([
    [math.cos(theta), -math.sin(theta), delta_x0 * 1.4],
    [math.sin(theta), math.cos(theta), delta_x1 * 1.4],
    [0.0, 0.0, 1.0],
  ]);
  transform = math.transpose(transform);
  coords = math.multiply(grid, transform);

  // Generate input for the model.
  x = [];
  for (var i = 0; i < 784; i++) {
    x.push(z._data[0]);
    x.push(z._data[1]);
    x.push(coords._data[i][0]);
    x.push(coords._data[i][1]);
  }

  // Decode.
  const input_dec = new onnx.Tensor(x, "float32", [784, 4]);
  const outputMapDec = await sess_dec.run([input_dec]);
  const outputTensorDec = outputMapDec.values().next().value;

  // Output to canvas.
  image = Array.prototype.slice.call(outputTensorDec.data);
  image = math.matrix(image);
  math.reshape(image, [28, 28]);
  canvas = document.getElementById("svae_out_canvas");
  ctx = canvas.getContext("2d");
  image_data = ctx.getImageData(0, 0, 280, 280);
  buffer = new Uint8ClampedArray(280 * 280 * 4);
  for (var y = 0; y < 28; y++) {
    for (var x = 0; x < 28; x++) {
      var pos = (y * 280 + x) * 4;
      buffer[pos] = image._data[y][x];
      buffer[pos + 1] = image._data[y][x];
      buffer[pos + 2] = image._data[y][x];
      buffer[pos + 3] = 255;
    }
  }
  image_data.data.set(buffer);
  ctx.putImageData(image_data, 0, 0);
}
