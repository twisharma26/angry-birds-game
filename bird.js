//angry birds class; subclass/child class
class birds extends base{ 
    constructor(x, y){ 
        super (x, y, 50, 50)
        this.image = loadImage("sprites/bird.png")
        this.smokeimage = loadImage("sprites/smoke.png")
        this.array = []
        //this.array = [[5, 6], [12, 34], [56, 35]]
        Matter.Body.setMass(this.body.mass*5) //to increase the mass and therefore also increase the force
    }

    clear() {
        this.array = []
    }

    display() { //only here because some things needed to be different than the other classes
        var pos = this.body.position 

        //pos.x = mouseX
        //pos.y = mouseY

        if(pos.x > 230 && this.body.velocity.x > 10) {
            var Pos = [pos.x, pos.y]
            this.array.push(Pos)
        }

        //console.log(this.body.velocity.x)
        //for loop : for(var i = (value); i>=<(till when i should continue), i = i+(increment in the value of i))
        for(var i = 0; i<this.array.length; i = i+1) {
            image(this.smokeimage, this.array[i][0], this.array[i][1])
        }

        super.display() //calling the base display function so that those properties are also added 
    }

}