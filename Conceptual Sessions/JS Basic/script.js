console.log("Hello");
var number = 10;
var name = "DJ";
var marks = [20, 30, 20, 20];
console.log(number, marks, name);
var a = null;
a = 10;
var isTrue = false;
console.log(typeof isTrue);
console.log(typeof a);

function add(a, b) {
  return a + b;
}
console.log(add(12, 12));

const sum = (a, b, c) => {
  return a + b - c;
};

console.log(sum(12, 12, 2));

for (const number of marks) {
  console.log(number);
}
