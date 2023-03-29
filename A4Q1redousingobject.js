let petalCount;
function setup() {
  createCanvas(400, 400);
  flower1={
    x:200,
    y:100,
    size:0.25,
    petals:22,
    type:"hsla(75,80%,65%,.7)" 
  }
  flower2={
    x:300,
    y:250,
    size:0.5,
    petals:11,
    type:"hsla(75,80%,65%,.5)"
  }
  flower3={
    x:80,
    y:175,
    size:0.45,
    petals:44,
    type:"hsla(75,80%,65%,.5)"
  }
}

function draw() {
  background("hsla(60,90%,65%,1)");
  addFlower(flower1);
  addFlower(flower2);
  addFlower(flower3);
}

function addFlower(flower){
  push();
  noStroke();
  translate(flower.x,flower.y);
  scale(flower.size);
  //rotate(flower.angle)
  push();
  for (let petalsDrawn = 0; petalsDrawn <flower.petals; petalsDrawn++) {
    fill(flower.type);
    arc(0, 0, 90, 320, 80, 290);
    translate(40, 25);
    rotate(20);
  }
  pop();
  pop();
}
