
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime = 0;
var ground,Stop;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,500)
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10); 
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x);
}


function draw() {
background("white");
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
if(obstacleGroup.isTouching(monkey)){
  Stop();
}  
  
monkey.setCollider("Circle",0,0,300);
monkey.debug = false;
  
if(keyDown("space")){
  monkey.velocityY = -10
}
  

  
 monkey.velocityY = monkey.velocityY + 0.8
  
monkey.collide(ground);
  
 drawSprites();
  


stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time:"+survivalTime,100,50);
 survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
food();  
rock();
  
FoodGroup = new Group();
obstacleGroup = new Group();
}

function food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,200,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
  FoodGroup.add(banana);
  }
}

function rock(){
  if(frameCount %300 === 0){
    var obstacle = createSprite(400,320,20,20);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    obstacle.lifetime = 50;

  obstacleGroup.add(obstacle); 
  }
}

function Stop(){
  monkey.velocityX = 0;
  monkey.velocityY = 0;
  FoodGroup.setVelocityXEach = 0;
  FoodGroup.setVelocityYEach = 0;
  ObstacleGroup.setVelocityXEach = 0;
}
  