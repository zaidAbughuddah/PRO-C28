
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var stone1, stoneShot;
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,120,30);
	mango2=new mango(1150,170,20);
	mango3=new mango(1015,100,40);
	mango4=new mango(1050,180,30);
	mango5=new mango(920,215,30);
	mango6=new mango(1220,210,30);

	stone=new stone(230,410,30);	
	stoneshot = new Slingshot(stone.body,{x:230,y:410});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  stone.display();

 treeObj.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();

 stoneshot.display();
 

  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    stoneshot.fly();
}