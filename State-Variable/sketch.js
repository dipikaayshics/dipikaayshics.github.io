// State Variables
// Dipika Ayshi
// started - october 3
// completed - spet 25
// 
// Extra for Experts:

let bgImage;
let apple;
let bow;
let reset;
let mysound;
let startImg;
let arrow;


//other variable
let x;
let y;

let appleSize = 50;
let bowSize = 400;
let arrowSize = 400;

let resetSize = 120;
let startSize = 150;
let resetX = 100;
let resetY = 150;
let startX;
let startY;
let appleY = [200, 180, 150, 400, 200, 260,100];
let appleX;


let score = 0;
let state = 'starting';
let lastTimeSwitched = 0;
let gametime = 60000;



function preload(){                                  
    bgImage = loadImage("assets/bgImage.jpg");
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
    
    basketX = x;
    startX = width - resetSize;
    startY = 100;
  }

  function draw() {
    imageMode(CORNER);
    background(bgImage);
    displaystart();
    
    if (state === "starting"){
      showscreen();
    }
    else if (state === "playing"){
      gameplaying();
    }
    else if (state == "end"){
      endscreen();
    }
  }

  function showscreen(){
    instruction();
    restart();
}
function gameplaying(){
    displayreset();
    displayTree();
    text("SCORE  = " + score, 100, 30)
    //time();
    movingBasket();
    movingApple();
    appleshitsbuscket();
    timelimit();
   }


 //the state or screen at the end of the game
 function endscreen(){
    textAlign(CENTER);
    fill (0);
    textSize(50);
    text ("Game Over!!", x, y);
    text ("SCORE = " + score, x, y + 40);
    text ("Click on the start button to go back to the menu page", x , y + 80);
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
// showupo the arrow
function displaystart(){
    noStroke();
    imageMode(CENTER);
    image(startImg,  startX, startY, startSize, startSize);
 
  
//apple falling
function movingApple(){
    noStroke();
    for (let i = 0; i < appleY.length; i++) {
      let appleX = (i+ 3)*200;
      image(apple, appleX, appleY[i], appleSize, appleSize);
      appleY[i] += 5;
      console.log(appleX);
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
  function instruction (){
    textSize(38);
    textAlign(CENTER);
    text(" click on the 'start button', to start & 'reset button' to reset the game!! ", x, y);
    textSize(35);
    text("Use the left arrow key and right arrow key to move the basket! ", x, y - 50);
    textSize(30);
    text("All you need to do is touch or catch as many apples as you can with the basket in 1 min! ", x, y - 100);
  }
}