class Dustbin {
    constructor(x,y) {
        var options = {
            isStatic: true
    }
    this.bottomBody = Bodies.rectangle(x,y,200, 20, options);
    this.rightBody = Bodies.rectangle(x+100,y-75,20,150,options);
    this.leftBody = Bodies.rectangle(x-100,y-75,20,150,options);
    World.add(world, this.bottomBody);
    World.add(world, this.rightBody);
    World.add(world, this.leftBody);
 }

 display(){
     push();
     translate(this.leftBody.position.x, this.leftBody.position.y);
     rect(0, 0, 20, 150);
     pop();

     push();
     translate(this.rightBody.position.x, this.rightBody.position.y);
     rect(0, 0, 20, 150);
     pop();

     push();
     translate(this.bottomBody.position.x, this.bottomBody.position.y);
     rect(0, 0, 150, 20);
     pop();

 }
}


