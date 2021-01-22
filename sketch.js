
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var stone1;
var slingShot
var gameState="onSling";

var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	
	mango1=new mango(1100,100,31);
	mango2=new mango(1225,225,32);
	mango3=new mango(1150,200,35);
	mango4=new mango(1000,150,33);
	mango5=new mango(1005,250,28);
	mango6=new mango(930,190,33);
	mango7=new mango(1075,200,29);
	mango8=new mango(1050,50,34);
	
	

	stone1=new stone(150,310,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	slingshot = new SlingShot(stone1.body,{x:235, y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  stone1.display();

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  slingshot.display();

  groundObject.display();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
}

function mouseDragged(){
	if(gameState !== "launched"){
	Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
 
 }
 }
 
 function mouseReleased(){
	 slingshot.fly();
  gameState="launch";
  

 }

 function keyPressed(){

if(keyCode === 32){
   Matter.Body.setPosition(stone1.body,{x:235,y:420})
   slingshot.attach(stone1.body);
}

 }

 function detectollision(lstone,lmango){

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){

	Matter.Body.setStatic(lmango.body,false);
  
	

}
 }