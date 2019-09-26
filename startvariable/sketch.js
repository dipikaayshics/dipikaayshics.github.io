// Project Title
// dipika
// sept 9
let mode= "circle";
let x;
let y;
let dx; // dx = change in x
let dy;
let radius = 100;
let rectsize = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  dx = random (-50, 50);
  dy = random (-50, 50);

}


function draw() {
  background(255);
  //move 
  moveshape();

  if (mode === "circle"){
    if (x > width - radius/2 || x < radius/2){
      dx *= -1
    }
    //move verticllly
    if (y > height- radius/2 || y < radius/2){
      dy *= -1
    }
  
    fill(0);
    circle ( x, y, radius )
  }
  function windowResized(){
    setup();
  }
  if (mode === "rectangle"){
    if (x > width - rectsize || x < 0){
      dx *= -1
    }
    //move verticllly
    if (y > height- rectsize || y < 0){
      dy *= -1
    }
  
    fill (0);
    rect (x, y, rectsize, rectsize )

  }

}
function moveshape() {
  x += dx;
  y += dy;
}

  
  