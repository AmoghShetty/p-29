class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image=loadImage("polygon.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.pointA = null;
    }
  


  
    display(){
       console.log("Inside Display");
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            console.log("after push()");
            stroke(48,22,8);
            if(pointA.x < 220) {
                console.log("Inside If Beg")
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.image,pointA.x -30, pointA.y -10,15,30);
                console.log("Inside If");
            }
            else{
                console.log("Inside Else Beg");
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.image,pointA.x + 25, pointA.y -10,15,30);
                console.log("Inside Else");
            }
           
        }
            pop();
        }
    }
    
    
