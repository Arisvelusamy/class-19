var car,carImage;
var roads,roadImage;
var traffic, trafficImage;
var over,overImage;
var ar2,arImag;

function preload(){
     carImage = loadImage("R.png");
     roadImage = loadImage("roa.jpg");
  trafficImage = loadImage("on.png");
  overImage = loadImage("Game Over.png");
  arImag = loadImage("b.png");
  
}

function setup() {
createCanvas(500,300);
  
road=createSprite(100,150);
road.addImage(roadImage);
road.velocityX = -5;
road.scale = 2
  car=createSprite(100,250);
  car.addImage(carImage);
  car.scale = 0.1
  trafficGroup = createGroup();
  arGroup = createGroup();
}

function draw() {
  car.y = World.mouseY;
 drawSprites();
    if(road.x < 20 ){
    road.x = width/2;
  }
  spawnTraffic();
  spawnar();
    if (trafficGroup.isTouching(car)||arGroup.isTouching(car))
  {
    road.veocity = 0;
    car.velocity = 0;
    trafficGroup.velocity = 0;
    arGroup.velocity = 0;
    textSize(40);
    fill("White");
    text("Game Over",150,150);
  }
  
}

function spawnTraffic()
{
   if(World.frameCount % 60 == 0){
  var traffic = createSprite(600,Math.round(random(20,370)),20,20);
   traffic.velocityX = -4;
     traffic.addImage(trafficImage);
     traffic.scale = 0.09;
     trafficGroup.add(traffic);
   }
}

function spawnar()
{
   if(World.frameCount % 70 == 0){
  var ar = createSprite(600,Math.round(random(20,370)),20,20);
   ar.velocityX = -3;
     ar.addImage(arImag);
     ar.scale = 0.03;
     arGroup.add(ar);
   }
}

