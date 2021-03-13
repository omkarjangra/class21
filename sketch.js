var fixedRect;
var movingRect;
var fixedRect2;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,80);
  movingRect=createSprite(400,200,80,30);
  fixedRect2=createSprite(200,100,50,80);
  fixedRect.debug=true;
  movingRect.debug=true;
  fixedRect2.debug=true;
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect2.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  //console.log(fixedRect.x-movingRect.x);
  //console.log(fixedRect.width/2+movingRect.width/2);
  
  if(isTouching(fixedRect2,movingRect)){
    movingRect.shapeColor="red";
    fixedRect2.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    fixedRect2.shapeColor="blue";
  }

  drawSprites();
}