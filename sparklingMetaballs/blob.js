class Blob{
  constructor(x,y){
    this.x = x;
    this.y = y;
    
    let angle = random(0, 2*PI);
    
    this.xSpeed = random(2,5) * Math.cos(tan(angle));
    this.ySpeed = random(2,5) * Math.sin(tan(angle));
  
    this.r=random(120,240);
  }
  
  update(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    if(this.x > width || this.x < 0){
        this.xSpeed *= -1;
    }
    
    if(this.y > height|| this.y < 0){
      this.ySpeed *= -1;
    }
  }
}
