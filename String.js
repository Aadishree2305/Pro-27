class String {
    constructor (bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 0.04,
            length : 15,
        }
        this.pointB= pointB;
        this.string = Constraint.create(options);
        World.add (world,this.string);
    }
       display(){
           if(this.string.bodyA){
           var pointB = this.pointB;
           var pointA = this.string.bodyA.position;
           strokeWeight(4);
           line(pointA.x,pointA.y,pointB.x,pointB.y);
           }
       }
}