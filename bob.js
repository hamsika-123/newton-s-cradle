class bob{
    constructor(x,y,w){
    var options = 
    {
         'restitution':1,
         'friction':0.5,
         'density':1.2

    }
    
      
    
   this.radious = w;
  
   this.body = Bodies.circle(x, y, this.radious, options);

    World.add(world, this.body);
}
display(){
    var bobpos=this.body.position;
        push();
        fill("red");
        translate(bobpos.x,bobpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radious,this.radious);
        pop();
}
}
