
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600, 780, 1200, 10)
	tree = new Tree(800, 680, 10, 10);
	stone1 = new stone(100, 600, 10);
	mango1 = new Mango(800, 100, 10);
	mango2 = new Mango(900, 110, 10);
	mango3 = new Mango(600, 300, 10);
	mango4 = new Mango(900, 300, 10);
	mango5 = new Mango(800, 350, 10);
	sling = new Slingshot(stone1.body, { x: 100, y: 500 })


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);

	background(0);
	image(boy, 100, 450, 200, 300)
	ground.display()
	tree.display()
	stone1.display()
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	detectollision(stone1, mango1);
	detectollision(stone1, mango2);
	detectollision(stone1, mango3);
	detectollision(stone1, mango4);
	detectollision(stone1, mango5);
	sling.display()
	drawSprites();

}


function mouseDragged() {
	Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
	sling.fly();
}

function detectollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	//console.log(distance)
	// console.log(lmango.r+lstone.r)
	if (distance <= lmango.r + lstone.r) {
		//console.log(distance);
		Matter.Body.setStatic(lmango.body, false);
	}

}