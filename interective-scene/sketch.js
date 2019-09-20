// Interective scene
// Dipika Ayshi
// sept 12
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// all the variables
let tree;
let bgImage;
let apple;
let plate;
let x;
let y;
let treesize = 800;
let appleSize = 50;
let dx;
let dy;
let treeY = 300;
let appleY = [200, 180, 150, 240, 220, 240, 248, 250];
let busketX;
let busketY = 750;


// let appleY_0 = treeY;
// let appleY_1 = treeY;
// let appleY_2 = treeY;
// let appleY_3 = treeY;
// let appleY_4 = treeY;
// let appleY_5 = treeY;
// let appleY_6 = treeY;
// let appleY_7 = treeY;
// let appleY_8 = treeY;
// let appleY_9 = treeY;
// let appleY_10 = treeY;

function preload(){
  tree = loadImage("assets/tree.png");                                  
  bgImage = loadImage("assets/bgImage.jpg");
  busket = loadImage("assets/plate.png");
  apple = loadImage("assets/apple.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  dx = random (10, 50);
  dx = random (10, 50);
  busketX = width/2;
}
function draw() {
  imageMode(CORNER);
  background(bgImage);

  displayTree();
  //bouncetree();
  time();
  repeatingMA();
  
  movingBasket()
  

}
//showup the tree
function displayTree(){
  noStroke();
  imageMode(CENTER);
  image(tree, x, treeY, 1000, treesize);
}

//tree bouncing off one wall to another
function bouncetree(){
  moveshape();
  if (x > width - treesize/2 || x < treesize/2){
    dx *= -1  
  }
}
//moving the tree in a speed
function moveshape() {
  x += dx;
  y += dy;
}

function time (){
  var s = second();
  textSize(20);
  frameRate(20);
  fill(0, 102, 153);

  text('Time: \n' + s, 5, 50);
  
}

function movingBasket() {

  if (keyIsDown(LEFT_ARROW)){
    busketX = busketX - 10;
  } else if (keyIsDown(RIGHT_ARROW)) {
    busketX = busketX + 10;
  }
  noStroke();
  imageMode(CENTER);
  image(busket, busketX, busketY, 100, 100);
  
}
  

function movingApple (){
  noStroke();
  
  for (var i = 0; i < appleY.length; i++) {
    image(apple, (i+5)*100, appleY[i], appleSize, appleSize);
    appleY[i] += 6;
  }
// all the apples
  // image (apple, 100, appleY_0, appleSize, appleSize);
  // image (apple, 200, appleY_1, appleSize, appleSize);
  // image (apple, 300, appleY_2, appleSize, appleSize);
  // image (apple, 400, appleY_3, appleSize, appleSize);
  // image (apple, 500, appleY_4, appleSize, appleSize);
  
  // appleY_0 += 5;
  // appleY_1 += 6;
  // appleY_2 += 7;
  // appleY_3 += 4;
  // appleY_4 += 8;
}
function repeatingMA(){
  if (millis() < 10000){
    movingApple();
  


  }
  
}



