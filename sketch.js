
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, engine, world, Ground

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options ={
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
	}

	ball = Bodies.circle(260,100, 40, ball_options)
	World.add(world,ball)

	Ground = new ground(width/2, 670, width, 20,Ground_options);
	leftSide = new ground(1000, 600, 20, 120, Ground_options);
    rightSide = new ground(1300, 600,20, 120 )
    var Ground_options = {
		isStatic: true
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

ellipse(ball.position.x, ball.position.y, 40, 40)

  Ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
  
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x: 85, y: -85})
	}
}


