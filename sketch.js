
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	PAPER = new PAPER(700,320,70,70);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=createSprite(1,700,800,10);
	ground.shapeColor=color(blue);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  drawSprites();
 
}



