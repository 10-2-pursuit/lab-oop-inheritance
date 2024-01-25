// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysRoSpoil = daysToSpoil;
        this.fresh = fresh
    }
    prepare() {
        console.log(`${this.name} is being prepared.`)
    }
    isFresh() {
        if(this.fresh == false || this.daysToSpoil <= 0) {
            console.log(`${this.name} has gone bad.`) 
        } else {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} goes bad.`)
        }
        aDayPasses() {
            this.daysToSpoil--
            this.isFresh();
        }
    }
}
// Do not edit below this line
module.exports = Food;
