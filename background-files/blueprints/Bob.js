class Bob {
    constructor(x, y, indicator) {
        this.indicator = indicator;
        this.indicatorObj;
        this.indicator1 = indicator;
        this.indicator2;
        var options = {
            restitution: 1.3,
            friction: 0.02,
            density: 2,
        }
        this.radius = 30;
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }
    display() {
        push();
        fill(color(255, 12, 255));
        ellipse(this.body.position.x, this.body.position.y, this.radius);
        pop();
    }
}