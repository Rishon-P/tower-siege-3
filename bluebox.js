class bluebox {
    constructor(x,y,width,height){
        var options ={
            friction:0.0,
            restitution:0.4
        }     
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
        this.visibility = 255
    }
    display(){
        if (this.body.speed<3){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill(0,0,255)
        rect(0,0,this.width,this.height)
        pop();
        
           
        }
        else {
            World.remove(world,this.body)
            push();
            this.visibility = this.visibility - 5
            tint(255,this.visibility)
            pop();

        }
    }
    score(){
        if (this.visibility<0&&this.visibility>-105){
            score++;
        }
    }
}