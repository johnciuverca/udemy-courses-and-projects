const add = (a, b) => {
      // console.log(arguments);
      return a + b;
};

console.log(add(55, 2, 1000));

// this keyword - no longer bound

const user = {
      name: 'John Ciuverca',
      cities: ['New York', 'Miami', 'Los Angeles'],
      printPlacesLived() {
            return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
      }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
      numbers: [3, 5, 7],
      multiplyBy: 3,
      multiply() {
            return this.numbers.map((number) => number * this.multiplyBy);
      }
};

console.log(multiplier.multiply());