// State Variables
// Dipika Ayshi
// started - october 6
// completed - october 21
// 
// Extra for Experts:
//

let bgImg1;
let bgImg2;
let balloon;
let arrow;
let bow;
let reset;
let startImg;
let arrowSound;
let popSound;

let x;
let y;

let bowX;
let bowY;
let bowSize = 280;
let bowAngle;
let arrows = [];
let balloonSize = 90;
let balloonY = [800, 200, 580, 0, 100];
let balloonX;

let resetSize = 120;
let startSize = 150;
let resetX = 120;
let resetY = 120;
let startX;
let startY;

let score = 0;
let state = 'starting';
let lastTimeSwitched = 0;
let gameTime = 90000;


function preload(){                                  
    bgImg1 = loadImage("assets/bgImg1.jpg");
    bgImg2 = loadImage("assets/bgImg2.png");
    bow = loadImage("assets/bow.png");
    arrow = loadImage("assets/arrow.png");
    balloon = loadImage("assets/balloon.png");
    reset = loadImage("assets/reset.png");
    startImg = loadImage("assets/startimg.png");
    arrowSound = loadSound("assets/arrow.mp3");
    popSound = loadSound("assets/blast.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = width/2;
    y = height/2;
    
    startX = width - resetSize;
    startY = 100;
  
    bowX = 50;
    bowY = y;
    bowAngle = 0;
}

//draw all the functions
function draw() {

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
  //displayReset();
  textSize(35);
  text("SCORE =  " + score, 100, 60);
  time();
  displayBow();
  flyingBalloon();
  fireArrow();
  //arrowTouchesballoon();
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
  push(); 
  translate(bowX, bowY);
  bowAngle = atan2(mouseY - bowY, mouseX - bowX);
  rotate(bowAngle);
  image(bow, 0, -bowSize/2, bowSize, bowSize);
  pop(); 
}

// when mouse clicked fires arrow and creates a sound effects
function keyPressed() {
  if (keyCode === SHIFT){
    fire();
    arrowSound.play();
  }
  
}

// updating the arrow
function fire() {
  let thisArrow = {
    x: bowX,
    y: bowY,
    angle: bowAngle,
    arrowSize: bowSize - 30,
    speed: 15,
  };
  arrows.push(thisArrow);
}

//firing the arrow
function fireArrow() {
  for (let thisArrow of arrows) { 
    thisArrow.x += thisArrow.speed * cos(thisArrow.angle);
    thisArrow.y += thisArrow.speed * sin(thisArrow.angle);
    push();
    translate(thisArrow.x, thisArrow.y);
    rotate(thisArrow.angle);
    imageMode(CENTER);
    image(arrow, 0, 0, thisArrow.arrowSize, thisArrow.arrowSize);
    pop();
  }
}


//balloon flying
function flyingBalloon(){
  noStroke();
  for (let i = 0; i < balloonY.length; i++) {
    let balloonX = (i+7)*130;
    image(balloon, balloonX, balloonY[i], balloonSize, balloonSize);
    balloonY[i] -= 5;
  }
}


// adds score and sends balloon back to the y pos if the arrow or the roof touches ballon
// function arrowTouchesballoon(){
//   noStroke();
//   for (let i = 0; i < balloonY.length; i++) {
//     let balloonX = (i+7)*130;
//     for (let thisArrow of arrows) {
//       thisArrow.x += thisArrow.speed * cos(thisArrow.angle);
//       thisArrow.y += thisArrow.speed * sin(thisArrow.angle);
//       if (balloonX > thisArrow.x[j]- (thisArrow.arrowSize/2) && balloonX < thisArrow.x[j] + (thisArrow.arrowSize/2) 
//         && balloonY[i] > thisArrow.y - (thisArrow.arrowSize/2) && balloonY[i] < thisArrow.y + (thisArrow.arrowSize/2)) {
//         score ++;
//         balloonY[i] = height;
        
//         // mysound effect each time balloon hits or tiuches the basket
//         popSound.play();
//       }
//       if (balloonY[i] < height){
//           balloonY[i] = height;
//       }
//   }
// }
// }
function arrowTouchesballoon() {
  for (let i = 0; i < balloonY.length; i++) {
    let balloonX = (i+7)*130;
    for (let thisArrow of arrows) { 
      thisArrow.x += thisArrow.speed * cos(thisArrow.angle);
      thisArrow.y += thisArrow.speed * sin(thisArrow.angle);
      hit = collodeRectRect (balloonX, balloonY[i], balloonSize, balloonSize, thisArrow.x[j], thisArrow.y[j], thisArrow.Size, thisArrow.Size);
      if (hit === true){
        score ++;
        balloonY[i] = height;
      }
      if (balloonY[i] < height){
        balloonY[i] = height;
      }
    }  
  }
}

//if time is more than 90 sec, the game ends
function dead(){
  if (millis() > lastTimeSwitched + gameTime){
    state = "end";
  }
}

// leftover time showing in the screen
function time (){
  stroke(255, 20, 20);
  strokeWeight(30);
  showTime = map(millis(), lastTimeSwitched, lastTimeSwitched + gameTime, 0, width);
  rect(0, 0, showTime, 0);
}

//restart
function restart(){
  score = 0;
}

 //changes the states if mouse clicks the start button
 function mousePressed(){
  let disStart = dist (mouseX, mouseY, startX, startY);
  if (disStart < startSize) { 
    lastTimeSwitched = millis();
    if(state=== "starting"){
      state = "playing";
    }
    else if(state === "end"){
      state = "starting"; 
    }
  }
}

// restart everything if reset button clicked
function mouseClicked(){
  let disRestart = dist (mouseX, mouseY, resetX, resetY);
  if ( disRestart < resetSize){
    gameTime = millis();
    restart();
  }
}


// explaining the game
function instruction (){
  textSize(42);
  fill(0);
  textAlign(CENTER);
  text(" Click on the 'start button' to start & 'reset button' to reset the game!! ", x, y+ 50);
  textSize(40);
  text("Use the 'mouse' to rotate the BOW and 'space' key to shoot the arrow! ", x, y - 20);
  textSize(38);
  text("Pop as many balloons as you can in 90 seconds! ", x, y - 80);
  text("All you need to do is pop the balloon with the arrow! ", x, y - 130);
}

