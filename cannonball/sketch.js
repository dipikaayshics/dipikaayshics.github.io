let bowX;
let bowY;
let bowSize;
let bowAngle;
let arrows = [];
let balloonX = [];
let balloonY;
let arrow;
let bow;
let balloon;

function preload(){
  bow = loadImage("assets/bow.png");
  arrow = loadImage("assets/arrow.png");
  balloon = loadImage("assets/balloon.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bowX = 100;
  bowY = height/2;
  bowSize = 150;
  bowAngle = 0;
}

function draw() {
  background(220);
  
  displaybow();
  fireArrow();
  flyballoon();
}

function displaybow() {
  push(); //save the transformation matrix
  translate(bowX, bowY);
  bowAngle = atan2(mouseY - bowY, mouseX - bowX);
  rotate(bowAngle);
  image(bow, 0, -bowSize/2, bowSize, bowSize);
  pop(); //reload the old transformation matrix
}

function mouseClicked() {
  fire();
}

function fire() {
  let thisArrow = {
    x: bowX,
    y: bowY,
    angle: bowAngle,
    arrowSize : bowSize,
    speed: 15
  };
  arrows.push(thisArrow);
}

function fireArrow() {
  for (let thisArrow of arrows) {
    thisArrow.x += thisArrow.speed * cos(thisArrow.angle);
    thisArrow.y += thisArrow.speed * sin(thisArrow.angle);
    push();
    translate(thisArrow.x, thisArrow.y);
    rotate(thisArrow.angle);
    imageMode(CENTER);
    image(arrow, 0, 0, thisArrow.arrowSize, thisArrow.arrowSize);
    pop();
  }
}
function flyballoon(){
  for (i = 0;i < balloonX.length; i++){
    balloonY = i * 200;
    image(balloon, balloonX[i], balloonY, balloonSize, balloonSize);
    balloonX[i] -= 5;
  }
}