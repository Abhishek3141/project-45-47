const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var player
var ball
var hoop
var bg
var ground

var gamestate = "PLAY";
function preload(){
    playerimg = loadImage("sprites/player.png")
    ballimg = loadImage("sprites/ball.png")
    hoopimg = loadImage("sprites/hoop.png")
    bgimg = loadImage("sprites/bg.jpg");
    
}

function setup(){
    createCanvas(1000,1000);

    engine = Engine.create();
    world = engine.world;
  


    ball = Bodies.circle(230,375, 35, {isStatic:false,density:20, restitution: 0.1});
    World.add(world,ball )
    

    hoop = Bodies.rectangle(940,260,80,220,{isStatic:true});
    World.add(world,hoop);

    ground = Bodies.rectangle(width/2, height, width, 10,{isStatic:true});
    World.add(world,ground);

    chain = new SlingShot(ball,{x:240,y:400});
}

function draw(){
    background(0);

    Engine.update(engine);
    if(gamestate == 'PLAY'){
        var score = 130
    image(bgimg,0,0,1000,1000)
    rectMode(CENTER);
    imageMode(CENTER);
    image(ballimg,ball.position.x,ball.position.y,70,70)
    image(hoopimg,880,270,200,350);
    ellipseMode(RADIUS)
    //ellipse(ball.position.x,ball.position.y,35,35)
    //rect(hoop.position.x,hoop.position.y,80,220);
    //rect(ground.position.x,ground.position.y,ground.width, 10)
    image(playerimg,410,650,500,500);
    push()
    fill(0,0,0,127);
    
    
    rect(270,880,500,50);
    rect(270,940,500,50);
    pop();
    fill("White");
    //cfill("black");hain.display();
    textSize(25)
    text("Lakers  :  131", 210,885)
    text("Cavaliers  :  "+score, 210,950)
    rect(900,350,30,30)
   
    drawSprites();

    if(ball.position.x >810&&ball.position.x<900&&ball.position.y>320&&ball.position.y<350){
       score = 131;
       gamestate = "Make"
    }
}
if(gamestate == 'Make'){
    var s = 131
    
    image(bgimg,0,0,1000,1000)
    rectMode(CENTER);
    imageMode(CENTER);
    image(ballimg,ball.position.x,ball.position.y,70,70)
    image(hoopimg,880,270,200,350);
    ellipseMode(RADIUS)
    //ellipse(ball.position.x,ball.position.y,35,35)
    //rect(hoop.position.x,hoop.position.y,80,220);
    //rect(ground.position.x,ground.position.y,ground.width, 10)
    image(playerimg,410,650,500,500);
    push()
    fill(0,0,0,127);
    
    
    rect(270,880,500,50);
    rect(270,940,500,50);
    pop();
    fill("White");
    //cfill("black");hain.display();
    textSize(25)
    text("Lakers  :  131", 210,885)
    text("Cavaliers  : 131 ", 210,950)
    rect(900,350,30,30)
   
    drawSprites();

    if(ball.position.x >810&&ball.position.x<900&&ball.position.y>320&&ball.position.y<350&&gamestate == 'Make'){
       s = 132;
       text("Cavaliers  :  "+s, 210,950)
       console.log(s);
      // gamestate = "Make"
    }
}
console.log(gamestate);
     

}
function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
    
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
    if(keyCode === 32 ){
        chain.attach(ball);
        Matter.Body.setPosition(ball,{x:230,y:375});
    }
}
