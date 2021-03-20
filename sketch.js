const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var engine,world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var base1;
var polygon,slingshot;
var polygonimg;







function preload()
{
	polygonimg=loadImage("polygon.png")

}

function setup() {
	createCanvas(800, 700);


	engine=Engine.create()
	world=engine.world 

	


	Engine.run(engine);
    block1=new Block(330,235,30,40)
    block2=new Block(360,235,30,40)
    block3=new Block(390,235,30,40)
	block4=new Block(420,235,30,40)
	block5=new Block(420,235,30,40)
	block6=new Block(340,100,30,40)
	block7=new Block(360,100,30,40)
	block8=new Block(440,100,30,40)
	block9=new Block(400,100,30,40)
	base1=new Base(400,240,300,20)
	polygon=Bodies.circle(50,200,20);
	World.add(world,polygon);
    slingshot=new SlingShot(this.polygon,{x:100,y:200});
	console.log("test1");
    
	console.log("test2");

}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display(); 
block7.display(); 
block8.display(); 
block9.display();
base1.display();
imageMode(CENTER);
image(polygonimg,polygon.position.x,polygon.position.y,40,40);
slingshot.display();
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});





}
function mouseRealeased(){
slingshot.fly();




}
