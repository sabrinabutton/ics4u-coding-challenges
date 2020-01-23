let r;
let startx; 
let starty;
let factor = 0;

function setup() {
  createCanvas(400, 400);
  startx = 0;
  starty = 0;
  
  r = height/2;
}

function getVector(index, total){
  const angle = map(index%total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  const total = 150;
  factor += 0.015;
  
  background(0);
  translate(width/2, height/2);
  stroke(142, 56, 255);
  
  
  strokeWeight(2);
  noFill();
  circle(startx,starty,r*2);
  
  for(let i=0; i < total; i++){
    const a = getVector(i, total);
    const b = getVector(i*factor, total);
    line(a.x+startx, a.y+starty, b.x+startx, b.y+starty);
  }
}
