// Project Title
// dipika
// sept 9
let x, y;
let dx;
let dy;
let radius = 100;
let rectSize = 100;
let state = "menu";
speed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width/2;
  y = height/2;
  dx = random(-15, 15);
  dy = random(-15, 15);
}

function draw() {
  background(255);

  if (state === "menu") {
    showMenu();
  }
  else if (state === "snow") {
    displaysnow();
    displayHome();
  }
  else if (state === "fan"){
    displayFan();
  }
}


function showMenu() {
  // show rain button
  rectMode(CENTER);
  fill(0);
  textSize(30);
  text("DOES YOUR HEAD HURTS, BECAUSE OF ALL THE STRESSES IN LIFE?", 750, 30 );
  text("MAYBE COOL AIR WILL CALM YOU DOWN, EVEN BY VISUALLY SEEING IT!!", 750, 70);
  text("CHECK IT OUT! YOU CAN VISUALLY SEE SNOWFALLING VIEW AND MENTALLY FEEL THE COLD AIR!", 720, 115);
  text("OR CHOOSE THE ARTIFICIAL WAY TO GET SOME COOL AIR FROM A SUSPICIUOS FAN!", 700, 155);

  fill(255, 0, 0, 125);
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("Fan", width/2, height/2 - 100);

  // show snow button
  fill(255, 0, 0, 125);
  rect(width/2, height/2 + 100, 400, 150);
  fill(0);
  text("Snow", width/2, height/2 + 100);
  checkIfButtonClicked();
}

function checkIfButtonClicked() {
  if (mouseIsPressed) {
    // check for fan button
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
        mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75) {
          state = "fan";
    }

    // check for snow button
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 + 75) {
        state = "snow";
    }
  }
}


function windowResized() {
  setup();
}

function displayFan(){
  background(0);
  stand();
  fanUp();
  
}

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

// let snow = [];
// let snowing = true;


// function setup() {
//   createCanvas(600, 600);
//   //frameRate(60);
  
//   for (i = 0; i < 500; i++) {
//     snow[i] = new Snow(random(0, 550), random(0, -3000));
//   }
// }

// function draw() {
//   background(0);

//   ground();
//   //Snow();
//   //console.log(mouseX, mouseY);

//   //Check if it's snowing or sunny
//   if (snowing == true) {
//     //background(100);
//     for (i = 0; i < snow.length; i++) {
//       snow[i].dropSnow();
//       snow[i].splash();
//     }

//   }
// }

// function ground() {
//   //noStroke();
//   fill(170, 150, 146, 240);
//   rect(0, 530, 600, 530);
// }

// function Snow(x, y) {
//   this.x = x;
//   this.y = y;
//   //this.gravity = 9.8;
//   this.length = 15;
//   this.r = 20;
//   this.opacity = 200;


//   this.dropSnow = function() {
//     noStroke();
//     fill(255);
//     //rect(this.x, this.y,3,15);
//     ellipse(this.x, this.y,this.length, this.length);
//     this.y = this.y + 6 //+ frameCount/60;
//     if (this.y > 540) {
//       this.length = this.length - 5;
//       //this.y= random(0,-100);
//     }
//     if (this.length < 0) {
//       this.length = 0;
//     }
//   }

//   this.splash = function() {
//     strokeWeight(2);
//     stroke(245, 200);
//     stroke(245, this.opacity);
//     if (this.y > 540) {
//       fill(255);
//       ellipse(this.x, 550, this.r * 2, this.r / 2);
//       this.r++;
//       this.opacity = this.opacity - 10;

//       //keep the snow dropping
//       if (this.opacity < 0) {
//         this.y = random(0, -100);
//         this.length = 15;
//         this.r = 0;
//         this.opacity = 200;
//       }
//     }
//   }
// }

  
  
  