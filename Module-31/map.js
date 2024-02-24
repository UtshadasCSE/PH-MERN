const numbers = [12, 14, 98, 90, 15, 17, 20, 21, 100, 200, 89];
const doubleNumbers = [];
for (const number of numbers) {
  const double = number * 2;
  doubleNumbers.push(double);
}
console.log(doubleNumbers);

const a = [10, 20, 30, 40, 50, 60];
const doubleA = a.map((n) => n * 2);
console.log(doubleA);

const b = numbers.filter((n) => n > 70);
console.log(b);

let city = ["Cumilla", "Dhaka", "Narsingdi", "Dinajpur", "Tam", "Ali", "Nu"];

let cityBig = city.filter((n) => n.length > 3);
console.log(cityBig);
