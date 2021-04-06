var PLAY = 1;
var END = 0;
var gameState = PLAY;




var background,runner,jwell,diamond,sword,cash;
var backgroundImage,runnerImage,jwellImage,diamondImage;
var swordImage,cashImage;




function preload (){
backgroundImage = loadImage("Road.png");  
runnerImage = loadAnimation("Runner-1.png","Runner-2.png") ; 
jwellImage = loadImage("jwell.png") ; 
diamondImage = loadImage("diamonds.png") ;
swordImage = loadImage("sword.png") ; 
cashImage = loadImage("cash.png");
}




 
  




function setup() {
  createCanvas(600, 600);
 back=createSprite (300,300);
 back.addImage(backgroundImage); 
 back.scale = 1 ;
 back.velocityY=3;
  
 boy=createSprite(70,500,10,10); 
 boy.addAnimation("SahilRunning", runnerImage) ;
 boy.scale =0.08;

cashG=new Group();
diamondG=new Group();
jwellG=new Group();
swordG=new Group();

score = 0

}

function draw() {
 background(0)
 
  back.velocityY = 3;
  if(back.y>400){
  back.y = height/2 
  } 
    
  spawncash();
  spawnsword();
  spawndiamonds();
  spawnjwell();
  
     
  boy.x = World.mouseX ;
  
  if(cashG.isTouching(boy)){
    cashG.destroyEach();score = score + 70}
   
 else if(diamondG.isTouching(boy)){
    diamondG.destroyEach();score = score + 100}
   
 else if(jwellG.isTouching(boy)){
    jwellG.destroyEach();score = score + 130}
 
 else if(swordG.isTouching(boy)){
   gameState = End
   boy.addAnimation("Sahilrunning",endImg);
 }
   
   
  
  
  
  
  
  

  drawSprites();
textSize(20);
fill(255);  
text("TREASURE:"+score,20,120) ;

}



function spawnjwell(){
 
if(frameCount % 100===0){
  
 var jwell=createSprite(Math.round(random(50,550),40,10,
  10));
 jwell.addImage(jwellImage); 
 jwell.scale=0.13
 jwell.velocityY=3 
 jwell.lifitime = 150 
 jwellG.add(jwell); 
  }
}


function spawndiamonds(){

  if(frameCount% 150===0){
  
 var dia=createSprite(Math.round(random(50,550),40,10,
 10)); 
 dia.addImage(diamondImage);
 dia.scale = 0.03
 dia.velocityY=3
 dia.lifetime=150 
 diamondG.add(dia) ;  
  }
}

function spawnsword(){
  if(frameCount % 120===0){
 var sword=createSprite(Math.round(random(50,550),40,10,
 10));
  sword.addImage(swordImage);
  sword.scale=0.08
  sword.velocityY=3
  sword.lifetime=150
  swordG.add(sword) ; 
  }
}

function spawncash(){
  
 if(frameCount % 90===0){
   var cash=createSprite(Math.round(random(50,550),40,10,
   10))
   cash.addImage(cashImage);
   cash.scale=0.09
   cash.velocityY=3
   cash.lifetime=150
   cashG.add(cash);
   
 } 
  
}
  

