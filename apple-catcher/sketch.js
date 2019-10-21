// Interactive scene
// Dipika Ayshi
// started - sept 12
// completed - spet 25
// image variable
let bgImage;
let tree;
let apple;
let basket;
let reset;
let mysound;
let startImg;

//other variable
let x;
let y;
let treesize = 400;
let appleSize = 50;
let basketSize = 100;
let resetSize = 120;
let startSize = 150;
let resetX = 100;
let resetY = 150;
let startX;
let startY;
let appleY = [350, 100, 10, 500, 800];
let appleX;

let basketY = 700;
let score = 0;
let state = 'starting';
let lastTimeSwitched = 0;
let gametime = 10000;

function preload(){
  tree = loadImage("assets/tree.png");                                  
  bgImage = loadImage("assets/bgImage.jpg");
  basket = loadImage("assets/plate.png");
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

//draw all the functions
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

// state or screen of beginning of the game
 function showscreen(){
  instruction();
  restart();
 }

 // state or screen while playing the game 
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

// the time before the game ends
function timelimit(){
    if (millis() > lastTimeSwitched + gametime){
      state = "end";
  }
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

//time showing using seconds
function time (){
  let s = second();
  if (state = "playing"){
    s = 0;
    s ++;
    textSize(30);
    frameRate(20);
    fill(0, 102, 153);
    text('Time:' + s, 80, 60);
  }
}

//moving the basket using arrow keys
function movingBasket() {
  noStroke();
  imageMode(CENTER);
  image(basket, basketX, basketY, basketSize, basketSize);
  if (keyIsPressed){
    if (keyCode === LEFT_ARROW) {
      basketX = basketX - 5;
    }
    else if (keyCode === RIGHT_ARROW) {
      basketX = basketX + 5;
    }
  }
}

//apple falling
function movingApple(){
  noStroke();
  for (let i = 0; i < appleY.length; i++) {
    let appleX = (i+3)*230;
    image(apple, appleX, appleY[i], appleSize, appleSize);
    appleY[i] += 5;
    console.log(appleX);
  }
}

// adds score and sends apple back to the y pos if basket ot floor touches apple
function appleshitsbuscket(){
  noStroke();
  for (let i = 0; i < appleY.length; i++) {
    let appleX = (i+3)*230;
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
    lastTimeSwitched = millis();
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
  