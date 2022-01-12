
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2;
var wall;
var wood;
var angle= 60

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball2_option={
  restitution: 0.82
  }
  
  ball2= Bodies.circle(300,20,20,ball2_option)
  World.add(world,ball2)
 
  wall= Bodies.rectangle(300,200,200,20,ground_options)
  World.add(world,wall)

  wood= Bodies.rectangle(100,200,100,20,ground_options)
World.add(world,wood)


}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
 ellipse(ball2.position.x,ball2.position.y,20)
 rect(wall.position.x, wall.position.y,200,20)
 Matter.Body.rotate(wood,angle)
 push()
 translate(wood.position.x, wood.position.y)
 rotate(angle)
 rect(0,0, 100,20)
 pop()
 angle+= 0.1
}

