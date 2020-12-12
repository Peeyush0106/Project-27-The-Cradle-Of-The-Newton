class Board {
    constructor(x, y) {
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
            isStatic: true
        }
        this.width = 350;
        this.height = 30;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display() {
        push();
        fill(color(198, 120, 0));
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}