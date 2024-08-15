

let grid, size, cols, rows, x, y, b;
 
function setup() {
  createCanvas(400, 400);

  grid = [];
  size = 5;
  cols = width / size;
  rows = height / size;
 


  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
  b = new Block()
}

function draw() {
  background(200);
  angleMode(DEGREES)

  
  x = floor(mouseX / size);
  y = floor(mouseY / size);

 

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] == 0) {
        fill(255);
      } else {
        fill(0);
      }
      noStroke();
      rect(i * size, j * size, size, size);
    }
  }

  b.draw(grid)

 

}

function windowResized() {
  resizeCanvas(400, 400);
}
