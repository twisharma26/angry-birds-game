//parent class

class base { //creating a class
    constructor(x, y, w, h, a){ //to help us make things (anything that is to be inputted by the user)
        var properties = {
            restitution: 0.8, //bouncing
            friction: 1, 
            density: 1
        }
        this.body = Bodies.rectangle(x, y, w, h, properties); //to help the other classes specify what to write; constructor
        this.width = w; 
        this.height = h; 
        this.image = loadImage("sprites/base.png") //has to be repeated in every class so that the image changes; required because line 27 takes this.image as a variable
        World.add(world, this.body);
    }

    display() { 
        var pos = this.body.position 
        
        push() //captures new settings
        
        translate(pos.x, pos.y) //continuously reads the current position and passes it to the rect command
        rotate(this.body.angle) //to add an angle for it while it falls 

        imageMode(CENTER)

        image(this.image, 0, 0, this.width, this.height) //adding an image to your sprite and specifying its dimentions 

        pop() //reverts back to the original settings
    }
}