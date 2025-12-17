var nameVar = 'Ciuverca';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

var fullName = 'John Ciuverca';

if (fullName) {
      const firstName = fullName.split(' ')[0];
      console.log(firstName);
}

const getFullName = name => {
      return name.split(' ')[0];
}

console.log(getFullName(fullName));