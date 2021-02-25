class Ground
{
    constructor() {
        var options={
            isStatic:true
        }

    this.body = Bodies.rectangle(450,500,900,20,options)
    World.add(world, this.body);
    }
    
    display()
    {
    var boss = this.body.position;
    push()
    rectMode(CENTER)
    fill("white")
    rect(boss.x,boss.y,900,20);
    pop()
    }
}