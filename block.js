class Block {
  constructor() {
    this.midPoint = floor(cols / 2);
    this.x = this.midPoint;
    this.y = this.midPoint;

    this.margin = 0;
    this.dMargin = 1;
    this.play = false;

    this.button = document.getElementById("button");
  }
  draw(grid) {

     this.button.addEventListener("click", () => {
       this.play = !this.play;
     });

    for (let i = -this.margin; i < this.margin; i++) {
      for (let j = -this.margin; j < this.margin; j++) {
        let x = this.x + i;
        let y = this.y + j;

        x = constrain(x, 0, cols - 1);
        y = constrain(y, 0, rows - 1);

        if (grid[x][y] == 0) {
          fill(0);
        } else {
          fill(255);
        }

        rect(x * size, y * size, size, size);
      }
    }
    if (this.play) {
      if (this.margin > floor(cols / 2) || this.margin < 0) {
        this.dMargin *= -1;
      }
      this.margin += this.dMargin;
    }
  }
}
