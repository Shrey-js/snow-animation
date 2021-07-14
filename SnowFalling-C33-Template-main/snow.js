class Snow {
constructor(x, y, width, height) {
var options = {
density: 1,
friction: 1,
}
this.body = Bodies.rectangle(x, y , width, height, options);
World.add(myWorld, this.body);
this.image = loadImage("snow4.webp");
this.width = width;
this.height = height;
}
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    rotate(angle);
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);

}
}