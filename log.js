class Log{

    constructor(x,y,height,angle){

    var options={
    restitution:1,

    friction:2.9
     }

        this.body=Bodies.rectangle(x,y,20,height,options);

        this.width =20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    //angle = radians unit
    //PI value in radians = 180 degree
    display(){
        var pos = this.body.position;
    var angle = this.body.angle;

    angleMode(RADIANS);
    push();
    //make few changes in code
    translate(pos.x,pos.y);
    rotate(angle);

    rectMode(CENTER);
    strokeWeight(4);
    stroke("yellow");
  fill("white") 
    rect(0,0,this.width,this.height);
    pop();
    }

}