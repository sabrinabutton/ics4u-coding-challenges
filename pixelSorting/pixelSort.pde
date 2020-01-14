PImage img;

PImage sorted;

int index = 0;

void setup(){
  
  size(1360,425);
  
  img = loadImage("panda.jpg");
  
  sorted = createImage(img.width, img.height, RGB);
  
  sorted = img.get();
}

void draw(){
  
  sorted.loadPixels();
  
  for (int i=0;i < 10; i++){
    
    float record =-1;
    
    int selectedPixel = index;  
    
    for(int j = index; j<sorted.pixels.length;j++){
      
      color pix = sorted.pixels[j];
      
      float b = hue(pix);
      
      if(b > record){
        
        selectedPixel = j;
        
        record = b;
      }
      
    }
    
    color temp = sorted.pixels[index];
    
    sorted.pixels[index] = sorted.pixels[selectedPixel];
    
    sorted.pixels[selectedPixel] = temp;
    
    if(index < sorted.pixels.length - 1){
      
      index++;
    
    }
    
  }
  
  sorted.updatePixels();
  
  background(0);
  
  image(img, 0, 0);
  
  image(sorted, 680, 0);
  
}
