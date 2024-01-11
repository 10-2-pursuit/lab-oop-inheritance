// Create class below

class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name
        this.energy = energy
        this.full = full
        this.mood = mood
        this.sick = sick
        this.rehomed = rehomed
    }

    greet() {
        console.log(`Hello, I'm ${this.name}!`)
    }

    status() {
        console.log("********************\n")
        console.log(`My mood is: ${this.mood}!\n` +
            `I am this full: ${this.full}!\n` +
            `My energy is: ${this.energy}!\n`)
        if (this.sick === true)
            console.log("I am sick\n")
        else
            console.log("I am not sick\n")
        console.log("********************")
    }

    eat() {
        this.full += 2
        this.energy--
        if (this.full > 10)
            this.sick = true
    }

    medicate() {
        if (this.sick === true) {
            this.full = 9
            this.energy -= 3
            this.sick = false
        }
        else {
            this.energy--
            console.log("refusal to take medication")
        }
    }

    play() {
        if (this.sick === true) {
            this.mood--
            this.energy--
        }
        else if (this.mood > 9) {
            this.energy -= 2
            this.full--
        }
        else if (this.energy <= 3) {
            console.log("I am too tired to play")
            this.energy--
        }
        else {
            this.mood += 2
            this.energy--
            this.full--
        }
    }

    sleep() {
        this.energy += 4
        this.full -= 3
    }

    timePasses() {
        if (this.sick === false) {
            this.mood -= 2
            this.full--
            this.energy--
        }
        else {
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        }
    }

    badGuardian() {
        console.log(`Tamagotchi ${this.name} has been rehomed`)
        if (this.energy <= 0)
            this.rehomed = true
        if (this.mood <= 0)
            this.rehomed = true
        if (this.full <= true)
            this.rehomed = true
    }


}

let creature = new Tamagotchi("JoeJoe")
creature.greet()
creature.status()
creature.eat()
creature.medicate()
creature.play()
creature.sleep()
creature.timePasses()
creature.badGuardian()



// Do not edit below this line
module.exports = Tamagotchi;
