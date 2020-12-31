
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(50,150,20,20);
monkey.addAnimation("sprite_0.png",monkey_running);
monkey.scale=0.1
ground=createSprite(100,180,1000,5);
  ground.velocityX=-3;
   monkey.collide(ground);
  
 
}


function draw() {
  createCanvas(600,200);
  background("blue");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
   monkey.collide(ground);
  if(keyWentDown("space")&& monkey.y>=100){
    monkey.velocityY= -10;

  }
  bananaGroup=createGroup();
   var survivalTime=0;
  score=0;
  stroke("white");
  textSize(20);
  text("score"+ score,200,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime"+survivalTime,390,50);
  monkey.velocityY=monkey.velocityY+0.5;
 bananas();
  Obstacles();
  drawSprites();
 
}
function bananas(){
  if(frameCount%80===0){
    banana=createSprite(600,100,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocity.x=-3;
    banana.lifetime=200;
    banana.y=Math.round(random(120,200));
    bananaGroup.add(banana);
  }
}
function Obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(600,165,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
  }
}




