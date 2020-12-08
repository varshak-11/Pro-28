
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;

var boy1, slingshotObject, tree1, stone1;

var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new ground(600,height,1200,20);

boy1 = new boy(200,300,20,60)

tree1 = new tree(600,300,20,80)

stone1 = new stone(200,450,4)

mango1 = new mango(600,150,3)

mango2 = new mango(300,150,3)

mango3 = new mango(420,150,3)

mango4 = new mango(330,150,3)

mango5 = new mango(230,150,3)

slingshotObject = new slingshot(boy, stone)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  stone1.display();
  tree1.display();
  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display()
  mango5.display();
 



  drawSprites();
 
  function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshotObject.fly();
}
}

function detectcollision(stone1,mango1) {
	mangoBodyPosition=mango1.body.postion
	stoneBodyPosition=stone1.body.postion

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=mango1.r+stone1.r)
{
	matter.Body.setStatic(mango1.body.false);
}	
}


