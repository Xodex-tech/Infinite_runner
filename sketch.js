var Runner;
var Ground, ground;
var Obstacles;
var BgImage, bg;
var score = 0;

function setup() {
  createCanvas(800,400);
 // BgImage = loadImage("background.jpg");

  //Runner_running = loadAnimation("Runner1.png", "Runner2.png", "Runner3.png");

  //Obstacle_img = loadImage("Music-notes.png");
   
 // Crow_img = loadImage("crow.png");
  // bg= createSprite();
   
  // bg.addImage(BgImage);

   //bg.velocityX = -4;

  Runner = createSprite(100,340,20,50);
  Runner.shapeColor = "red";
 // Runner.addAnimation("Running", Runner_running);

  Ground = createSprite(400,350,800,10);
  ground = createSprite(400,350,800,10);
  Ground.velocityX = -4;

  Ground.x = Ground.width/2

  Ground.visible = false;

  obstaclesGroup = new Group();
 
}

function draw() {
  background(0,0,0);  
  drawSprites();
  
  if(ground.x<0){
    ground.x = ground.width/2

  }
  if(ground.x>100){
    ground.x = ground.width/2

  }
  if(frameCount%1==0){
    score = score+1;

  }

  if(keyDown("space")) {
    Runner.velocityY = -6;        

  }
 // if(obstaclesGroup.isTouching(Runner)) {
   // Runner.destroySprite();

 // }
  Runner.velocityY+= 0.8;
  
  Runner.collide(Ground);
  spawnObstacles();
  stroke(black);
  textSize(20);
  fill(black);
  text("Score:" + score, 500,50);
  
}



function spawnObstacles() {
  if(frameCount%320 == 0) {
  var obstacle = createSprite(800,350,10,40);
        obstacle.velocityX = -7;
    //  obstacle.addImage(Obstacle_img);


    obstacle.lifetime = 320;
  
    obstaclesGroup.add(obstacle);

  if(frameCount%160 == 0){
    var obstacle2 = createSprite(800,350,10,40);

    obstacle2.velocityX = -7;

   // obstacle2.addImage(Crow_img);

    obstacle2.lifetime = 160;

    obstaclesGroup.add(obstacle2);

  }
  }

}