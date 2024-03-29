# Welcome to my Flappybird Project!
Below are the steps on how the project works including *bugs* and *future additions*.

## How to Run: 

* Run *index.html*
* Dependencies below **must be met before running**.

## How to Use:

* Simple game of *Flappybird* where the user presses **spacebar** to fly through the green pipes without hiting them.
    * Pipes turn **red** when *hit*.

## Dependencies:
* **p5.js**
    * Download from https://p5js.org/download/
* Verify that the current version of your web browser supports p5.js
    * **Note: Old versions of Internet Explorer and Safari may not be supported**.

##  Bugs:

* There is a lack with the game and the pipe speed needs to be be slower. (1/24/22)
* The bird needs its velocity, gravity, and lift adjusted. (1/24/22)
* Game does not fully fill screen width. (1/24/22)
* Adjust minimum size for pipes. Bird needs to be able to fit through. (1/24/22)

## Additions for the Future:

* Add score 
    * Hit pipes that turn *red* 
        * **(- negative points)**
    * Get through *green* pipes 
        * **(+ positive points)**
* Change background from black to an image.
* Change 'bird' into a image of a bird/animal. 

# p5.js Documentation:

You have downloaded the complete p5.js library ZIP file, yay!

# Contents of the p5 folder

* p5.js file
* p5.min.js file
* addons folder
  * p5.sound.js
  * p5.sound.min.js
* empty-example folder
  * index.html
  * p5.js
  * p5.sound.js
  * sketch.js

## p5.js

This file stores the complete p5.js library. It is easy to read by humans, so feel free to open it and explore its contents. It also has a friendly error system, which helps new programmers with common user errors.

## p5.min.js

This file is a minified version of the p5.js file. It is a lighter version, with the same functionalities, but smaller file size. This minified version is harder to read for humans, and does not include the friendly error system.

## addons folder

The addons folder includes additional p5.js related libraries, in both original versions and minified versions.

### p5.sound.js, p5.sound.min.js

p5.sound extends p5.js with Web Audio functionality including audio input, playback, analysis, and synthesis.

## empty-example folder

This is an empty example of a website. The folder includes the file for the website, index.html, the p5.js library, other related p5.js libraries, and a template starting point for your p5.js sketch, called sketch.js.

### index.html

index.html is a template for an HTML file. This index.html first imports the libraries included in the folder (p5.js, p5.sound.js) then loads and executes the file sketch.js which is where you can write your own code.

### sketch.js

The sketch.js is a template for the p5.js sketch, with the functions setup() and draw() that you can complete.

## README.txt

This README file formatted with Markdown :)

# What's next?

If you need more information to help get you started, please refer to our website:  
https://p5js.org/get-started/ and https://p5js.org/learn/

An online reference to the p5.js library is available here:  
https://p5js.org/reference/

In order to run your website (including the empty-example), you need to enable a local server, please see this tutorial in our wiki:  
https://github.com/processing/p5.js/wiki/Local-server

p5.js is a community and p5.js is built by contributions. If you want to learn more about us, visit:  
https://p5js.org/community/