const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1400, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world; 
  Engine.run(engine);

  ground = new Ground()
  hero = new Hero(100,200,60)

  monster = new Monster(650,250,150)

  fly = new Fly(hero.body,{x:100,y:200})
  
  block1 = new Block(440,440,30,30)
  block2 = new Block(480,440,30,30)
  block3 = new Block(520,440,30,30)
  block4 = new Block(440,390,30,30)
  block5 = new Block(480,390,30,30)
  block6 = new Block(520,390,30,30)
  block7 = new Block(440,340,30,30)
  block8 = new Block(480,340,30,30)
  block9 = new Block(520,340,30,30)
  block10 = new Block(440,290,30,30)
  block11 = new Block(480,290,30,30)
  block12 = new Block(520,290,30,30)
  block13 = new Block(440,240,30,30)
  block14 = new Block(480,240,30,30)
  block15 = new Block(520,240,30,30)
  block16 = new Block(440,190,30,30)
  block17 = new Block(480,190,30,30)
  block18 = new Block(520,190,30,30)

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display(); 
  block14.display(); 
  block15.display(); 
  block16.display(); 
  block17.display(); 
  block18.display(); 

  hero.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}