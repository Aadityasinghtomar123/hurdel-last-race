var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form;
var hurdle1,hurdle2;
var player1,p2,p3,p4,p5;
var r1,r2,r3;

var track;
var stop,start,arrow;

var game;

function preload(){
  trackImg = loadImage("track.jpg");
  hurdleImg = loadImage("obstacle1.png");
  player1Img = loadImage("girl1.png");
  playerg2Img = loadImage("girl2.png");
  playerg3Img = loadImage("girl3.png");
  playerg4Img = loadImage("girl4.png");
  playerg5Img = loadImage("girl5.png");
  r1Img = loadImage("r1.png");
  r2Img = loadImage("r2.png");
  r3Img = loadImage("r3.png");
  stopImg = loadImage("stop.png");
  startImg = loadImage("start.png");
  arrowImg = loadImage("arrow.png");
}

function setup(){
    canvas = createCanvas(800,700);
    track = createSprite(400,350,100,100);
    track.addImage(trackImg);

    player1 = createSprite(100,560,100,100);
    player1.addImage(player1Img);
    player1.scale = 0.6;
   
    hurdle1 = createSprite(540,550,100,100);
    hurdle1.addImage(hurdleImg);
    hurdle1.scale = 0.96;
    hurdle1.visible = false;
    
    hurdle2 = createSprite(540,430,100,100);
    hurdle2.addImage(hurdleImg);
    hurdle2.scale = 0.95;
    hurdle2.visible = false;
    
    
    p2 = createSprite(100,560,100,100);
    p2.addImage(playerg2Img);
    p2.scale = 0.6;
    p2.visible = false;
    
    p5 = createSprite(380,560,100,100);
    p5.addImage(playerg5Img);
    p5.scale = 0.6;
    p5.visible = false;

    r1 = createSprite(100,430,100,100);
    r1.addImage(r1Img);
    r1.scale = 0.5;

    r2 = createSprite(100,430,100,100);
    r2.addImage(r2Img);
    r2.scale = 0.5; 
    r2.visible = false;

    stop = createSprite(638,30,10,10);
    stop.addImage(stopImg);
    stop.scale = 0.35;
    
    start = createSprite(155,30,10,10);
    start.addImage(startImg);
    start.scale = 0.3;

    arrow = createSprite(375,30,10,10);
    arrow.addImage(arrowImg);
    arrow.scale = 0.2;
  }

  function draw(){
    //form.display();   

   //if(mousePressedOver(start)){
    track.velocityX = -8;
    if (track.x < 0){
      track.x = track.width/2;
    }
    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    hurdle1.velocityX = -2;
    hurdle2.velocityX = -2;
    if(gameState === 2){
      game.end();
    }
    
    if(keyDown("left_arrow")){
      track.velocityX = -200;
    }
    if(frameCount % 20 === 0) {
     p2.visible = true;
     player1.visible = false;
   }
   if(frameCount % 40 === 0) {
    p2.visible = false;
    player1.visible = true;
  }
  if(frameCount % 20 === 0) {
    r2.visible = true;
    r1.visible = false;
  }
  if(frameCount % 40 === 0) {
    r1.visible = true;
    r2.visible = false;
  }
  //}
 /* if(keyDown("space") && r1.y >= 159) {
    r1.velocityY = -12;
  }

  r1.velocityY = r1.velocityY + 0.8


if(mousePressedOver(stop)){
  p2.visible = false;
  track.velocityX = 0;
  r2.visible = false;
}
*/
 spawnHurdles();
 drawSprites();
  }

  function spawnHurdles(){
    if(frameCount % 30 === 0) {
      hurdle1.visible = true;
      hurdle2.visible = true;
     // hurdle1.lifetime = 300;
    //  hurdle2.lifetime = 300;
    }
  }

 

