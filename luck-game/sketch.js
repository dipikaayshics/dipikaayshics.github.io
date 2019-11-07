
let grid;
let completedGrid;
let rows = 4;
let cols = 4;
let currentlySelectedCells = [];
const EMPTY = 255;
let currentlyAnimating = false;
let state = "gameplay";
let randomnumbers = [100, 100, 300, 400, 447, 980,450, 1000]

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid(cols, rows);
}

function draw() {
  background(220);
  if (state === "gameplay") {
    displayGrid(grid, rows, cols);
  }
  else if (state === "win") {
    winScreen();
  }
}
 

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}
function food (){}



function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(EMPTY);
    }
  }
  return emptyGrid;
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(grid[y][x]);
      ellipseMode(CORNER);
      ellipse(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}
