const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,370,50,50);
    box2 = new Box(840,370,50,50);
    box3 = new Box(700,290,50,50);
    box4 = new Box(840,290,50,50);
    box5 = new Box(770,230,50,50);
    ground = new Ground(600,400,1200,30);
    pig1 = new Pig(770,370);
    pig2 = new Pig(770,290);
    log1 = new Log(770,310,220, PI);
    log2 = new Log(770,240,220, PI);
    log3 = new Log(750,230,100,-PI/4);
    log4 = new Log(820,230,100, PI/4);
    bird = new Bird(100,100);
    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}