// Interective scene
// Dipika Ayshi
// sept 12
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// all the variables
let bgImage;
let tree;
let apple;
let plate;
let x;
let y;
let treesize = 400;
let appleSize = 50;
let busketSize = 100;
let birdSize = 120;
let dx;
let dy;
let birdY = 300;
let appleY = [200, 180, 150, 240, 220, 240, 248, 250];
let busketX = 780;
let busketY = 780;

function preload(){
  tree = loadImage("assets/tree.png");                                  
  bgImage = loadImage("assets/bgImage.jpg");
  busket = loadImage("assets/plate.png");
  apple = loadImage("assets/apple.png");
  bird = loadImage("assets/bird.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  dx = random (10, 50);
  dy = random (10, 50);
  busketX = width/2;
}
function draw() {
  imageMode(CORNER);
  background(bgImage);

  displayTree();
  displayBird();
  flyingBird();
  time();
  movingApple();
  movingBasket()
  
}

//showup the tree
function displayTree(){
  noStroke();
  imageMode(CENTER);
  image(tree, x, 300, 1000, treesize);
}
function displayBird(){
  noStroke();
  imageMode(CENTER);
  image(bird, x, birdY, birdSize, birdSize);
}



function time (){
  var s = second();
  textSize(20);
  frameRate(20);
  fill(0, 102, 153);

  text('Time: \n' + s, 5, 50);
  
}

function movingBasket() {
  noStroke();
  imageMode(CENTER);
  image(busket, busketX, busketY, busketSize, busketSize);
  
  if (keyCode === LEFT_ARROW) {
    x = x - 5;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 5;
  }

    
  }

function movingApple (){
  noStroke();
  for (let i = 0; i < appleY.length; i++) {
    let appleX = (i+5)*100;
    image(apple, appleX, appleY[i], appleSize, appleSize);
    appleY[i] += 6;

}
}