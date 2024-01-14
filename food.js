// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    } 

    prepare(){
        console.log(`${this.name} is being prepared.`);
    }

    isFresh(){
        if(this.fresh && this.daysToSpoil > 0){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        } else {
            console.log(`${this.name} has spoiled. Please Discard Immediatelly!`);
        }
    }

    aDayPasses(){
        this.daysToSpoil -= 1;
        this.isFresh();
    }
}

const avocado = new Food("Avocado", 3);

avocado.prepare();
avocado.isFresh();
avocado.aDayPasses();


class BadFood extends Food {
    constructor(name){
        super(name, 20);
        this.weapons = [
            { hitPoints: 3 },
            { hitPoints: 4 },
            { hitPoints: 5 }
        ];
    }
 
 

 
}



// Do not edit below this line
module.exports = Food;
