const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;


var bgImg
var myEngine, myWorld;

function preload() {
bgImg = loadImage("snow1.jpg");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  snow1 = new Snow(600, 20, 20, 20);


}

function draw() {
  Engine.update(myEngine);
  background(bgImg);  
  snow1.display();

}