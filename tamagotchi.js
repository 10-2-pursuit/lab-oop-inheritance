// Create class below
class Tamagotchi{
    constructor(name = "", energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    };

    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    };

    status(){
        console.log('********************');
        console.log(`My mood is: ${this.mood}`);
        console.log(`I'm this full: ${this.full}`);
        console.log(`My energy is: ${this.energy}`);
        this.sick ? console.log("I'm not sick") : console.log("I'm sick");
        console.log('********************');
    };

    eat(){
        this.full += 2;
        this.energy--;

        if(this.full > 10){
            this.sick = true;
        }
    };

    medicate(){
        if(this.sick == true){
            this.sick = false;
            this.full = 9;
            this.energy -= 3;
        }
        else{
            this.energy--;
        }
    }

    play(){
        this.status();
        if(this.sick == false && this.mood <= 9 && this.energy > 3){
            this.mood += 2;
            this.full--;
        }
        else{
            if(this.sick == true){
                this.mood--;
            }
            if(this.mood > 9){
                this.full--;
                this.energy--;
            }
            if(this.energy <= 3){
                console.log("I am too tired to play");
            }
        }
        this.energy--;
    }

    sleep(){
        this.energy += 4;
        this.full -= 3;
    }

    timePasses(){
        if(this.sick == false){
            this.mood -= 2;
            this.full--;
            this.energy--;
        }
        else{
            this.mood -= 3;
            this.full -= 2;
            this.energy -=2;
        }
    }

    badGuardian(){
        if(this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            this.rehomed = true;
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
