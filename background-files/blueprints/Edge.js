class Edge{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, { isStatic: true, density: 20 });
        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        fill(this.color);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}