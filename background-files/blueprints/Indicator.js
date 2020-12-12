class IndicatorBox {
    constructor(x, y) {
        var options = {
            density: 1
        }
        this.width = 55;
        this.height = 40;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        // World.add(world, this.body);
    }

    display() {
        push();
        noStroke();
        fill(200, 205, 50);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}