var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1200, 400);


	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color("purple");


  
  	wall=createSprite(1100,200, 60, height/2)
  	wall.shapeColor=color(100,100,100)
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
    car.shapeColor=color("red");
    text("Dangerous ",600,100);
    
	}

	if(deformation<180 && deformation>100)
	{
    car.shapeColor=color("blue");
    text("Ok But needs improvement ",600,100);
    
	}

	if(deformation<100)
	{
    car.shapeColor=color("green");
    text("Right speed and safe ",600,100);
	}
  }  
  else
  {
    text("",600,100);
  }
  drawSprites();
}