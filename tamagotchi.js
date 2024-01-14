// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name; 
        this.energy = energy;
        this.full = full; 
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet(){
        console.log(`Hello, I'm ${this.name}!`);
    }

    status(){
        console.log(
        `Status of ${this.name}:
        Energy: ${this.energy}
        Fullness: ${this.full}
        Mood: ${this.mood}
        Sick: ${this.sick ? 'Yes' : 'No'}`
        );
    }

    eat(){
        if(this.energy > 0){
            console.log(`${this.name} is eating.`);
            this.full += 2;
            this.energy -= 1;

        if (this.full > 10){
            this.sick = true;
            console.log(`${this.name} has become sick! :-(`);
        }

        this.mood += 1;
        } else {
            console.log(`${this.name} doesn't have enough energy to eat.`);
        }
    }
        medicate(){
            if(this.sick){
                console.log(`${this.name} is taking medicine.`);
                this.full = 9;
                this.energy -= 3; 
                this.sick = false; 
                }else{
                    console.log(`${this.name} refuses to take medicine`);
                    this.energy -= 1; 
                }
        }

        play(){
            if(this.sick){
                console.log(`${this.name} is too sick to play.`);
                this.mood -= 1;
                this.energy -= 1;
            } else if (this.mood > 9){
                console.log(`${this.name} is too happy to play.`);
                this.energy -= 2;
                this.full -= 1; 

            } else if (this.energy <= 3){
                console.log(`${this.name} is too tired to play.`);
                this.energy -= 1;

            } else {
                console.log(`${this.name} is playing.`);
                this.mood += 2;
                this.energy -= 1;
                this.full -= 1;
            }
        }
    sleep(){
        console.log(`${this.name} is sleeping. ZzzZZzz`);
        this.energy += 4;
        this.full -= 3;
        this.mood += 1;
    }

    timePasses(){
        if(this.sick){
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        } else {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }
    }
    badGuardian(){
        console.log(`Oh No!${this.name} has been rehomed.`);

        if(this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            this.rehomed = true;
        }
    }

    checkHealth(){
        if(this.sick){
            console.log(`${this.name} is isck and needs medical attention.`);
        } else if(this.mood <= 0){
                console.log(`${this.name} is unhappy and might need more attention.`)
        }
    }

}
// Do not edit below this line
module.exports = Tamagotchi;
