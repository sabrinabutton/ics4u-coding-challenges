/*
      MAYUKH, MIKE, YASIR
      
      FINISHED PART 1 
      
      VERSION 1
      
      SKELETON CODE
      
      MAKE A DUPLICATE BEFORE STARTING
      
*/
function removeFromArray(arr, elt){
  
  for (var i = arr.length-1 ; i >= 0 ; i--){
    
    if(arr[i] === elt){
      arr.splice(i, 1);
    } 
  }
}

function heuristic(a,b){
    return (abs(a.i, b.i) + abs(a.j, b.j));
}

const cols = 25;
const rows = 25;

let openSet = [];
let closedSet = [];
let start;
let end;
let current;
let w, h;
let path = [];

var grid = new Array(cols);

function Spot(i, j){
  
// properties 
  this.i = i;
  this.j = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.previous = undefined;  
  this.neighbors = [];
  
  this.show = function(col){
    fill(col);
    stroke(255,255,255);
    ellipse(this.i * w + 10, this.j * h + 10, w -1, h -1);
  }
  
  this.addNeighbors = function(grid){
    
    //functions variables
    let i = this.i;
    let j = this.j;
    if (i < cols -1){
      
      this.neighbors.push(grid[i + 1][j]);
      
    }
    
    if (i > 0){
      
      this.neighbors.push(grid[i - 1][j]);
      
    }
    
    if(j < rows-1){
      
      this.neighbors.push(grid[i][j + 1]);
      
    }
    
    if(j  > 0){
      
      this.neighbors.push(grid[i][j - 1]);
      
    }
    
  }
  
}


function setup() {
  createCanvas(500, 500);
  
  w = width / cols;
  h = height / rows;
  
  //Making a 2d Array
  for (let i = 0; i< cols; i++){
    grid[i] = new Array(rows);
    
  }
       
  //Spot objects creation
  
  for (let i = 0; i < cols; i++){
    
     for (let j = 0; j < rows; j++){
        
      grid[i][j] = new Spot(i, j);    
    }
    
  }
  
  //neighbors
  for ( i = 0; i < cols; i++){
    
    for (let j = 0; j < rows; j++){
      
      grid[i][j].addNeighbors(grid);
    
    }
    
  }
  //start and end
  start = grid[0][0];
  end = grid[cols - 1][rows - 1]
  
  openSet.push(start);
  
  console.log(grid);
  
}

function draw() {
  //Open set
  if(openSet.length>0){
    
    let winner = 0;
     
    for(var i = 0; i < openSet.length ; i++){
      
      if(openSet[i].f < openSet[winner].f){
       winner = i;
      }
      
    }
    
    current = openSet[winner];
    
    if(openSet[winner] === end){
      
      noLoop();
      
      console.log("DONE!");
      
    }
    
    //remove  /  closed push
    removeFromArray(openSet, current);
    closedSet.push(current);
    
    let neighbors = current.neighbors;
    
    for( i = 0; i< neighbors.length; i++){
    
      var neighbor = neighbors[i];
      
      if (!closedSet.includes(neighbor)){
        
        let tempG = current.g + 1;
        
        if(openSet.includes(neighbor)){
        
          if (tempG < neighbor.g){
            neighbor.g = tempG;
          }
          
        } else {
        
          neighbor.g = tempG;
          openSet.push(neighbor);
          
        }
        
        neighbor.h = heuristic(neighbor, end)
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.previous = current;
        
        
      }
    
    }
    
    
    //we can keep going
  }else{
    //no solution whatever you want to happen goes here
  }
  
  background(255);
  
  for (let i = 0; i < cols; i++){
    
    for(var j = 0; j < rows; j++){
      
      grid[i][j].show(color(255));
      
    }
    
  }
  
  
  for ( let i = 0; i < closedSet.length; i++){
    closedSet[i].show(color(0,255,0));
  }
  
   for ( let i = 0; i < openSet.length; i++){
    openSet[i].show(color(0,0,255));
  }
  
      // Find the path
      path = [];
      let temp=current;
      path.push(temp);
      while(temp.previous){
        path.push(temp.previous);
        temp = temp.previous;
      }
  
  
  for ( let i = 0; i <  path.length; i++) {
     path[i].show(color(255,0,255));
  }
  
  
  
}
