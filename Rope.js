class Rope {
    constructor(body1, point2) {
        var chain_options = {
            bodyA: body1,
            pointB: point2,
            length: 200,
            stiffness: 1
        }
        this.chain = Matter.Constraint.create(chain_options);
        World.add(world, this.chain);
        this.bodyA = body1;
        this.pointB = point2;
    }
    display() {
        var bodyAPos = this.chain.bodyA.position;
        var pointBPos = this.pointB;
        push();
        stroke("white");
        strokeWeight(2);
        line(bodyAPos.x, bodyAPos.y, pointBPos.x, pointBPos.y);
        pop();
    }
}