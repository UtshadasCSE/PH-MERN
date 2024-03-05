const person = { name: "dj", age: 39, city: "Dhaka" };

// convert to string
const personString = JSON.stringify(person);
console.log(personString);
// convert to object
console.log(JSON.parse(personString));
