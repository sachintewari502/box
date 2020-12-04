const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground2, ball;
var box;
var box3;
var box4;
var box2;
var boxy;
var bird;
var birdImage;


var pigge;
var pigge2;
var log2;
var log3;
var log4;
var log5;


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground2=new Ground(600,450,1200,30);
     box= new Box(605,350,60,60);  
     box2=new Box(705,350,60,60);

     box3=new Box(605,250,60,60);
     box4=new Box(705,250,60,60);

     bird=new Bird(100,100);
     

    

     log2=new Log(650,300,256,PI/2);
     log3=new Log(650,200,256,PI/2);

     log4=new Log(595,130,150 ,PI/7);
     log5=new Log(685,130,158,PI/-7);
     

     pigge=new Pig(640,350);
     pigge2=new Pig(640,250);
     
    boxy=new Box(655,145,60,60);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground2.display();
   box.display(); 
   box2.display();
   box3.display();
   box4.display();
   boxy.display();

   pigge.display();
pigge2.display();

 log2.display();
 log3.display();
 log4.display();
 log5.display();
 bird.display();
}