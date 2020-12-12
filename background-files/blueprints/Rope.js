class Rope {
    constructor(body1, point2) {
        this.chain_options = {
            bodyA: body1,
            pointB: point2,
            length: 200,
            stiffness: 0.5
        }
        this.chain = Matter.Constraint.create(this.chain_options);
        World.add(world, this.chain);
        this.bodyA = body1;
        this.pointB = point2;
    }
    relese() {
        this.chain.bodyA = null
    }
    join(chainObj) {
        this.chain.bodyA = chainObj;
    }
    display() {
        if (this.chain.bodyA) {
            var bodyAPos = this.chain.bodyA.position;
            var pointBPos = this.pointB;
            push();
            stroke("white");
            strokeWeight(2);
            // The 15 number below is the bob radius / 2.
            line(bodyAPos.x - 20, bodyAPos.y, pointBPos.x, pointBPos.y);
            line(bodyAPos.x + 20, bodyAPos.y, pointBPos.x, pointBPos.y);
            pop();
        }
    }
}