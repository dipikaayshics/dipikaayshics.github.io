// State Variables
// Dipika Ayshi
// started - october 3
// completed - spet 25
// 
// Extra for Experts:
let bgImage;
let tree;
let apple;
let basket;
let reset;
let startImg;
let mysound;

//other variables
let x;
let y;
let treesize = 400;
let appleSize = 50;
let basketSize = 100;
let resetSize = 120;
let startSize = 150;
let bowSize = 300;
let resetX = 100;
let resetY = 150;
let appleY = 200;
let appleX = 500;
let startX;
let startY;
let basketX;
let basketY;
let score = 0;
let state = 'starting';
let lastTimeSwitched = 0;
let gametime = 120000;
let speed = 3;
let arrow;


// preloading all the images and sound from the asset folder
function preload(){
  tree = loadImage("assets/tree.png");                                  
  bgImage = loadImage("assets/bgImage.jpg");
  bow = loadImage("assets/bow.png");
  apple = loadImage("assets/apple.png");
  reset = loadImage("assets/reset.png");
  startImg = loadImage("assets/startimg.png");
  mysound = loadSound("assets/drop.mp3");
}


// creating the canvas, also some variables that uses width and height of the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;

  basketY = height - 10;
  basketX = x;

  startX = width - resetSize;
  startY = 100;
}


//draw all the functions
function draw() {
  imageMode(CORNER);
  background(bgImage);
  displaystart();
  
  // explainning screen
  if (state === "starting"){
    startscreen();
  }
  // playing screen
  else if (state === "playing"){
    gameplaying();
  }
  // showing the screen when game ends  
  else if (state == "end"){
    gameEnded();
  }
}

//resizing window, if it's not fullscreen
function windowResized() {
  setup();
}

// state or screen of beginning of the game
 function startscreen(){
  instruction();
  restart();
 }

 function play3 () {
   
 }


 // state or screen while playing the game. Basket touching the apple, showing score, tree, 
 function gameplaying(){
  displayreset();
  displayTree();
  displayApple();
  fill(0);
  textSize(35);
  text("SCORE  = " + score, 120, 40)
  movingBasket();
  appleHitsBasket();
  dead();
  
 }


 //the state or screen at the end of the game. Showing score and instruction
 function gameEnded(){
   textAlign(CENTER);
   fill (0);
   textSize(50);
   text ("Game Over!!", x, y);
   text ("SCORE = " + score, x, y + 70);
   textSize(45);
   fill(255);
   text ("Click on the 'start button' to go back to the menu page", x , y + 185);
 }


//showup the tree
function displayTree(){
  noStroke();
  imageMode(CORNER);
  image(tree, width /3, y, 800, 850);
}


//showup reset button
function displayreset(){
  noStroke();
  imageMode(CENTER);
  image(reset, resetX , resetY, resetSize, resetSize);
}


//showup start button
function displaystart(){
  noStroke();
  imageMode(CENTER);
  image(startImg,  startX, startY, startSize, startSize);
}


// showup the apple while moving
function displayApple(){
  noStroke();
  image(apple,  appleX, appleY, appleSize, appleSize);
  appleY += speed;
}
function displayBow() {
  noStroke();
  imageMode(CORNER);
  image (bow, 300, y, bowSize, bowSize );
  
}


//moving the basket using arrow keys
function movingArrow() {
  noStroke();
  imageMode(CENTER);
  image(bow, basketX, basketY, basketSize, basketSize);
  if (keyIsPressed){
    if (keyCode === LEFT_ARROW) {
      basketX = basketX - 12;
    }
    else if (keyCode === RIGHT_ARROW) {
      basketX = basketX + 12;
    }
  }
}


// picking a random x cor for apple
function choosingRandomAppleX(){
  appleX = random(300, width-300);
}


//when apple hits basket, add score, increase speed, play sound, and picking random apple x cor
function appleHitsBasket(){
  if (appleY > basketY && appleX < basketX + basketSize/2 && appleX > basketX - basketSize/2){
    appleY = 200;
    speed += 0.7;
    score ++;
    mysound.play();
    choosingRandomAppleX();

  }
}


 //changes the states if mouse clicks the start button
 function mousePressed(){
  let ds = dist (mouseX, mouseY, startX, startY);
  if (ds < startSize) { 
    lastTimeSwitched = millis();
    if(state=== "starting"){
      state = "playing";
    }
    else if(state === "end"){
      state = "starting";
    }
  }
}


// if apple doesn't get touched by the basket game ends also the time limit is 1 min before the game ends
function dead(){
  if (appleY > height){
    state = "end";
  }
  else if (millis() > lastTimeSwitched + gametime){
    state = "end";
  }
}


// explaining the game
function instruction (){
  textSize(42);
  fill(0);
  textAlign(CENTER);
  text(" Click on the 'start button' to start & 'reset button' to reset the game!! ", x, y+ 40);
  textSize(40);
  text("Use the left arrow key and the right arrow key to move the basket! ", x, y - 40);
  textSize(38);
  text("If you miss the apple you will DIE and the time limit is 2 minutes! ", x, y - 90);
  text("All you need to do is touch or catch the apple with the basket! ", x, y - 130);
}


//restart to how it started
function restart(){
  speed = 1;
  score = 0;
  appleY = 200;
}


// restart everything if reset button clicked
function mouseClicked(){
  let dr = dist (mouseX, mouseY, resetX, resetY);
  if ( dr < resetSize){
    restart();
  }
}
function aroowTouchesObject(){
                                                                                                                                                                                                                                                          
}

// opengmaeart