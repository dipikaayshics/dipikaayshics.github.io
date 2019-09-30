// Project Title
// dipika
// sept 9
let mode = "line";
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (mode = "line"){
    line (mouseX, mouseY, pmouseX, pmouseY);
  }
  else if (mode = "sizingImg"){
    // this is the ching shape of an object codes.......
let tree;
let scaler = 1;
function preload(){
  tree = loadImage("assets/tree.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgImage);
}

function draw() {
  background(0);
  if (keyIsPressed){
    if (keyCode === UP_ARROW){
      //  increase image size
      scaler*= 1.01;
  
    }
    else if (keyCode === DOWN_ARROW){
      // decrease image size
      scaler /= 1.01;
    }
  }

  imageMode(CENTER);
  image(tree, mouseX, mouseY, tree.width * scaler, tree.height *scaler)

  
  }
}
}

