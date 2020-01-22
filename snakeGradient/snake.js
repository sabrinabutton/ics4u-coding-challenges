function Snake (){
  this.x = 0;
  this.y = 0; 
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x,pos.y);
    
    if (d < 1) {
      this.total ++;
     
      return true;
    }
    else { 
      return false;
    }
  }
  
  this.dir = function (x,y){
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.die = function(){
    for (var i = 0; i < this.tail.length ; i ++){
      var pos = this.tail[i];
       var d = dist(this.x,this.y,pos.x,pos.y);
      
      if(d < 1){
        this.total = 0;
        this.tail = [];
      }
     
    }
  }
  
  this.update = function(){
    if(this.x > width){
      this.x = 0;
    }
    if(this.x < 0){
      this.x = width;
    }
    if(this.y < 0){
      this.y = height;
    }
    if(this.y > height){
      this.y = 0;
    }
    
    if(this.total === this.tail.length){
       for (var i = 0; i < this.tail.length -1; i ++){
         this.tail[i] = this.tail[i + 1];
         
       }
    }
    
    this.tail[this.total -1 ] = createVector(this.x,this.y);
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
  }
  
  this.show = function(){
    var colorR = 255;
    noStroke();
    
    for (let i = 0; i < this.tail.length; i++) {
      fill(colorR, 0, colorR);
      
      ellipse(this.tail[i].x + scl / 2,       this.tail[i].y  + scl / 2, scl, scl);
      colorR -= 30;
    }
    fill(colorR, 0, colorR);
    ellipse(this.x  + scl / 2, this.y  + scl / 2, scl, scl);
   }
}
