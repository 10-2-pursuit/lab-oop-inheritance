// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysRoSpoil = daysToSpoil;
        this.fresh = fresh
    }
    prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
        if(this.fresh == false || this.daysToSpoil <= 0) {
            console.log(`${}`)
        }
    }
}
// Do not edit below this line
module.exports = Food;
