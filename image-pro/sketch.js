// Project Title
// dipika
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let space;
let filteredImage;

function preload() {
  spaceship = loadImage("assets/spaceship.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  filteredImage = makeGrayscale(spaceship);
}

function draw() {
  background(220);

  imageMode(CENTER);
  image(filteredImage, mouseX, mouseY);
}

function makeGrayscale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  //load pixels so you can adjust them in the array
  img.loadPixels();
  sourceImage.loadPixels();

  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);

      //apply filter
      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let average = (r + g + b) / 3;

      img.set(x, y, color(average, average, average));
    }
  }

  img.updatePixels();
  return img;
}