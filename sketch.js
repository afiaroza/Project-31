const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var Thunder,Thunder1,Thunder2,Thunder3,Thunder4;
var ThunderCreatedFrame = 0;

function preload(){
   Thunder1 = loadImage("images/thunderbolt/1.png");
   Thunder2 = loadImage("images/thunderbolt/2.png");
   Thunder3 = loadImage("images/thunderbolt/3.png");
   Thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   var canvas = createCanvas(500, 700);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   for(var i = 0; i < maxDrops; i ++ ){
      drops.push(new Drop(random(0,400), random(0,400)));
   }
}

function draw(){
   Engine.update(engine);
   background(0); 
    
    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        ThunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: Thunder.addImage(Thunder1);
            break;
            case 2: Thunder.addImage(Thunder2);
            break; 
            case 3: Thunder.addImage(Thunder3);
            break;
            case 4: Thunder.addImage(Thunder4);
            break;
            default: break;
        }
        Thunder.scale = random(0.3,0.6);
    }

    if(ThunderCreatedFrame + 12 === frameCount && Thunder){
        Thunder.destroy();
    }


   umbrella.display();

   for(var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].update();
  }

   drawSprites();
}   

