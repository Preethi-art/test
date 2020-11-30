
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground;
var groundSprite,edges;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  
  groundSprite=createSprite(40,350,400,10)
  groundSprite.scale=2;
  groundSprite.shapeColor="brown";
  groundSprite.velocityX=-2;
  
  
  
  monkey=createSprite(50,200,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
 
  
  edges=createEdgeSprites();
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
 
  
}


function draw() {
  background("green");
    
  fill("black");
  textSize(20);
  survivalTime=Math.ceil((frameCount/frameRate()))

  text("Survival Time : "+survivalTime,150,120);

      if(groundSprite.x<0)
        {

          groundSprite.x=groundSprite.width/2;
        }
  if(keyDown("space"))
    {
      
      monkey.velocityY=-10;
    }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(groundSprite);
  
  food();
  obstacles();
  drawSprites();
  

}
function food()
{
      if(frameCount%80 ===0)
        {
                    banana=createSprite(390,Math.round(random(120,290)),
                                10,10);
          banana.addImage("food",bananaImage);
          banana.velocityX=-5;
          banana.scale=0.1;
         banana.lifetime=80;
          FoodGroup.add(banana);
        }
 

}
function obstacles()
{
   if(frameCount%300 ===0)
        {
                    obstacle=createSprite(390,320,
                                10,10);
          obstacle.addImage("obstacle",obstaceImage);
          obstacle.velocityX=-5;
          obstacle.scale=0.2;
         obstacle.lifetime=80;
          obstacleGroup.add(obstacle);
        }
  
  
  
}






