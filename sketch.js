function setup() {
	createCanvas(1920, 1080, WEBGL);
	

	const myCamera = createCamera();
	myCamera.setPosition(500, -500, 500);
	myCamera.lookAt(0, 0, 0);
frameRate(30)
  
}


function draw() {

noStroke();
background(0);
rotateY(frameCount / 50);
rotateX(frameCount / 60);
rotateZ(frameCount / 80);
fill('#C60F7B');
box(random(5,20),random(5,20),600);
rotateY(frameCount / 50);
rotateX(frameCount / 80);
rotateZ(frameCount / 60);
translate(0,1,0);
fill('#63D2FF');
box(random(5,20),random(5,20),600);
rotateY(frameCount / 50);
rotateX(frameCount / 60);
rotateZ(frameCount / 80);
translate(0,1,0)
fill('#C60F7B')
box(random(5,20),random(5,20),600);
rotateY(frameCount / 50);
rotateX(frameCount / 80);
rotateZ(frameCount / 60);
translate(0,1,0);
fill('#63D2FF');
box(random(5,20),random(5,20),600); 
rotateY(frameCount / 50);
rotateX(frameCount / 60);
rotateZ(frameCount / 80);
translate(0,1,0);
fill('#C60F7B');
box(random(5,20),random(5,20),600); 
rotateY(frameCount / 50);
rotateX(frameCount / 80);
rotateZ(frameCount / 60);
translate(0,1,0);
fill('#63D2FF');
box(random(5,20),random(5,20),600); 
rotateY(frameCount / 50);
rotateX(frameCount / 60);
rotateZ(frameCount / 80);
translate(0,1,0);
fill('#C60F7B');
box(random(5,20),random(5,20),600);
rotateY(frameCount / 50);
rotateX(frameCount / 80);
rotateZ(frameCount / 60);
translate(0,1,0);
fill('#63D2FF');
box(random(5,20),random(5,20),600); 
rotateY(frameCount / 50);
rotateX(frameCount / 60);
rotateZ(frameCount / 80);
translate(0,1,0);
fill('#C60F7B');
box(random(5,20),random(5,20),600); 
rotateY(frameCount / 50);
rotateX(frameCount / 80);
rotateZ(frameCount / 60);
translate(0,1,0);
fill('#63D2FF');
box(random(5,20),random(5,20),600); 
rotateY(frameCount / 50);
rotateX(frameCount / 60);
rotateZ(frameCount / 80);
translate(0,1,0);
fill('#63D2FF');
box(random(5,20),random(5,20),600); 
rotateY(frameCount / 50);
rotateX(frameCount / 80);
rotateZ(frameCount / 60);
translate(0,1,0);
fill('#63D2FF');
box(random(5,20),random(5,20),600); 
rotateY(frameCount / 50);
rotateX(frameCount / 60);
rotateZ(frameCount / 80);
translate(0,1,0);
fill('#63D2FF');
box(random(5,20),random(5,20),600);
}

function mousePressed() {
 let fs = fullscreen();
 fullscreen(!fs);
}
