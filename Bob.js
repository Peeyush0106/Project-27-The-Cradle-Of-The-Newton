class Bob {
    constructor(x, y) {
        var options = {
            restitution: 1.3,
            friction: 0.02,
            density: 2,
        }
        this.radius = 25;
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }

    display() {
        ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
}