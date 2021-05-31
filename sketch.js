var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

 // if(frameCount%60==0){

 // particle=new Particle(random(width/2-10,width/2+10),10,10);
 
 //particle.push(new Particle(random(width/2-10,width/2+10),10,10));
//}

 
  for (var q= 0; q <=160; q= q + 160) {
    divisions.push(new Divisions(q, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var w = 0; w <=320; w = w + 320) {
    divisions.push(new Divisions(w, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var e = 0; e <=480; e = e + 480) {
    divisions.push(new Divisions(e, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var r = 0; r <=640; r = r + 640) {
    divisions.push(new Divisions(r, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var t= 0; t <=800; t = t + 800) {
    divisions.push(new Divisions(t, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects

  for (var j = 50; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  //create particle objects 
  //particle.shapeColor=Math.round.random(0,255);
   
}

function draw() {
  background("black");
  textSize(20)
  text("Score:"+score,40,40);
  text("500",70,700);
  text("200",230,700);
  text("50",380,700);
  text("100",550,700);
  text("400",700,700);
  

  Engine.update(engine);
  ground.display();
     
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
 
 
  //display the paricles 
  
  //console.log(particle);


  if(frameCount%60==0){
  particle.push(new Particle(random(width/2-10,width/2+10),10,10));
  //  particle.push(new Particle(random(width/2-10,width/2+10),10,10));
   score=score+25; 
  }
  console.log(particle);

 for (var j = 0; j < particle.length; j++) {
  
    particle[j].display();
  }
}
