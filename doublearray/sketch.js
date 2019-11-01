// let grid;
// let rows = 20;
// let cols = 20;
// let autoPlay = false;

// function setup() {
//   if (windowWidth > windowHeight) {
//     createCanvas(windowHeight, windowHeight);
//   }
//   else {
//     createCanvas(windowWidth, windowWidth);
//   }
//   grid = createRandom2dArray(cols, rows);
// }

// function draw() {
//   background(220);
//   displayGrid(grid, rows, cols);
//   if (autoPlay) {
//     if (frameCount % 5=== 0) {
//       update();
//     }
//   }
// }

// function windowResized() {
//   if (windowWidth > windowHeight) {
//     createCanvas(windowHeight, windowHeight);
//   }
//   else {
//     createCanvas(windowWidth, windowWidth);
//   }
// }

// function keyTyped() {
//   if (key === "r") {
//     grid = createRandom2dArray(cols, rows);
//   }
//   if (key === "c") {
//     grid = createEmptyGrid();
//   }
//   if (key === " ") {
//     update();
//   }
//   if (key === "a") {
//     autoPlay = !autoPlay;
//   }
// }

// function mousePressed() {
//   let cellSize = width/cols;

//   let xCoord = floor(mouseX / cellSize);
//   let yCoord = floor(mouseY / cellSize);
  
//   if (grid[yCoord][xCoord] === 1) {
//     grid[yCoord][xCoord] = 0;
//   }
//   else {
//     grid[yCoord][xCoord] = 1;
//   }
// }

// function createEmptyGrid() {
//   let emptyGrid = [];
//   for (let x = 0; x < cols; x++) {
//     emptyGrid.push([]);
//     for (let y = 0; y < rows; y++) {
//       emptyGrid[x].push(0);
//     }
//   }
//   return emptyGrid;
// }

// function update() {
//   let nextTurn = createEmptyGrid();

//   for (let x = 0; x < cols; x++) {
//     for (let y = 0; y < rows; y++) {
//       let neighbors = 0;

//       //loop around the neighbor spots...
//       for (let i = -1; i <= 1; i++) {
//         for (let j = -1; j <= 1; j++) {
//           //deal with edge cases
//           if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows) {
//             neighbors += grid[y+j][x+i];
//           }
//         }
//       }
//       //don't count self as a neighbor
//       neighbors -= grid[y][x];

//       //apply rules!
//       if (grid[y][x] === 1) { //currently alive
//         if (neighbors === 2 || neighbors === 3) {
//           nextTurn[y][x] = 1;
//         }
//         else {
//           nextTurn[y][x] = 0;
//         }
//       }

//       if (grid[y][x] === 0) { //currently dead
//         if (neighbors === 3) {
//           nextTurn[y][x] = 1;
//         }
//         else {
//           nextTurn[y][x] = 0;
//         }
//       }
//     }
//   }
//   grid = nextTurn;
// }

// function displayGrid(grid, rows, cols) {
//   let cellSize = width / cols;
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       if (grid[y][x] === 0) {
//         fill(255);
//       }
//       else {
//         fill(0);
//       }
//       ellipse(x*cellSize, y*cellSize, cellSize, cellSize);
//     }
//   }
// }

// function createRandom2dArray(cols, rows) {
//   let randomGrid = [];
//   for (let x = 0; x < cols; x++) {
//     randomGrid.push([]);
//     for (let y = 0; y < rows; y++) {
//       if (random(100) < 50) {
//         randomGrid[x].push(1);
//       }
//       else {
//         randomGrid[x].push(0);
//       }
//     }
//   }
//   return randomGrid;
// }
///////////////////

// let grid;
// let completedGrid;
// let rows = 4;
// let cols = 4;
// let currentlySelectedCells = [];
// const EMPTY = 255;
// let currentlyAnimating = false;
// let state = "gameplay";

// function setup() {
//   if (windowWidth > windowHeight) {
//     createCanvas(windowHeight, windowHeight);
//   }
//   else {
//     createCanvas(windowWidth, windowWidth);
//   }
//   completedGrid = createCompletedGrid();
//   grid = createEmptyGrid(cols, rows);
// }

// function draw() {
//   background(220);
//   if (state === "gameplay") {
//     displayGrid(grid, rows, cols);
//   }
//   else if (state === "win") {
//     winScreen();
//   }
// }

// function createCompletedGrid() {
//   let colorList = ["blue", "red", "green", "yellow", "orange", "black", "purple", "brown"];
//   let pairs = [];
//   for (let thisColor of colorList) {
//     pairs.push(thisColor);
//     pairs.push(thisColor);
//   }
//   shuffle(pairs, true);

//   let completedGrid = createEmptyGrid(cols, rows);
//   //assign each color to a location
//   let x = 0;
//   let y = 0;
//   for (let i = 0; i < pairs.length; i++) {
//     completedGrid[y][x] = pairs[i];
//     x++;
//     if (x === cols) {
//       y++;
//       x = 0;
//     }
//   }
//   return completedGrid;
// }

// function windowResized() {
//   if (windowWidth > windowHeight) {
//     createCanvas(windowHeight, windowHeight);
//   }
//   else {
//     createCanvas(windowWidth, windowWidth);
//   }
// }

// function mousePressed() {
//   if (!currentlyAnimating) {
//     let cellSize = width/cols;

//     let xCoord = floor(mouseX / cellSize);
//     let yCoord = floor(mouseY / cellSize);
    
//     if (currentlySelectedCells.length < 2 && grid[yCoord][xCoord] === EMPTY) {
//       grid[yCoord][xCoord] = completedGrid[yCoord][xCoord];
//       let thisCell = {
//         x: xCoord,
//         y: yCoord
//       };
//       currentlySelectedCells.push(thisCell);
//     }
//     if (currentlySelectedCells.length === 2) {
//       //is it a pair?
//       let firstColor = completedGrid[currentlySelectedCells[0].y][currentlySelectedCells[0].x];
//       let secondColor = completedGrid[currentlySelectedCells[1].y][currentlySelectedCells[1].x];
//       if (firstColor === secondColor) {
//         //update grid to contain this pair
//         // grid[currentlySelectedCells[0].y][currentlySelectedCells[0].x] = completedGrid[currentlySelectedCells[0].y][currentlySelectedCells[0].x];
//         // grid[currentlySelectedCells[1].y][currentlySelectedCells[1].x] = completedGrid[currentlySelectedCells[1].y][currentlySelectedCells[1].x];
//         currentlySelectedCells = [];
//         if (gameIsWon()) {
//           state = "win";
//         }
//       }
//       else {
//         //reset grid to remove whatever was chosen
//         currentlyAnimating = true;
//         window.setTimeout(animateWrongPair, 1000);
//       }  
//     }
//   }
// }

// function animateWrongPair() {
//   grid[currentlySelectedCells[0].y][currentlySelectedCells[0].x] = EMPTY;
//   grid[currentlySelectedCells[1].y][currentlySelectedCells[1].x] = EMPTY;
  
//   currentlySelectedCells = [];
//   currentlyAnimating = false;
// }

// function createEmptyGrid() {
//   let emptyGrid = [];
//   for (let x = 0; x < cols; x++) {
//     emptyGrid.push([]);
//     for (let y = 0; y < rows; y++) {
//       emptyGrid[x].push(EMPTY);
//     }
//   }
//   return emptyGrid;
// }

// function displayGrid(grid, rows, cols) {
//   let cellSize = width / cols;
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       fill(grid[y][x]);
//       rect(x*cellSize, y*cellSize, cellSize, cellSize);
//     }
//   }
// }

// function gameIsWon() {
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {  
//       if (grid[i][j] !== completedGrid[i][j]) {
//         // at least one thing is different
//         return false;
//       }
//     }
//   }
//   // can only get here if all items in the array are the same
//   return true;
// }

// function winScreen() {
//   background(255);
//   fill(0);
//   textSize(85);
//   textAlign(CENTER, CENTER);
//   text("YOU WIN!", width/2, height/2);
// }

// https://editor.p5js.org/eeu8cc/sketches/SyfFJpbez


let grid;
let rows = 10;
let cols = 10;
let playerX = 9;
let playerY = 9;
let randomnumber = [200, 400, 800, 50, 0, -800, 100, 1000];

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid(cols, rows);
  grid[playerY][playerX] = 1;
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function keyTyped() {
  // remove player from current spot
  grid[playerY][playerX] = 0;

  // move the player
  if (key === "w" && playerY > 0) {
    playerY -= 1;
  }
  if (key === "s" && playerY < rows - 1) {
    playerY += 1;
  }
  if (key === "d" && playerX < cols - 1) {
    playerX += 1;
  }
  if (key === "a" && playerX > 0) {
    playerX -= 1;
  }

  // put player back into grid
  grid[playerY][playerX] = 1;
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);                                               
    }
  }
  return emptyGrid;
  
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 1) {
        fill(255);
      }
      else {
        fill(0);
      }
      ellipse(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}