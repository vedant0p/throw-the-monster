class Hero
{
    constructor(x,y,r)
    {
        var options = {
            density: 1,
            frictionAir: 1,
        };
            this.x=x;
            this.y=y;
            this.r=r;
            this.image=loadImage("images/Superhero-02.png");
            this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
            World.add(world, this.body);

    }
    display()
    {
    var boss = this.body.position;
    push()
    image(this.image,boss.x,boss.y,250,90)
    pop()
    }
}