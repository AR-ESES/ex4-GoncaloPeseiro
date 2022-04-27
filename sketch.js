let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {

  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
   translate(-25,-20)
      scale(0.20);
      noStroke();
    fill(51);
rect(400,200,300,400);
fill('#fae');
circle(width / 3.5, height / 8, height / 4);
line(450,600,450,height);
line(650,600,650,height);
fill('#222222');
rect(700,300,200,100);
fill('#222222');
rect(200,300,200,100);
circle(600, 80, 40);
circle(500, 80, 40);
fill('red');
rect(495, 150, 110, 40);
fill(51);
circle(900, 350, 100);
circle(200, 350, 100);

   

}


  

      pop();
    }
  }
}

Conversar em #boas-vindas-e-regras
