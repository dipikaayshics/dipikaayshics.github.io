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
let dx;
let dy;
let resetY = 300;
let appleY = [200, 180, 150, 240, 220, 240, 248, 250];
let busketX = 780;
let busketY = 700;
let score = 0;
let rules = 'Use the left and right arrow key to move the busket and get the apple by touching it!! Click on the restart button to restart';

function preload(){
  tree = loadImage("assets/tree.png");                                  
  bgImage = loadImage("assets/bgImage.jpg");
  busket = loadImage("assets/plate.png");
  apple = loadImage("assets/apple.png");
  reset = loadImage("assets/reset.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  dx = random (10, 50);
  dy = random (10, 50);
  busketX = width/2;
}
function draw() {
  imageMode(CORNER);
  background(bgImage);
  //gameexplain();

  displayTree();
  //displayreset();
  time();
  movingApple();
  movingBasket();
  appleshitsbusket();
  
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
  image(reset, x, resetY, resetSize, resetSize);
}

function time (){
  let s = second();
  textSize(30);
  frameRate(20);
  fill(0, 102, 153);
  let timimg = 
  text('Time: \n' + s, 5, 50);
  
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

function movingApple (){
  noStroke();
  for (let i = 0; i < appleY.length; i++) {
    let appleX = (i+5)*100;
    image(apple, appleX, appleY[i], appleSize, appleSize);
    appleY[i] += 6;
}
}

function appleshitsbuscket(){
  if (appleX > busketX - busketSize && appleX < busketX + busketSize 
    && appleY > busketX - busketSize && appleY < busketY + busketSize);{
    score ++;
    appleY = 200;
  }
}

function gameexplain(){
  fill(245);
  text(rules, 10, 100, 500, 400);
}



//function showscore(){
  //if (score >= 0){
   // text('Score' score, 50, 30)

  //}


//function restart(){
  //if (mouseClicked()){                                                                                                    
    //if ()


  //}


//function sound() res4ert a p[icture with button click
//function stop() with millis
//function showscore()
 
  

