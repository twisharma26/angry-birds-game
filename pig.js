//pig class
class pigs extends base{ //creating a class
    constructor(x, y){
        super(x, y, 60, 60)
        this.image = loadImage("sprites/enemy.png") 
        this.Visiblity = 255
    }

    display() {
        //console.log(this.body.speed)
        if (this.body.speed < 3) { 
            super.display()
        }
        else { //to make the pig dissappear slowly when it's hit with a certain speed
            World.remove(world, this.body)
            push()
            this.Visiblity = this.Visiblity - 10 //increases the transparency
            tint(255, this.Visiblity) //makes it slowly fade
            image(this.image, this.body.position.x, this.body.position.y, 60, 60)
            pop()
        }
    }

    score() {
        if (this.Visiblity<0 && this.Visiblity> -1005) {
            score++ 
        }
    }
}