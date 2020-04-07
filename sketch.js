var launchers = [];
var fireworks = [];
var gravity;
var fps = 60;
var timeToTop = 2.5;
var timeToSide = 10;
var maxVelocityY, maxVelocityX;
var gravityX, gravityY;

function setup() {
  createCanvas(1920, 1080);
  setFrameRate(fps);
  
  maxVelocityX = width / fps / timeToSide;
  maxVelocityY = height / fps / timeToTop;
  gravityX = 0;
  gravityY = maxVelocityY / fps / timeToTop / 2;
  minExplode = fps * timeToTop / 2;
  maxExplode = fps * timeToTop * 1.5;

  console.info("Max Velocity X is " + maxVelocityX);
  console.info("Max Velocity Y is " + maxVelocityY);

  console.info("Gravity X is " + gravityX);
  console.info("Gravity Y is " + gravityY);

  console.info("Min Explode is " + minExplode);
  console.info("Max Explode is " + maxExplode);

  gravity = createVector(gravityX, gravityY);

  launchers[0] = new Launcher(createVector(width/8, height), 0, maxVelocityX, -maxVelocityY, 0, fps*0.5, fireworks, gravity, minExplode, maxExplode);
  launchers[1] = new Launcher(createVector(width/2, height), -maxVelocityX, maxVelocityX, -maxVelocityY, 0, fps*0.5, fireworks, gravity, minExplode, maxExplode);
  launchers[2] = new Launcher(createVector(width*7/8, height), -maxVelocityX, 0, -maxVelocityY, 0, fps*0.5, fireworks, gravity, minExplode, maxExplode);
}

function draw() {
  background(0);
  launchers.forEach(function(launcher) {
    launcher.update();
  });

  fireworks.forEach(function(firework, index) {
    firework.update();
    firework.show();
    if (firework.isDone()) {
      fireworks.splice(index, 1);
    }
  });
}

