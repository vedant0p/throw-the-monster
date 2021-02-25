class Monster
{
    constructor(x,y,r)
    {
        var options = {
            density: 5,
            frictionAir: 0,
        };
            this.x=x;
            this.y=y;
            this.r=r;
            this.image=loadImage("images/Monster-01.png");
            this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
            World.add(world, this.body);

    }
    display()
    {
    var boss = this.body.position;
    push()
    imageMode(CENTER);
    translate(boss.x,boss.y)
    image(this.image,0,0,200,200)
    pop()
    }
}