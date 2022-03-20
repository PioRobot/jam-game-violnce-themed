var player,playerImg,playerAnimation1;
var bg,bgImg;



function preload(){

playerImg=loadImage("player-violence-jam.png")


}

function setup() {
  createCanvas(windowWidth,windowHeight);


  player = createSprite(60,300,windowWidth/60 ,windowHeight/30);
  player.addImage("stand",playerImg)
player.scale=0.1



console.log("oh,you opend the console,well you could sub to my channel by the way");
console.log("heres the link:https://www.youtube.com/channel/UCrwv2u-lsGCSQoD97pIPaXQ/videos");
console.log("also don't mind the errors below,they arent really a big deal");




}
function draw() {
 background(120)
  
 //walk
 if(keyDown("D")){

  player.x=player.x+5;
  
  
  }
//run
if(keyDown("D")  && keyDown("Shift") ){

  player.x=player.x+7;
  
  }

 //walk
 if(keyDown("A")){

  player.x=player.x-5;
  
  }
//run
if(keyDown("A")  && keyDown("Shift") ){

  player.x=player.x-7;
  
  }
if (keyDown("W")) {
  
player.y = player.y-5;

}

if (keyDown("W") && keyDown("Shift")) {
  
  player.y = player.y-7;
  
  }
    
  if (keyDown("S")) {
  
    player.y = player.y+5;
    
    }
    
    if (keyDown("S") && keyDown("Shift")) {
      
      player.y = player.y+7;
      
      }
  


  drawSprites();
}




//xcdvb 