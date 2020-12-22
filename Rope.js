class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA: bodyA,
            bodyB : bodyB,
           isStatic:true
            
        };
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    
    display(){
var pointA= this.rope.bodyA.position; //var pos =this.body.positon
var pointB=this.rope.bodyB.position;
strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y);                                          //pos.x,pos.y
    }
}