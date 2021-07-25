class Paper 
{
  constructor(x, y, radius) 
  {
    let options = {
      isStatic:false,
     ' restitution' :0.3,
     'friction'  :0.5,
     'density' :1.2
    };
   // <style> body {padding: 0; margin:0;}</style>
    this.body = Bodies.circle(x, y,radius , options);
    this.radius = radius
    World.add(world, this.body);
  }

  display() {
    
   
    ellipseMode(RADIUS)
 
    fill("yellow");

    circle(this.body.position.x, this.body.position.y,this.radius);
    ;
  }
  
}
