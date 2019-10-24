// State Variables
// Dipika Ayshi
// started - october 23
// completed - october 24
// 
// Extra for Experts:
// I added translate and rotate in this prject by creating the fan


//variables
let x, y;
let dx;
let dy;
let radius = 100;
let rectSize = 100;
let state = "menu";
let speed = 0;
let fanSound;
let windSound;
let leafY = [350, 100, 500, 800];
let leafX;
let leafSize = 40;
let tree;

//laoding images and sound
function preload(){
  fanSound = loadSound("assets/fan.wav");
  windSound = loadSound("assets/wind.wav");
  tree = loadImage("assets/tree.png");
  leaf = loadImage("assets/leaf.png");
}

//creating canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width/2;
  y = height/2;
  
}

// draw all the function
function draw() {
  background(255);
  
  //menu screen
  if (state === "menu") {
    showMenu();
  }

  // the natural wind scene
  else if (state === "leaf") {
    displayleaf();
  }

  // the fan scene
  else if (state === "fan"){
    displayFan();
  }
}

// the whole menu state
function showMenu() {
  // show all the texts informations
  rectMode(CENTER);
  fill(0);
  textSize(30);
  text("DOES YOUR HEAD HURTS, BECAUSE OF ALL THE STRESS IN LIFE?", 750, 30 );
  text("MAYBE getting some AIR WILL CALM YOU DOWN! EVEN MENTALLY", 700, 70);
  text("EVEN BY HEARING THE SOUND AND VISUALIZAing the scenes you can feel relaxed!!!", 720, 115);
  text(" OR!!!! YOU CAN VISUALLY SEE A WIND BLOWING VIEW AND MENTALLY FEEL THE COLD AIR!", 720, height/2 + 250);
  text("CHOOSE THE ARTIFICIAL WAY TO GET SOME COOL AIR FROM A SUSPICIUOS FAN!", 700, 175);
  
  //show the fan button
  fill(255, 0, 0, 125);
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("Fan", width/2, height/2 - 100);

  // show natural wind button
  fill(0, 255, 255);
  rect(width/2, height/2 + 100, 400, 150);
  fill(0);
  text("Natural Wind", width/2, height/2 + 100);
  checkIfButtonClicked();
}

//cheking if any of the options were clicked with the mouse and change state
function checkIfButtonClicked() {
  if (mouseIsPressed) {
    // check for fan button
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
        mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75) {
          state = "fan";
    }

    // check for natural wind button 
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 + 75) {
        state = "leaf";
    }
  }
}

//resizing window
function windowResized() {
  setup();
}

//the whole whole show up of and all functions of the fan
function displayFan(){
  background(0);
  fill(255);
  textSize(30);
  text("PRESS SPACE for sound ", (width- 200), 50);
  stand();
  fanUp();
  
}

//if space key is pressed play the fan sound effect
function keyPressed() {
  if (keyCode === 32){
    fanSound.play();
  }
}

// drawing the upper part of the fan
function fanUp(){
  speed+= 7;
  translate (300, 300);
  rotate(speed);
  fill(255);
  rect(0, 0, 250, 50);
  rectMode(CENTER);
  noFill();
  stroke(255);
  stroke('#fae');
  strokeWeight(7);
  ellipse(0, 0, 300, 300);
  
}

//drawing the stand of the fan and the some of the upper part, like lines
function stand(){
  stroke('#fae');
  fill (120, 135, 220);
  rect (300, 510, 80, 130);
  rect (300, 490+80, 250, 50);
  rect(300, 390, 30, 110);
  ellipse(300, 300, 90, 90);
  strokeWeight(3);
  line(300, 150, 300, 450);
  line(150, 300, 450, 300);
  line (193, 399, 412, 200);
  line (412, 399, 193, 200);
}

// the whole display of natural wind blowing scene
function displayleaf(){
  background(20, 130, 220);
  leafFalling();
  displayTree();

}

//leaves falling
function leafFalling(){
  noStroke();
  for (let i = 0; i < leafY.length; i++) {
    let leafX = (i+4)* random(100, 150);
    image(leaf, leafX, leafY[i], leafSize, leafSize);
    leafY[i] += 3.5;
    if (leafY[i] > height){
      leafY[i] = 200;
      windSound.play();
  }
    
  }
}

//showup the tree
function displayTree(){
  noStroke();
  imageMode(CENTER);
  image(tree, x, y, 800, 850);
}

  
  
  