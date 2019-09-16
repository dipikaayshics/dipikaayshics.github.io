// Interective scene
// Dipika Ayshi
// sept 12
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tree;
let bgImage;
let scaler = 1;
function preload(){
  tree = loadImage("assets/tree.png");
  bgImage = loadImage("assets/bgImage.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgImage);
}

function draw() {
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
imageMode(CENTER)


