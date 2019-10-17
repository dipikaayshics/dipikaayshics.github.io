let cannonX;
let cannonY;
let cannonSize;
let cannonAngle;
let bullets = [];
let bullet;
let cannon;

function preload(){
  cannon = loadImage("assets/bow.png");
  bullet = loadImage("assets/arrow.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cannonX = 75;
  cannonY = height - 150;
  cannonSize = 125;
  cannonAngle = 0;
}

function draw() {
  background(220);
  
  displayCannon();
  updateBullets();
}

function displayCannon() {
  push(); //save the transformation matrix
  translate(cannonX, cannonY);
  cannonAngle = atan2(mouseY - cannonY, mouseX - cannonX);
  rotate(cannonAngle);
  image(cannon, 0, -cannonSize/2, cannonSize, cannonSize);
  pop(); //reload the old transformation matrix
}

function mouseClicked() {
  fire();
}

function fire() {
  let thisBullet = {
    x: cannonX,
    y: cannonY,
    radius: 50,
    angle: cannonAngle,
   
    //image: bullet,
    speed: 15
  };
  bullets.push(thisBullet);
}

function updateBullets() {
  for (let thisBullet of bullets) {
    thisBullet.x += thisBullet.speed * cos(thisBullet.angle);
    thisBullet.y += thisBullet.speed * sin(thisBullet.angle);
    circle(thisBullet.x, thisBullet.y, thisBullet.radius);
  }
}