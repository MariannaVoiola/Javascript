function setup() {
    createCanvas(600, 600);
     background("yellow");
  }
  
  function draw(){
   
    
    
    stroke("green")
    fill("red")
    
    // console.log(mouseIsPressed)
    
    if(mouseIsPressed) 
      rect( mouseX, mouseY, 20, 12);
    }