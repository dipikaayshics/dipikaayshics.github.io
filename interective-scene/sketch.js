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
let resetSize = 120;
let startW = 200;
let startH = 100;
let dx;
let dy;
let resetX;
resetY = 100;
let startX;
let startY;
let appleY = [200, 180, 150, 240, 220, 240];
let busketX = 780;
let busketY = 700;
let score = 0;
let sound;
let startImg;

function preload(){
  tree = loadImage("assets/tree.png");                                  
  bgImage = loadImage("assets/bgImage.jpg");
  busket = loadImage("assets/plate.png");
  apple = loadImage("assets/apple.png");
  reset = loadImage("assets/reset.png");
  startImg = loadImage("assets/start.png");
  sound = loadSound('assets/drop.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  dx = random (10, 50);
  dy = random (10, 50);
  busketX = x;
  resetX = width - resetSize;
  startY = 20;
  startX = x;

}
function draw() {
  imageMode(CORNER);
  background(bgImage);
  insTime();
  //Sound.setVolume(0.1);
  //Sound.play();
  
  displayreset();
  displaystart();
  start();
  // restart(); 
}

//showup the tree
function displayTree(){
  noStroke();
  imageMode(CENTER);
  image(tree, x, y, 800, 850);
}

function displayreset(){
  noStroke();
  imageMode(CENTER);
  image(reset, resetX , resetY, resetSize, resetSize);
}
function displaystart(){
  noStroke();
  imageMode(CENTER);
  image(startImg,  startX, startY, startW, startH);
}


function time (){
  let s = second();
  textSize(30);
  frameRate(20);
  fill(0, 102, 153);
  text('Time:' + s, 5, 40);
}

function movingBasket() {
  noStroke();
  imageMode(CENTER);
  image(busket, busketX, busketY, busketSize, busketSize);
  if (keyIsPressed){
    if (keyCode === LEFT_ARROW) {
      busketX = busketX - 5;
    }
    else if (keyCode === RIGHT_ARROW) {
      busketX = busketX + 5;
    }
  }
}

function movingApple(){
  noStroke();
  for (let i = 0; i < appleY.length; i++) {
    let appleX = (i+3.5)*120;
    image(apple, appleX, appleY[i], appleSize, appleSize);
    appleY[i] += 5;
  }
}

function appleshitsbuscket(){
  for (let i = 0; i < appleY.length; i++) {
    let appleX = (i+3.5)*120;
    if (appleX > busketX - busketSize && appleX < busketX + busketSize 
      && appleY[i] > busketX - busketSize && appleY[i] < busketY + busketSize);{
      score ++;
      appleY[i] = 200;
    }
  }
}

function mouseClicked(){
  let dr = dist (mouseX, mouseY, resetX, resetY);
  if ( dr < resetSize){
    background(0);
    s = 0, 
    score = 0;
  
  } 
}
function start() {
  if (mouseIsPressed){
    let ds = dist (mouseX, mouseY, startX, startY);
    if (ds < 100) { //startH || ds < startW){
      displayTree();
      time();
      movingApple();
      movingBasket();
      appleshitsbuscket();
 
    }
  }
}

function insTime() {
  if (millis() < 8000){
    instruction();
  }
}

function instruction (){
  textSize(38);
  textAlign(CENTER);
  text(" click on the 'start button', to start & 'Reset button' to restart the game!! ", x, y);
  textSize(35);
  text("Move the left arrow key and right arrow key to move the basket! ", x, y - 50);
  textSize(30);
  text("All you need to do is touch or catch as many apples as you can with the busket in 1 min! ", x, y - 100);
}
//function 
// if state = 





//function restart(){
//function sound() res4ert a p[icture with button click
//function stop() with millis
//function showscore()
 
  

