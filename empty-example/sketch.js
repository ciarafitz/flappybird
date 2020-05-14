var bird;
function setup() {
	createCanvas(400, 600);
	bird = new Bird();
}


function draw() {
	background(0);
	bird.update();
	bird.show();
  
}

// When user presses spacebar does the console show
// and print out space
function keyPressed() {
	if (key == ' ') {
		bird.up();
		//console.log("SPACE")
	}
}