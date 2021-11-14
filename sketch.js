var frog_running;
var frog;
var rocking;
var bg;
var bgIng;
var invisibleGR;
var play, end;
var gamestate = play;
var rockG;

function preload(){
frog_running = loadAnimation( "FRIG3.png","FROG4.png") 
frogstanding = loadAnimation("FROG1.png")
rocking= loadImage("rock.png")
bgIng = loadImage("background2.jpg")
//frog_running = loadImage("frog sit.png")
}

function setup() {

 createCanvas(displayWidth,displayHeight)
 bg = createSprite(width/2,height/2)
 bg.addImage(bgIng)
 bg.velocityX=-2
 //bg.scale = 1.3;
 frog = createSprite( 100,600)
 //frog.addImage(frog_running)
 //frog.scale = 2
 frog.addAnimation("running",frog_running)
 frog.addAnimation("standing", frogstanding)
 invisibleGR = createSprite(width/2,height-2,width,10)
 invisibleGR.visible = true
 rockG = new Group()
}

function draw() {
background("green")
frog.addAnimation("standing", frogstanding)
if (gamestate === play){
    frog.addAnimation("running",frog_running)
    if (bg.x<0){
        bg.x=bg.width/2
    }
    if (keyDown("SPACE")){
     frog.velocityY = -12
        
    }
    frog.velocityY = frog.velocityY+.5
    spawnrock()
}

else if (gamestate === end){

}
frog.collide(invisibleGR)



drawSprites()


}
function spawnrock(){
    if(frameCount%500===0){
        var rock = createSprite(width-70,1000)
        rock.addImage(rocking)
        rock.velocityX = -2
        rock.scale = 0.7
        rock.lifetime = 800
        rockG.add(rock)
    }
}












