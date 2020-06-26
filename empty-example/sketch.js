var bird; //the bird
var pipes = []; //the pipes
function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new Pipe());
}


function draw() {
	background(0);

	// Put pipes before the bird
	// For all the pipes in an array
	for (var i = pipes.length-1; i >= 0; i--){
		pipes[i].show();
		pipes[i].update();

		// If the pipes hit the bird
		// output HIT
		if (pipes[i].hits(bird)){
			console.log("HIT");
		}
		// if the pipe is off the screen get rid of it
		// we don't need it anymore
  		if (pipes[i].offscreen()) {
  			pipes.splice(i,1); //splice deletes element from array
  		}

  	}
	
	bird.update();
	bird.show();

	// want to have a pipe every so often
	// every 100 frames
	// (tried 40 before and too many pipes per frame

	if (frameCount % 100 == 0){
		pipes.push(new Pipe());

	}


}

// When user presses spacebar does the console show
// and print out space
function keyPressed() {
	if (key == ' ') {
		bird.up();
		//console.log("SPACE")
	}
}