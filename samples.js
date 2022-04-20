let size = 1000;
let seed = fxrand() * 1000000000;
speed = 3

let angle = 0;
let x = 500
let y = 200

let x2 = 500
let y2 = 500
let stepSize = 0;
let powerTurning = 0.2;
let arrayDots = [];

function preload() {
  randomSeed(seed);
  noiseSeed(seed);
}

function Dot(x, y, x2, y2, angle, stepSize, powerTurning, color) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.angle = angle;
  this.stepSize = stepSize;
  this.powerTurning = powerTurning;
  this.color = color;
  this.isPoint = random([true, false]);
}

function setup() {
  size = size || Math.min(windowWidth, windowHeight);
  createCanvas(size, size);
  // fxpreview()
  strokeWeight(2);
  let a = random(0, 35);
  let b = random(100, 210);
  x2 = random(300,width-300);
  y2 = random(300,height-300);
  powerTurning = random()
  colorMode(HSB, 255);
  for (let i = 0; i < 600; i++) {
    dot = new Dot(random(width), random(height), x2, y2, 3, stepSize, powerTurning, [random([a, b]), random(255), random(200)]);
    arrayDots.push(dot);
    dot.stepSize = random(1,5);
  }
}

function draw() {
  // background(0, 0, 0, 10)
  arrayDots.forEach((dot) => {
    stroke(dot.color[0], dot.color[1], dot.color[2]);
    angle = atan2(dot.y2-dot.y , dot.x2-dot.x) + PI*0.47
    dot.x += cos(angle) * speed
    dot.y += sin(angle) * speed
    // point(dot.x, dot.y)
    // dot.angle += 2
    newX = dot.x + cos(dot.angle) * dot.stepSize;
    newY = dot.y + sin(dot.angle) * dot.stepSize;
    // // point(dot.x, dot.y);
    line(newX, newY, dot.x, dot.y);
    // dot.angle += 2 * dot.powerTurning;
    // dot.x = newX;
    // dot.y = newY;

    // if (dot.x > width) {
    //   dot.x = width;
    //   dot.angle = dot.angle + PI;
    // }
    // if (dot.x < 0) {
    //   dot.x = 0;
    //   dot.angle = dot.angle + PI;
    // }
    // if (dot.y > height) {
    //   dot.y = height;
    //   dot.angle = dot.angle + PI;
    // }
    // if (dot.y < 0) {
    //   dot.y = 0;
    //   dot.angle = dot.angle + PI;
    // }
    if (frameCount > 200) {
      arrayDots = [];
    }
  });

  
}

