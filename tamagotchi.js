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

//     sleep(){
//         console.log(`${this.name} is sleeping. ZzzZZzz`);
//         this.energy += 3;
//         this.full -= 1;
//         this.mood += 1;
//     }
}
// Do not edit below this line
module.exports = Tamagotchi;
