class Fly {

    constructor(body1,pointB)
    {
        var options = {
            bodyA: body1,
           pointB: pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB
        this.fly = Constraint.create(options);
        World.add (world,this.fly);
    }

    display(){
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;

        push()
        strokeWeight(0);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop()
    }

}
