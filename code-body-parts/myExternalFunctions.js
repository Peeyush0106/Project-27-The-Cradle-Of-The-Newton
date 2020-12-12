function doMinorSettings() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(0);
	topBoard.display();
}

function showBobIndicationBobAndOtherAccessories(bob) {
	bob.indicatorObj.display();
	bob.joint.display();
	bob.display();
	push();
	fill("black");
	textSize(20);
	// For bob1, bob2, bob4, and bob5.
	if (bob != bob3) {
		// text(bob.indicator, bob.body.position.x, 475);
		text(bob.indicator, bob.indicatorObj.body.position.x - 5, bob.indicatorObj.body.position.y + 5);
	}
	// For bob3

	if (bob === bob3) {
		textSize(bob3NumberSize);
		bob3TextX = bob3.body.position.x - 26.25;
		text(bob.indicator1, bob3TextX, bob.indicatorObj.body.position.y - 5);
		text(bob.indicator2, bob3TextX, bob.indicatorObj.body.position.y + 15);
	}
	pop();
	push();
	stroke("blue");
	strokeWeight(2.5);
	line(bob.indicatorObj.body.position.x, bob.indicatorObj.body.position.y - 15, bob.body.position.x, bob.body.position.y + 20);
	line(bob.body.position.x - 7.5, bob.body.position.y + 32.5, bob.body.position.x, bob.body.position.y + 20);
	line(bob.body.position.x + 7.5, bob.body.position.y + 32.5, bob.body.position.x, bob.body.position.y + 20);
	pop();
}

function checkKeyPresses() {
	if (keyDown("1")) {
		Body.applyForce(bob1.body, bob1.body.position, { x: -16, y: 0 });
	}
	if (keyDown("2")) {
		Body.applyForce(bob2.body, bob2.body.position, { x: -16, y: 0 });
	}
	if (keyDown("4")) {
		Body.applyForce(bob4.body, bob4.body.position, { x: 16, y: 0 });
	}
	if (keyDown("5")) {
		Body.applyForce(bob5.body, bob5.body.position, { x: 16, y: 0 });
	}
	if (keyDown("right")) {
		Body.applyForce(bob3.body, bob3.body.position, { x: 16, y: 0 });
	}
	if (keyDown("left")) {
		Body.applyForce(bob3.body, bob3.body.position, { x: -16, y: 0 });
	}
}

function setContinuousProperties() {
	box1.body.position.x = bob1.body.position.x;
	box1.body.position.y = bob1.body.position.y + 80;

	box2.body.position.x = bob2.body.position.x;
	box2.body.position.y = bob2.body.position.y + 80;

	box3.body.position.x = bob3.body.position.x;
	box3.body.position.y = bob3.body.position.y + 80;

	box4.body.position.x = bob4.body.position.x;
	box4.body.position.y = bob4.body.position.y + 80;

	box5.body.position.x = bob5.body.position.x;
	box5.body.position.y = bob5.body.position.y + 80;
}

// function mouseDragged() {
// 	moveBobWithMouse(bob1);
// 	moveBobWithMouse(bob2);
// 	moveBobWithMouse(bob3);
// 	moveBobWithMouse(bob4);
// 	moveBobWithMouse(bob5);
// }

// function moveBobWithMouse(bob) {
// 	if (thisBobIsDragged(bob)) {
// 		bob.body.position.x = mouseX;
// 		console.log("Mouse is Dragged over: " + bob);
// 	}
// }

// function thisBobIsDragged(bead) {
// 	return (mouseX > (bead.body.position.x - 15)
// 		&& mouseX < (bead.body.position.x + 15)
// 		&& mouseY > (bead.body.position.y - 15)
// 		&& mouseX < (bead.body.position.y + 15))
// }

// Also do see index.html.