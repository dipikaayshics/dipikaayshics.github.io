let bowx;
let bow;
let arrow;
let bowY;
let bowWidth;
let bowLength;
let bowAngle;
let Bow = [];

function preload(){                                  
  
  bow = loadImage("assets/bow.png");
  arrow = loadImage("assets/arrow.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  bowX = 75;
  bowY = height - 150;
  bowWidth = 50;
  bowLength = 125;
  bowAngle = 0;
}

function draw() {
  background(220);
  
  displaybow();
  updateBow();
}

function displaybow() {
  push(); //save the transformation matrix
  translate(bowX, bowY);
  bowAngle = atan2(mouseY - bowY, mouseX - bowX);
  rotate(bowAngle);
  rect(0, -bowWidth/2, bowLength, bowWidth);
  circle(0, 0, bowWidth);
  pop(); //reload the old transformation matrix
}

function mouseClicked() {
  fire();
}

function fire() {
  let arrow = {
    x: bowX,
    y: bowY,
    radius: bowWidth,
    angle: bowAngle,
    speed: 15
  };
  Bow.push(arrow);
}

function updateBow() {
  for (let arrow of Bow) {
    arrow.x += arrow.speed * cos(arrow.angle);
    arrow.y += arrow.speed * sin(arrow.angle);
    circle(arrow.x, arrow.y, arrow.radius);
  }
}