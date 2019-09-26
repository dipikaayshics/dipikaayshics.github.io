// Interactive scene
// Dipika Ayshi
// starte - sept 12
// completed - spet 25
// 
// Extra for Experts:
// - added mysound effects. So I downloaded a sound effect and then put it in the assest  
// and preloaded it and called the sound with mysound.play. so each time the apple falls in the basket it will create a drop sound.

// image and sound variables
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


// preloading all the images and sound from the asset folder
function preload(){
  tree = loadImage("assets/tree.png");                                  
  bgImage = loadImage("assets/bgImage.jpg");
  basket = loadImage("assets/plate.png");
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
  imageMode(CENTER);
  image(tree, x, y, 800, 850);
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


//moving the basket using arrow keys
function movingBasket() {
  noStroke();
  imageMode(CENTER);
  image(basket, basketX, basketY, basketSize, basketSize);
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



//reference-
//p5js references
// p5js examples
//p5.js Tutorial Videos - from Dan Shiffman's Coding Train
  // how to add sound
  // click on object with mousepressed
  // timeout
// https://www.youtube.com/watch?v=Vjw7wAZqSM4 - youtube vedios
//https://editor.p5js.org/ehersh/sketches/Hk52gNXR7