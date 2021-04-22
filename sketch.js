var bullet, wall
var speed, weight, thickness
function setup() {
  createCanvas(1600,400);
  
  speed = random(223, 321)
  weight = random(30, 52)
  thickness = random(22, 83)

  bullet = createSprite(50, 200, 70, 10)
  bullet.shapeColor = "white"
  bullet.velocityX = speed

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = rgb(80,80,80)
}

function draw() {
  background("grey");
  
  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0
   damage = 0.5* weight* speed* speed/(thickness*thickness*thickness)

   if(damage < 10){

    wall.shapeColor = rgb(0,255,0)
   }
   else if (damage > 10){

    wall.shapeColor = rgb(255, 0, 0)
   }
   
  }

  drawSprites();
}

function hasCollided(rbullet,lwall){

bulletRight = rbullet.width + rbullet.x
wallLeft = lwall.x

if(bulletRight >= wallLeft){

return true

}

return false
}
