let tileCount;
let tileSize;
function setup() {
  angleMode(DEGREES);
  noLoop();
  createCanvas(400, 400);
  roll = ["square", "hexagon", "octagon", "circle"];
  tileCount = roll.length;
  tileSize = width / tileCount;
}

function draw() {
  background("deepskyblue");

  translate(25, 0);
  push();
  for (let rowsDrawn = 0; rowsDrawn < 5; rowsDrawn++) {
    push();
    for (let tilesDrawn = 0; tilesDrawn < tileCount; tilesDrawn++) {
      push();
      let rollPhase = roll[rowsDrawn];
      let tileX = rowsDrawn * tileSize;
      rolypoly(tileX, 25, rollPhase);
      pop();
      translate(0, tileSize);
    }
    pop();
    //    translate(tileSize,0);
  }
  pop();
}

function rolypoly(x, y, roll) {
  push();
  noStroke();
  translate(x, y);
  if (roll == "square") {
    fill("orangered");
    rect(0, 0, 50);
  } else if (roll == "hexagon") {
    push();
    translate(-5, -10);
    fill("tomato");
    beginShape();
    vertex(5, 34);
    vertex(20, 10);
    vertex(50, 10);
    vertex(65, 34);
    vertex(50, 60);
    vertex(20, 60);
    endShape();
    pop();
  } else if (roll == "octagon") {
    push();
    translate(-10, -10);
    fill("gold");
    beginShape();
    vertex(25, 10);
    vertex(45, 10);
    vertex(60, 25);
    vertex(60, 45);
    vertex(45, 60);
    vertex(25, 60);
    vertex(10, 45);
    vertex(10, 25);
    endShape();
    pop();
  } else if (roll == "circle") {
    push();
    translate(25, 25);
    fill("greenyellow");
    ellipse(0, 0, 50);
    pop();
  }
  pop();
}
