const numbers = [10, 20, 30, 40, 50];
const actor = {
  name: "Sharuk Khan",
  age: 60,
  movies: ["don", "mafia", "kkkg"],
};

// templete string
const actorName = `Our Actor name is ${actor.name}`;
const favMovie = `Our favorite movie is ${actor.movies[0]}`;
console.log(actorName, favMovie);

// arrow function
const sayHi = () => {
  console.log("Hi");
};
const isEven = (x) => x % 2 == 0;
console.log(isEven(18));

const sumAdd = (a, b) => {
  return a + b;
};
// spread operator

const newNumbers = [...numbers];
const newNumber = [...numbers, 100];
numbers.push(80);
console.log(numbers);
console.log(newNumbers);
console.log(newNumber);
