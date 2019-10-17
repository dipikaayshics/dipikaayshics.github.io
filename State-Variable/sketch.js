// State Variables
// Dipika Ayshi
// started - october 6
// completed - october 21
// 
// Extra for Experts:

let bgImg1;
let bgImg2;
let apple;
let arrow;
let bow;
let reset;
let startImg;

let x;
let y;

let bowx;
let bowY;
let bowSize = 280;
let bowAngle;
let Bow = [];
let arrowSize = 400;
let appleSize = 50;
let appleY = [200, 180, 150, 400, 200, 260,100];
let appleX;

let resetSize = 120;
let startSize = 150;
let resetX = 100;
let resetY = 130;
let startX;
let startY;

let score = 0;
let state = 'starting';
let lastTimeSwitched = 0;
let gametime = 6000;
let speed = 3;


function preload(){                                  
    bgImg1 = loadImage("assets/bgImg1.jpg");
    bgImg2 = loadImage("assets/bgImg2.png");
    bow = loadImage("assets/bow.png");
    arrow = loadImage("assets/arrow.png");
    apple = loadImage("assets/apple.png");
    reset = loadImage("assets/reset.png");
    startImg = loadImage("assets/startimg.png");
    mysound = loadSound("assets/drop.mp3");
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    x = width/2;
    y = height/2;
    
    startX = width - resetSize;
    startY = 100;
    
    bowX = 200;
    bowY = y + 50;
    
    bowAngle = 0;
}

//draw all the functions
function draw() {
  displayStart();
  
  if (state === "starting"){
    imageMode(CORNER);
    background(bgImg1);
    displayStart();
    showScreen();
  }
  else if (state === "playing"){
    imageMode(CORNER);
    background(bgImg2);
    gamePlaying();
  }
  else if (state == "end"){
    imageMode(CORNER);
    background(bgImg1);
    displayStart();
    endScreen();
  }
}

// state or screen of beginning of the game
 function showScreen(){
  instruction();
  restart();
 }

 // state or screen while playing the game 
 function gamePlaying(){
  displayReset();
  textSize(35);
  text("SCORE  = " + score, 120, 40);
  //time();
  displayBow();
  fallingApple();
  //fireArrow
  // arrowTouchesApple
  dead();
 }

 //the state or screen at the end of the game. Showing score and instruction
 function endScreen(){
  textAlign(CENTER);
  fill (0);
  textSize(50);
  text ("Game Over!!", x, y);
  text ("SCORE = " + score, x, y + 70);
  textSize(45);
  fill(255);
  text ("Click on the 'start button' to go back to the menu page", x , y + 185);
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

//showup reset button
function displayReset(){
  noStroke();
  imageMode(CENTER);
  image(reset, resetX , resetY, resetSize, resetSize);
}

//showup start button
function displayStart(){
  noStroke();
  imageMode(CENTER);
  image(startImg,  startX, startY, startSize, startSize);
}

// showup the bow
function displayBow(){
  push(); //save the transformation matrix
  translate(bowX, bowY);
  bowAngle = atan2(mouseY - bowY, mouseX - bowX);
  rotate(bowAngle);
  image(bow, 0, -bowSize/4, bowSize, bowSize);
  pop(); //reload the old transformation matrix
}

//fire the arrow
function fireArrow(){
  if (keyCode === "SPACE"){
    fire()
  }
}

// ARROW touches the apple
function arrowTouchesApple(){

}

function dead(){
  if (millis() > lastTimeSwitched + gametime){
    state = "end";
  }
}

//apple falling
function fallingApple(){
  noStroke();
  for (let i = 0; i < appleY.length; i++) {
    let appleX = (i+6)*130;
    image(apple, appleX, appleY[i], appleSize, appleSize);
    appleY[i] += 3;
  }
}





// adds score and sends apple back to the y pos if basket ot floor touches apple
function appleshitsbuscket(){
  noStroke();
  for (let i = 0; i < appleY.length; i++) {
    let appleX = (i+5.5)*150;
    image(apple, appleX, appleY[i], appleSize, appleSize);
    appleY[i] += 3;
    if (appleX > basketX - (basketSize/2) && appleX < basketX + (basketSize/2) 
      && appleY[i] > basketY - (basketSize/2) && appleY[i] < basketY + (basketSize/2)) {
      score ++;
      appleY[i] = 0;
      
      // mysound effect each time apple hits or tiuches the basket
      mysound.play();
    }
    if (appleY[i] > height){
        appleY[i] = 0;
    }
  }
}

//restart
function restart(){
  score = 0;
}

// restart everything if reset button clicked
function mouseClicked(){
  let dr = dist (mouseX, mouseY, resetX, resetY);
  if ( dr < resetSize){
    restart();
  }
}


// explaining the game
// explaining the game
function instruction (){
  textSize(42);
  fill(0);
  textAlign(CENTER);
  text(" Click on the 'start button' to start & 'reset button' to reset the game!! ", x, y+ 40);
  textSize(40);
  text("Use the 'mouse' to rotate the BOW and 'space' key to shoot the arrow! ", x, y - 40);
  textSize(38);
  text("Pop as many balloons as you can in 90 seconds! ", x, y - 90);
  text("All you need to do is pop the balloon with the arrow! ", x, y - 130);
}