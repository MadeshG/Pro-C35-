var canvas,backgroungImage
var database
var balloon,balloonImage



function preload(){
  backgroundImage = loadImage('Images/Hot Air Ballon-01.png')
  balloonImage = loadImage('Images/Hot Air Ballon-02.png')
}

function setup() {
  createCanvas(500,500);
 balloon = createSprite(250, 250, 50, 50);
database = firebase.database()
balloon.addImage(balloonImage)
}


function draw() {
  background(255,255,255); 
  if(keyDown(LEFT_ARROW)){
    balloon.x = -10
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon +10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon -10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon +10
  }
  drawSprites();

}
