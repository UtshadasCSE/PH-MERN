let [x, y] = [20, 50];
console.log(x);

let numbers = [20, 30, 40, 50];
let [a, b] = numbers;

const boxiFy = (a, b) => {
  const nums = [a, b];
  return nums;
};

console.log(boxiFy(80, 60));

const actor = {
  name: "Sharuk Khan",
  age: 60,
  movies: ["don", "oso", "hny"],
};

const [firstMovie, secondMovie] = actor.movies;
console.log(firstMovie);

const people = {
  scienceName: "homo sapiences",
  planet: "Earth",
  coumtry: {
    name: ["usa", "ind", "bd"],
  },
};

const [countryFisrt, countrySecond] = people.coumtry.name;
console.log(countryFisrt, countrySecond);
