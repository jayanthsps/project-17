var path,mainCyclist;
var player1,player2,player3;
var pathImg,mainRacerImg1,mainRacerImg2,gameOver;

var oppPink1Img,oppPink2Img;
var oppYellow1Img,oppYellow2Img;
var oppRed1Img,oppRed2Img;
var gameOverImg,cycleBell;

var pinkCG, yellowCG,redCG; 

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;


function preload(){
      pathImg = loadImage("images/Road.png");
      mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
      mainRacerImg2= loadAnimation("images/mainPlayer3.png");

      oppPink1Img = loadAnimation("images/opponent1.png","images/opponent2.png");
      oppPink2Img = loadAnimation("images/opponent3.png");

      oppYellow1Img = loadAnimation("images/opponent4.png","images/opponent5.png");
      oppYellow2Img = loadAnimation("images/opponent6.png");

      oppRed1Img = loadAnimation("images/opponent7.png","images/opponent8.png");
      oppRed2Img = loadAnimation("images/opponent9.png");

      cycleBell = loadSound("sound/bell.mp3");
      gameOverImg = loadImage("images/gameOver.png");
}

function setup(){
  
  createCanvas(800,300);

  // Moving background
  path=createSprite(100,150);
  path.addImage(pathImg);
  path.velocityX = -5;

  //creating boy running
  mainCyclist  = createSprite(70,150,20,20);
  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  mainCyclist.scale=0.07;

  
  pinkCG=new Group();
  yellowCG=new Group();
  redCG=new Group();


}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  
  
  
  if(gameState===PLAY){
    
  mainCyclist.y = World.mouseY;
      

    var select_Cyclists=Math.round(random(1,4))
      
    
    if (World.frameCount % 200 == 0) {
  if(select_Cyclists){
      redCyclists();
      }else if (select_Cyclists) {
      pinkCyclists();
    } else if (select_Cyclists) {
      yellowCyclists();
    } 
  }
    
   
   if(mainCyclist.isTouching(redCG)){
     
    gameState=END;
     
} 
    
   if(gameState===END){
     
     gameOver=createSprite(400,150,100)
     gameOver.addImage(gameOverImg)
     gameOver.scale=0.5
  
     
     path.visible=false
     mainCyclist.visible=false
     player2.visible=false
     
   } 
    
    edges= createEdgeSprites();
     mainCyclist .collide(edges);

    //code to reset the background
    if(path.x < 0 ){
        path.x = width/2;
      }
    
    
    
   

   }
}

function pinkCyclists(){
        
      player1=createSprite(1100,Math.round(random(50,250)));
      player1.scale =0.06;
      player1.velocityX = -(6 + 2*distance/150);
      player1.addAnimation("opponentPlayer1",oppPink1Img);
      player1.setLifetime=170;
      pinkCG.add(player1);
}

function redCyclists(){
       
        player2 =createSprite(1100,Math.round(random(50, 250)));
        player2.scale =0.06;
        player2.velocityX = -(6 + 2*distance/150);
        player2.addAnimation("opponentPlayer2",oppRed1Img);
        player2.setLifetime=170;
        redCG.add(player2);
}

function yellowCyclists(){
       
        player3 =createSprite(1100,Math.round(random(50, 250)));
        player3.scale =0.06;
        player3.velocityX = -(6 + 2*distance/150);
        player3.addAnimation("opponentPlayer3",oppYellow1Img);
        player3.setLifetime=170;
        yellowCG.add(player3);
}

