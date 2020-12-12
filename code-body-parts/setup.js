function setup() {
	canvasWidth = 800;
	canvasHeight = 600;
	createCanvas(canvasWidth, canvasHeight);
	engine = Engine.create();
	world = engine.world;
	topBoard = new Board(400, 200);

	bob1 = new Bob(280, 300, 1);
	bob2 = new Bob(340, 300, 2);
	bob3 = new Bob(400, 300, "(Right/Left");
	bob4 = new Bob(460, 300, 4);
	bob5 = new Bob(520, 300, 5);

	joint1 = new Rope(bob1.body, { x: bob1.body.position.x, y: 200 });
	joint2 = new Rope(bob2.body, { x: bob2.body.position.x, y: 200 });
	joint3 = new Rope(bob3.body, { x: bob3.body.position.x, y: 200 });
	joint4 = new Rope(bob4.body, { x: bob4.body.position.x, y: 200 });
	joint5 = new Rope(bob5.body, { x: bob5.body.position.x, y: 200 });

	box1 = new IndicatorBox(bob1.body.position.x, bob1.body.position.y);
	box2 = new IndicatorBox(bob2.body.position.x, bob2.body.position.y);
	box3 = new IndicatorBox(bob3.body.position.x, bob3.body.position.y);
	box4 = new IndicatorBox(bob4.body.position.x, bob4.body.position.y);
	box5 = new IndicatorBox(bob5.body.position.x, bob5.body.position.y);

	side_EdgesWidth = 10;
	topAndBottom_EdgesHeight = 10;
	rightEdge = new Edge(canvasWidth + (side_EdgesWidth / 2), canvasHeight / 2, side_EdgesWidth, canvasHeight);
	leftEdge = new Edge(0 - (side_EdgesWidth / 2), canvasHeight / 2, side_EdgesWidth, canvasHeight);
	topEdge = new Edge(canvasWidth / 2, 0 - (topAndBottom_EdgesHeight / 2), canvasWidth, topAndBottom_EdgesHeight);
	bottomEdge = new Edge(canvasWidth / 2, canvasHeight + (topAndBottom_EdgesHeight / 2), canvasWidth, topAndBottom_EdgesHeight);

	bob1.indicatorObj = box1;
	bob2.indicatorObj = box2;
	bob3.indicatorObj = box3;
	bob4.indicatorObj = box4;
	bob5.indicatorObj = box5;

	bob1.joint = joint1;
	bob2.joint = joint2;
	bob3.joint = joint3;
	bob4.joint = joint4;
	bob5.joint = joint5;

	bob3TextX = bob3.body.position.x - 31.5;
	bob3.indicator2 = "Arrow)";
	bob3NumberSize = 11.5;

	Engine.run(engine);
}

// Also do see index.html.