class HeroClass {
    constructor(x, y, r) {
      var options = { 
        density: 1, 
        frictionAir: 1};
  
     this.x=x;
     this.y=y;
     this.r=r;
      this.body = Bodies.circle(this.x,this.y,(this.r)/2, options);
      this.image = loadImage("superhero1.png");
      //this.body = Bodies.circle(x,y,radius,options);
      //this.width = width;
      //this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      //var angle = this.body.angle;
     
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      fill(225,0,255);
     imageMode(CENTER);
     image(this.image,0,0,500 , 500);
      pop();
    }
  }