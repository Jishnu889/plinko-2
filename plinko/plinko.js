class Plinko
{
    constructor(a,b,c)
    {
    var options=
    {
        isStatic:true
    }
    this.x=a
    this.y=b
    this.radius=c 
    this.body=Bodies.circle(a,b,c,options)
    World.add(world,this.body)
    }
    display()
    {
    var plinkoPosition=this.body.position 
    push()
    fill("pink")
    translate(plinkPosition.x,plinkoPosition.y)
    ellipse(0,0,this.radius,this.radius)
    pop()
    }
    }