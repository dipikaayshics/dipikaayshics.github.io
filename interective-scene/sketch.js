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
let radius = 100;

function preload(){
  tree = loadImage("assets/tree.png");
  bgImage = loadImage("assets/bgImage.jpg");
  plate = loadImage("assets/plate.png");
  apple = loadImage("assets/apple.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgImage);
}

function draw() {
  bouncetree();

}
function bouncetree(){

  
}

