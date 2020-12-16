var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(700, 625);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,25);
	groundSprite.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 23 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	box1 = new Box(340,350,100,10);
	box2 = new Box(285,300,10,70);
	box3 = new Box(395,300,10,70);

}


function draw() {
  rectMode(CENTER);
  background("blue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
  box1.display();
  box2.display();
  box3.display();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);  

  }
}



