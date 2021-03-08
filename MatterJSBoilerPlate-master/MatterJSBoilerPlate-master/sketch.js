const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
	mango1=new Mango(600,100,30)
	mango2=new Mango(700,100,30)
	mango3=new Mango(800,100,30)
    mango4=new Mango(900,100,30)
    mango5=new Mango(1000,100,30)

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

  

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);

detectollision(stoneObj,mango1)
detectollision(stoneObj,mango2)
detectollision(stoneObj,mango3)
detectollision(stoneObj,mango4)
detectollision(stoneObj,mango5)

    //log6.display();
    slingshot.display();   
    getTime(); 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}
async function getTime(){
 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
var responseJson = await response.json()
console.log(responseJson)
}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.Position
	stoneBodyPosition=lstone.body.Position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango,body,false)
}

}