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
let treesize = 400;
let appleSize = 50;
let dx;
let dy;
let treeY = 200;

let appleY_0 = treeY;
let appleY_1 = treeY;
let appleY_2 = treeY;
let appleY_3 = treeY;
let appleY_4 = treeY;
let appleY_5 = treeY;
let appleY_6 = treeY;
let appleY_7 = treeY;
let appleY_8 = treeY;
let appleY_9 = treeY;
let appleY_10 = treeY;

function preload(){
  tree = loadImage("assets/tree.png");
  bgImage = loadImage("assets/bgImage.jpg");
  plate = loadImage("assets/plate.png");
  apple = loadImage("assets/apple.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgImage);

  x = width/2;
  y = height/2;
  dx = random (10, 50);
  dx = random (10, 50);
}
function draw() {
  displayTree();
  bouncetree();
  time();
  movingApple();

}
//showup the tree
function displayTree(){
  noStroke();
  imageMode(CENTER);
  image(tree, x, treeY, treesize, treesize);
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

  text('Time Left: \n' + s, 5, 50);
  
}

function movingBasket() {
  if (key === LEFT_ARROW){
    }
  }

  function movingApple (){
    nostroke()
    imageMode(CENTER);
// all the apples
    image (apple, 10, appleY_0, appleSize, appleSize);
    image (apple, 100, appleY_1, appleSize, appleSize);
    image (apple, 200, appleY_2, appleSize, appleSize);
    image (apple, 300, appleY_3, appleSize, appleSize);
    image (apple, 400, appleY_4, appleSize, appleSize);
    
    appleY_0 += 20;
    appleY_1 += 10;
    appleY_2 += 10;


}

