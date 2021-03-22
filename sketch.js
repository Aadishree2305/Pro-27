const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var string1,string2,string3,string4,string5;
var base1;

function preload(){
	
}

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ball1 = new Ball(150,520);
  ball2 = new Ball(250,520);
  ball3 = new Ball(350,520);
  ball4 = new Ball(450,520);
  ball5 = new Ball(550,520);

  base1 = new Base(350,220,600,30);

  string1 = new String(ball1.body,{x:150,y:220});
  string2 = new String(ball2.body,{x:250,y:220});
  string3 = new String(ball3.body,{x:350,y:220});
  string4 = new String(ball4.body,{x:450,y:220});
  string5 = new String(ball5.body,{x:550,y:270});


//	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  base1.display();

 string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
 
}