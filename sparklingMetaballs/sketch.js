var blobs = [];

function setup() {
  createCanvas(400, 200);
  colorMode(RGB);
  
  for (var i=0;i<10;i++){
    blobs.push(new Blob(random(0,width), random(0,height)));
  }
}

function draw() {
  background(220);
  
  loadPixels();
  
  for(var x = 0;x < width; x++){
    for(var y = 0;y < height; y++){
      let sum = 0;
      
      for(var i = 0; i < blobs.length; i++){
        let xdif = x - blobs[i].x;
        
        let ydif = y - blobs[i].y;
        
        let d = sqrt((xdif * xdif * random(0,30)) + (ydif * ydif  * random(0,50)));
        
        sum+= 10 * blobs[i].r / d;
      }
      
      set(x,y,color(sum,10,199));
    }
  }
  
  updatePixels();
  for(var i=0;i< blobs.length ; i++){
    blobs[i].update();
  }
  
}
