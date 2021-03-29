
var player;
var score = 0;
var wormGrp;
var frogImg;
var swampImg;
var wormImg;

function preload() {
  //load game assets
  frogImg = loadImage("Images/frog.png");
  swampImg = loadImage("Images/swampImg.png");
  wormImg = loadImage("Images/worm.png");
}


function setup() {
  createCanvas(600,600);
  swamp = createSprite(300,300);
  swamp.scale = 2.5;
  swamp.addImage(swampImg);
  player = createSprite(50,520,20,20)
  player.addImage(frogImg);
  player.scale = 0.35;
  wormGrp = new Group();
}

function draw() {
  background("green");
  player.x = mouseX;
  player.y = mouseY;
  genWorms();
  fill("orange");
  text("Worms Killed = " + score,300,100)
  for(var i = 0;i < wormGrp.length;i++)
  {
    var temp = wormGrp.get(i);
    if(player.isTouching(temp))
    {
      score++;
      temp.destroy();
      temp = null;
    }
  }
  drawSprites();
}

function genWorms()
{
  if (frameCount%10 == 0)
  {
    var worm = createSprite(random(150,450),random(300,400),50,5)
    worm.shapeColor = "brown";
    worm.addImage(wormImg);
    worm.scale = random(0.05,0.35);
    worm.velocityX = random(-5,5);
    worm.velocityY = random(-5,5);
    wormGrp.add(worm);
  }
}