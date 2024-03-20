class Mover {
  constructor(x,y){
    this.location = createVector(x, y);
    this.velocity = createVector(random(-3,5), random(-3,5))
    this.acceleration = createVector(0,0);
 }
  display(){ 
    stroke("black"); 
    strokeWeight(5);
    fill("green"); 
    let r = random(10,60)
    rect(this.location.x,this.location.y,50,40)
    point(this.location.x+10,this.location.y+13);
    point(this.location.x+38,this.location.y+13);
    line(this.location.x+3,this.location.y+20,this.location.x-10,this.location.y+30)
    line(this.location.x+45,this.location.y+20,this.location.x+60,this.location.y+30)
    
  } 
  update(){ 
    
    var mouse = createVector(mouseX, mouseY);
    var dir = mouse.sub(this.location);
    var topSpeed = 15
    dir.normalize();
    dir.mult(0.5);
    this.velocity.add(this.acceleration);
    this.velocity.add(dir);
    this.velocity.limit(topSpeed)
    this.location.add(this.velocity);
 }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = windowWidth;
 }
    else if (this.location.x < 0){
      this.location.x = 0;
 }
    if ( this.location.y > windowHeight ) {
      this.location.y = windowHeight;
 }
    else if (this.location.y < 0){
      this.location.y = 0;
 }
  }
}

  
let movers= [];
let mouse;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i<10;i++){
    movers[i] = new Mover(random(windowWidth), random(windowHeight));}
}

function draw() {
  background("pink");
  fill("brown")
    arc(mouseX,mouseY,90,90,0,345);
  strokeWeight(8)
  point(mouseX,mouseY-15);
  // membuat mouse bergambar 
  for(let i=0; i<10; i++){
    movers[i].cekUjung();
    movers[i].display();
    movers[i].update();
}
  }
  

