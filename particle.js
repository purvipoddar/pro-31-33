class Particle{
    constructor(x,y,r){
        var options={
        isStatic=true
}

        this.r = 15
        this.body = Bodies.circle(x,y,15,options);
        this.color = color(random(0,225),random(0,225),random(0,225));
        World.add(world,this.body);
}
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(CENTER);
        ellipse(0, 0, this.r,this.r);
        pop();
}
}