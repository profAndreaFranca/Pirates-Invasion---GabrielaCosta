const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine, world;

var ground, bgImg, tower, towerImg;



function preload() {
  bgImg = loadImage("./assets/background.gif")
  towerImg = loadImage("./assets/tower.png")
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
<<<<<<< HEAD

  ground = Bodies.rectangle(0,height,width*2,1,{isStatic:true})
  World.add(world,ground)

  tower = Bodies.rectangle(160,350,160,310,{isStatic:true})
  World.add(world,tower)
=======
  
 options={
 isStatic:true
 }
 
 ground= bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
>>>>>>> cc21b163afa865d63234f34405206b5b25793651
 
}

function draw() {
  background(189);
<<<<<<< HEAD
  image(bgImg,0,0,width, height)
 
=======
>>>>>>> cc21b163afa865d63234f34405206b5b25793651
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
  
  //solo
  rect(ground.position.x, ground.position.y,width*2,1)
  //torre
  push()
  imageMode(CENTER)
  image(towerImg,tower.position.x, tower.position.y,160,310)
  pop()

  //posição do mouse
  text("X: "+mouseX+"| Y: "+mouseY,mouseX, mouseY)
   
}
