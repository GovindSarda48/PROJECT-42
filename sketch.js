var ho , min , sec;

var hourAn , minuteAn , secondAn;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
angleMode(DEGREES);

}

function draw() {
  background(50);
  
  translate(200,200);
  rotate(-90);

  ho = hour();

  min = minute();

  sec = second();

  secondAn = map(sec, 0,60,0,360);

  minuteAn = map(min , 0,60,0,360);

  hourAn = map(ho%12,0,12,0,360);

  push();
  rotate(secondAn);

  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  
pop();

push();
rotate(minuteAn);

stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);

pop();


push();
rotate(hourAn);

stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);

pop();





strokeWeight(10);

noFill();

stroke(255,0,0);
arc(0,0,300,300,0,secondAn);

stroke(0,255,0);
arc(0,0,280,280,0,minuteAn);


stroke(0,0,255);
arc(0,0,260,260,0,hourAn);












  drawSprites();
}