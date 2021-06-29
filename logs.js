//log class

class Log extends base{ //extention of the base class, takes its properties from there
    constructor(x, y, h, a){ 
        super(x, y, 20, h) //base class constructor to specify stuff 
        this.image = loadImage("sprites/wood2.png")
        Matter.Body.setAngle(this.body, a)
    }

}