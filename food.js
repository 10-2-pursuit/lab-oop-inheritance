// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  isFresh() {
    if (this.fresh == false || this.daysToSpoil <= 0) {
      console.log(`${this.name} has spoiled.`);
    } else {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    }
  }

  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh();
  }
}

class BadFood extends Food {
  constructor(name, weapons) {
    super(name, 20, true);
    this.weapons = weapons;
  }

  isFresh() {
    super.isFresh();
  }

  prepare() {
    console.log(
      `Fight preparation: I am ${this.name} and my calories are too high to count!`
    );
  }
}

// Do not edit below this line
module.exports = Food;
