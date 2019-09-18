// Interective scene
// Dipika Ayshi
// sept 12
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tree;
let bgImage;
let apple;
let plate;
let x;
let y;
let treesize = 500
let dx;



function preload(){
  tree = loadImage("assets/tree.png");
  bgImage = loadImage("assets/bgImage.jpg");
  plate = loadImage("assets/plate.png");
  apple = loadImage("assets/apple.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgImage);
 
  preload();



  x = width/2;
  y = height/2;
  
  dx = random (-50, 50);
 
}

function draw() {
  displayTree();
  bouncetree();
  time();

}
function bouncetree(){
  moveshape();
  if (x > width - treesize/2 || x < treesize/2){
    dx *= -1  
  }
}
function moveshape() {
  x += dx;
}
function displayTree(){
  imageMode(CENTER);
  image(tree, x, y, treesize, treesize);
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
