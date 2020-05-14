function Bird() {
	this.y = height/2;
	this.x = 64;

	this.gravity = 0.6;
	this.lift = -10;
	this.velocity = 0;

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, 32, 32)
	}

	this.up = function(){
		this.velocity += this.lift;
		print(this.velocity);
	}

	this.update = function(){
		this.velocity += this.gravity;
		this.y += this.velocity;

		//need bird to stop at bottom
		if (this.y > height) {
			this.y = height;
			this.velocity = 0;
		}

		//need bird to stop at top
		//  not running code. commented out
		if (this.y < 0){
			print ('poop');
			this.y = 0;
			this.velocity = 0;
			print(this.y);
			print(this.velocity);

		}
	}
}