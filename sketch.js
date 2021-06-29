//[] are array brackets
/*var abc = [2, 4, "a", 7, "dhsvnc"]
console.log(abc[2])

var xyz = [["english", 5], ["hindi", 4], ["maths", 4]]

xyz.push("pqr")
console.log(xyz)*/

//namespacing - giving shorter names to something
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, body, ball, box, box2, ground, pig1, log1, box3, box4, pig2, log2, box5, log3, log4, bird1, bkgd, cLog, catapoint, platform, bg;
var score;
var gamestate = "sling";

function preload() {
  //bkgd = loadImage("sprites/bg.png")
  sunrise()
}

function setup() {
  createCanvas(1200, 550);

  //creating our own engine
  engine = Engine.create(); 
  world = engine.world; //creating our own world inside our engine
  //repeat whenever you make a new object:
  //make a random variable for any given object that you've created so that you can add all the properties it follows in it
  //(variable) = Bodies.(shape)(x, y, dimentions, variable with specifications)

  //circle
  /*var forBall = {
    restitution: 1 //bouncing when it hits something; default is 0
  }
  ball = Bodies.circle(200, 200, 20, forBall); //creating a circular object
  World.add(world, ball);*/

  //creating objects using classes
  ground = new Ground(600, 540, 1400, 20)

  box = new boxes(1120, 500, 80, 80)
  box2 = new boxes(870, 500, 80, 80)
  pig1 = new pigs(990, 500)
  log1 = new Log(995, 470, 340, PI/2) //angles measured in PI, which stands for 180 degrees, unit is radians

  box3 = new boxes(1120, 450, 80, 80)
  box4 = new boxes(870, 450, 80, 80)
  pig2 = new pigs(990, 450)
  log2 = new Log(995, 420, 340, PI/2)

  box5 = new boxes(990, 400, 70, 70)
  log3 = new Log(1085, 200, 150, -PI/7)
  log4 = new Log(895, 200, 170, PI/7)

  bird1 = new birds(230, 180)
  //cLog = new Log(200, 300, 90, 5/2) for testing the constraint

  catapoint = new constraint(bird1.body, {x: 230, y: 180})

  platform = new Ground(150, 445, 300, 170)

  //sunrise()

  score = 0;
}

function draw() {
  if (bkgd) {
    background(bkgd); 
  }
  rectMode(CENTER); //to change the x y origin to center 

  //to constantly keep adding everything in engine to Engine
  Engine.update(engine);

  /*ellipseMode(RADIUS); //to change the radius origin to center
  ellipse(ball.position.x, ball.position.y, 20, 20); */

  //fill("white")
  //text(mouseX+", "+mouseY, mouseX, mouseY) //to display the position of your mouse pointer

  fill("white")
  textSize(20)
  text("score: "+score, 1100, 50)

  //displaying the objects using function display()
  box2.display()
  box.display()
  ground.display()
  pig1.display()
  pig1.score()
  log1.display()
  box3.display()
  box4.display()
  pig2.display()
  pig2.score()
  log2.display()
  box5.display()
  log3.display()
  log4.display()
  bird1.display()
  //cLog.display()
  catapoint.display()
  platform.display()
}

function mouseDragged() { //to make it mouse controlled when you're clicking, self invoked, no need to call
  if(gamestate !== "launched") {
    Matter.Body.setPosition(bird1.body, {x: mouseX, y: mouseY})
  }
}

function mouseReleased() {
  catapoint.launch()
  gamestate = "launched";
}

function keyPressed() { //to press r to restart
  if (keyCode === 82) {
    Matter.Body.setPosition(bird1.body, {x: 230, y: 180})
    catapoint.attach(bird1.body)
    bird1.clear()
    gamestate = "sling"
  }
}

async function sunrise() { //the code will wait for this to execute because it can take a while
  var data = await /*keyword to define what to wait for*/ fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata") //getting data from an api (a device used to get data from any server)
  var jsondata = await data.json() //converting it to an organised json format
  //console.log(jsondata)
  var datetime = jsondata.datetime //taking a specific value out of the json data
  //console.log(datetime)
  var time = datetime.slice(11, 13) //taking a specific character/s out of the specific value
  //console.log(time)

  if (time >= 06 && time <= 18) { //to set the daytime background from 6am till 6pm
    bg = "sprites/bg.png"
  }
  else { //to set the nightime background at any other time
    bg = "sprites/bg2.jpg" 
  }

  bkgd = loadImage(bg) //loaded image here so that we can use the bg variable for both of them, making it so that only one image loads (depending on which one is required based on the time)
}
