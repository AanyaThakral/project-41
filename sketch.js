const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thunder, thunder1, thunder2, thunder3, thunder4;

var engine;
var maxDrops = 100;
var drops = [];
var rand;
var world;

function preload(){
    
    thun1 = loadImage("thunderbolt/1.png");
    thun2 = loadImage("thunderbolt/2.png");
    thun3 = loadImage("thunderbolt/3.png");
    thun4 = loadImage("thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(450,650);
    
    engine = Engine.create();
    world = engine.world;
    
    

    if(frameCount % 100 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
         
        }

    }
    umbrella = new Umbrella(200,450);
}

function draw(){
    background("black");
    Engine.update(engine);


      rand = Math.round(random(1,4));
      if(frameCount%100===0){
         
          thun = createSprite(random(10,350), random(10,30), 10, 10);
          switch(rand){
              case 1: thun.addImage(thun1);
              break;
              case 2: thun.addImage(thun2);
              break; 
              case 3: thun.addImage(thun3);
              break;
              case 4: thun.addImage(thun4);
              break;
              default: break;
          }
          thun.scale = random(0.2,0.8)
          thun.lifetime=10;
      }
  
      for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }    
     umbrella.display();
     drawSprites();
}   

