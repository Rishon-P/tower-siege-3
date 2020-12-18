const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var score = 0

function preload(){
    polygon_image = loadImage("polygon.png")
}

function setup(){

    createCanvas(1000,700)
    engine = Engine.create();
    world = engine.world;
    ground1 = new ground(500,680,1000,20);
    stand1 = new ground(450,550,240,15)
    //row1 stand1
    block1 = new redbox(450,535,25,20)
    block2 = new bluebox(425,535,25,20)
    block3 = new bluebox(475,535,25,20)
    block4 = new greenbox(500,535,25,20)
    block5 = new greenbox(400,535,25,20)
    block6 = new redbox(375,535,25,20)
    block7 = new redbox(525,535,25,20)
    block8 = new redbox(500,515,25,20)
    block9 = new redbox(400,515,25,20)
    block10 = new greenbox(425,515,25,20)
    block11 = new greenbox(475,515,25,20)
    block12 = new redbox(425,495,25,20)
    block13 = new redbox(475,495,25,20)
    block14 = new bluebox(450,515,25,20)
    block15 = new greenbox(450,495,25,20)
    block16 = new bluebox(350,535,25,20)
    block17 = new bluebox(375,515,25,20)
    block18 = new bluebox(400,495,25,20)
    block19 = new bluebox(425,475,25,20)
    block20 = new redbox(450,475,25,20)
    block21 = new bluebox(450,455,25,20)
    block22 = new bluebox(475,475,24,20)
    block23 = new bluebox(500,495,25,20)
    block24 = new bluebox(525,515,25,20)
    block25 = new bluebox(550,535,25,20)


    stand2 = new ground(700,350,240,15)
    block26 = new greenbox(700,335,25,20)
    block27 = new redbox(675,335,25,20)
    block28 = new redbox(725,335,25,20)
    block29 = new bluebox(650,335,25,20)
    block30 = new bluebox(750,335,25,20)
    block31 = new greenbox(625,335,25,20)
    block32 = new greenbox(775,335,25,20)
    block33 = new redbox(600,335,25,20)
    block34 = new redbox(800,335,25,20)
    block35 = new redbox(625,315,25,20)
    block36 = new redbox(775,315,25,20)
    block37 = new greenbox(650,315,25,20)
    block38 = new greenbox(750,315,25,20)
    block39 = new bluebox(675,315,25,20)
    block40 = new bluebox(725,315,25,20)
    block41 = new redbox(700,315,25,20)
    block42 = new redbox(750,295,25,20)
    block43 = new redbox(650,295,25,20)
    block44 = new greenbox(675,295,25,20)
    block45 = new greenbox(725,295,25,20)
    block46 = new bluebox(700,295,25,20)
    block47 = new redbox(675,275,25,20)
    block48 = new redbox(725,275,25,20)
    block49 = new greenbox(700,275,25,20)
    block50 = new redbox(700,255,25,20)

    
    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon)

    slingshot = new Slingshot(this.polygon,{x:70,y:200})



    





    Engine.run(engine);

}

function draw(){
    
    background(0)
    Engine.update(engine)

    rectMode(CENTER)

    text("SCORE : "+score,750,40)

    ground1.display();
    stand1.display();
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
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    stand2.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();  
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();
    block42.display();
    block43.display();
    block44.display();
    block45.display();
    block46.display();
    block47.display();
    block48.display();
    block49.display();
    block50.display();
    slingshot.display();

    imageMode(CENTER)
    image(polygon_image,polygon.position.x,polygon.position.y,40,40)
 
    
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
 
    block26.score();
    block27.score();
    block28.score();
    block29.score();  
    block30.score();
    block31.score();
    block32.score();
    block33.score();
    block34.score();
    block35.score();
    block36.score();
    block37.score();
    block38.score();
    block39.score();
    block40.score();
    block41.score();
    block42.score();
    block43.score();
    block44.score();
    block45.score();
    block46.score();
    block47.score();
    block48.score();
    block49.score();
    block50.score();

    
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode == 32){
        Matter.Body.setPosition(this.polygon,{x:70,y:200})
    slingshot.attach(this.polygon)
    }
}