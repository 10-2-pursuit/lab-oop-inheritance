// Create class below
class Tamagotchi {
    constructor(
      name,
      energy = 9,
      full = 8,
      mood = 6,
      sick = false,
      rehomed = false
    ) {
      this.name = name;
      this.energy = energy;
      this.full = full;
      this.mood = mood;
      this.sick = sick;
      this.rehomed = rehomed;
    }
    greet() {
        console.log(`Hey There!, I'm ${this.name}`);
    }
    status() {
        console.log(`My mood is: ${this.mood}!\n I am this full: ${this.full}!\n 
        My energy is: ${this.energy}!\n`)
        if (this.sick === true)
        console.log("I am sick\n")
        else
        console.log("I am not sick\n")
    }
    eat() {
        this.full += 2;
        this.energy--;
        if(this.full >10) 
            this.sick = true;
    }
    medicate() {
        if (this.sick === true) {
            this.full = 9;
            this.energy -=3;
            this.sick= false;
        }
        else {
            this.energy--
            console.log("refusal to take medicine")
        }
    }
    play() {
        if(this.sick === true) {
            this.mood--
            this.energy--
        }
        else if(this.mood>9) {
            this.energy -=2
            this.full--
        }
        else if(this.energy<=3) {
            this.energy--
            console.log("I am too tired to play")
        }
        else {
            this.mood+=2
            this.energy--
            this.full--
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
