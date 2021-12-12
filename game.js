var bomb1 ,bomb2 ;
var bomb1Img , bomb2Img ;
var rocket ,star ;
var rocketImg ,starImg ;
var bk , bkImg ;
var starG , bomb1G , bomb2G ;

//Game States
var PLAY=1;
var END=0;
var gameState=1;


function preload() {

    bkImg = loadImage("bk.png") ;
bomb1Img = loadImage("bomb1.png") ;
bomb2Img = loadImage("bomb2.png") ;
rocketImg = loadImage("rocket.png") ;
starImg = loadImage("star.png")

}

function setup() {

createCanvas(windowWidth , windowHeight) ;
    bk=createSprite(width/2,200);
bk.addImage(bkImg);
bk.velocityY = 7;

bomb1G = new Group() ;
bomb2G = new Group() ;
star = new Group() ;



}

function draw() {
    if(gameState===PLAY){
        background(0);
        
        
//edges= createEdgeSprites();
   //     rocket.collide(edges);
        
        //code to reset the background
        if(bk.y > height ){
          bk.y = height/2;
      
        }
        
       
      
        bomb1Group();
        bomb2Group() ;
        starGroup() ;
          
      
          if (cashG.isTouching(boy)) {
            cashG.destroyEach();
            treasureCollection=treasureCollection+50;
          }
            
          }else{
            if(bomb1Group.isTouching(rocket)) {
              gameState  = END ;
              rocket.addAnimation(endImg);
              rocket.scale = 0.7 ;
              rocket.x = 750 ;
              rocket.y = 300 ;
            star.destroyEach() ;
            }
            if(bomb2Group.isTouching(rocket)) {
                gameState  = END ;
                rocket.addAnimation(endImg);
                rocket.scale = 0.7 ;
                rocket.x = 750 ;
                rocket.y = 300 ;
              star.destroyEach() ;
              }


        }
        drawSprites();
        textSize(40);
        fill(255);
        text("star: "+ treasureCollection,1200,40);
      
        }
  
        
      



function createbomb1() {

    if (World.frameCount % 530 == 0) {
      var bomb1 = createSprite(Math.round(random(50, 1250),40, 10, 10));
      bomb1.addImage(swordImg);
      bomb1.scale=0.1;
      bomb1.velocityY = 7;
      bomb1.lifetime = 250;
      bomb1Group.add(bomb1);
    }
  
  }
  
  function creatbomb2() {
  
    if (World.frameCount % 530 == 0) {
      var bomb2 = createSprite(Math.round(random(50, 1250),40, 10, 10));
      bomb2.addImage(bomb2Img);
      bomb2.scale=0.1;
      bomb2.velocityY = 7;
      bomb2.lifetime = 250;
      bomb2Group.add(bomb2);
  }
  }
  
  function star() {
  
    if (World.frameCount % 530 == 0) {
      var star = createSprite(Math.round(random(50, 1250),40, 10, 10));
      star.addImage(starImg);
     star.scale=0.1;
      star.velocityY = 7;
      star.lifetime = 250;
      starGroup.add(star);
  }
  }
