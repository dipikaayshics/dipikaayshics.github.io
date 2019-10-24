// Project Title
// dipika
// sept 9
let mode = "line";
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (mode = "line"){
    line (mouseX, mouseY, pmouseX, pmouseY);
  }
  else if (mode = "sizingImg"){
    // this is the ching shape of an object codes.......
let tree;
let scaler = 1;
function preload(){
  tree = loadImage("assets/tree.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgImage);
}

function draw() {
  background(0);
  if (keyIsPressed){
    if (keyCode === UP_ARROW){
      //  increase image size
      scaler*= 1.01;
  
    }
    else if (keyCode === DOWN_ARROW){
      // decrease image size
      scaler /= 1.01;
    }
  }

  imageMode(CENTER);
  image(tree, mouseX, mouseY, tree.width * scaler, tree.height *scaler)

  
  }
}
}


// let leaf = [];
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


