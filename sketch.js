const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var topBoard;
var joint1;

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;
	topBoard = new Board(300, 200, 300, 50);
	bob1 = new Bob(200, 300);
	bob2 = new Bob(250, 300);
	bob3 = new Bob(300, 300, 50);
	bob4 = new Bob(350, 300, 50);
	bob5 = new Bob(400, 300, 50);
	joint1 = new Rope(bob1.body, {x: bob1.body.position.x, y: 200});
	joint2 = new Rope(bob2.body, {x: bob2.body.position.x, y: 200});
	joint3 = new Rope(bob3.body, {x: bob3.body.position.x, y: 200});
	joint4 = new Rope(bob4.body, {x: bob4.body.position.x, y: 200});
	joint5 = new Rope(bob5.body, {x: bob5.body.position.x, y: 200});

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(0);
	push();
	textSize(25);
	fill("red");
	text("Mouse X: " + mouseX, 600, 250);
	text("Mouse Y: " + mouseY, 600, 350);
	pop();
	if (keyDown("1")) {
		Body.applyForce(bob1.body, bob1.body.position, { x: -16, y: 0 });
	}	
	if (keyDown("2")) {
		Body.applyForce(bob2.body, bob1.body.position, { x: -16, y: 0 });
	}		
	if (keyDown("4")) {
		Body.applyForce(bob4.body, bob1.body.position, { x: 16, y: 0 });
	}	
	if (keyDown("5")) {
		Body.applyForce(bob5.body, bob1.body.position, { x: 16, y: 0 });
	}
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	topBoard.display();
	joint1.display();
	joint2.display();
	joint3.display();
	joint4.display();
	joint5.display();
}