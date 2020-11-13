class Bird {
    constructor(x, y) {
      var options = {
          'restitution': 0.8,
          'friction': 1,
          'density': 1.0
      }
      this.body = Bodies.rectangle(x, y, 30, 30, options);
      this.width = 30;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      strokeWeight(4);
      stroke("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  