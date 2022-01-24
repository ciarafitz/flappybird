// This is for the pipes in the game
// which the ball bounces through
// Pipe needs to extend to top to middle of 
// screen (this.top)
// & further down to the bottom (this.botom)
function Pipe(){
	this.top = random(height/2);
	this.bottom = random(height/2);
	this.x = width; // start at edge of screen
	this.w = 20; //width is set to 20
	this.speed = 2; //speed will move to the left
	

	this.highlight = false;

	this.hits = function(bird){
		// if the bird is ever less than the top or greater than height - bottom
		// it is then hitting the pipe
		if (bird.y < this.top || bird.y > height - this.bottom){
			if (bird.x > this.x && bird.x < this.x + this.w){
				this.highlight = true;
				return true;
			}
			
		}
		this.highligt = false;
		return false;

	}
	

	this.show = function() {
		fill(0,255,0); // pipe drawn green pipe
		if (this.highlight){
			fill(255, 0, 0); //fills pipe to red
		}
		rect(this.x, 0, this.w, this.top); //pipes for the top
		rect(this.x, height-this.bottom, this.w, this.bottom); //pipes for the bottom

	}
	this.update = function(){
		this.x -= this.speed;
	}

	this.offscreen = function(){
		// if the width is off the screen
		// return true
		// if not return false
		if (this.x <-this.w){
			return true;
		} else {
			return false;
		}
	}
}		