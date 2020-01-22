var s;
var scl=10;
var tuna;
const SPEED = 20;

function setup() {
  createCanvas(400, 400);
  s = new Snake();
  frameRate(SPEED);
  pickLocation();
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  
  tuna = createVector(floor(random(cols)),floor(random(rows)));
                      
  tuna.mult(scl);
}

function draw() {
  background('#000000');
  s.die();
  s.update();
  s.show();
  if(s.eat(tuna)){
   pickLocation();  
  }
  noStroke();
  fill('#6ef075');
  rect(tuna.x,tuna.y,scl,scl);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1);
  }
   if(keyCode === DOWN_ARROW){
    s.dir(0, 1);
  }
   if(keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }
   if(keyCode === RIGHT_ARROW){
    s.dir(1, 0);
  }
}
