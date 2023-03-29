function setup() {
  noLoop();
  angleMode(DEGREES);
  createCanvas(400, 400);
  
}

function draw() {
  background('hsl(220,70%,70%)');
  flowerz(200,80,.2);
  flowerz(50,100,.3);
  flowerz(150,300,.5);
  flowerz(350,200,.25);
  flowerz(380,50,.1);



}

function flowerz(x,y,size){
  push();
  noStroke();
  translate(x,y);
  scale(size);
  push();
  for(let petalsDrawn=0;petalsDrawn<=18;petalsDrawn++){
  fill('hsla(75,90%,65%,.9)')
  arc(0,0,90,320,80,290);
  translate(40,25);
  rotate(20);
}
pop();
  fill('palevioletred')
  push();
for(let petalsDrawn=0;petalsDrawn<=18;petalsDrawn++){
  arc(0,0,40,120,240,80);
  translate(40,25);
  rotate(20);
}
  pop();
  push();
for(let petalsDrawn=0;petalsDrawn<=18;petalsDrawn++){
  fill('hsl(60,80%,60%)');
  arc(5,10,30,120,80,260);
  translate(40,25);
  rotate(20);
}
  pop();
  push();
for(let petalsDrawn=0;petalsDrawn<=18;petalsDrawn++){
  fill('hsla(20,60%,50%,.5)');
  arc(20,60,30,120,280,260);
  translate(40,25);
  rotate(20);
}
pop();
pop();
}
