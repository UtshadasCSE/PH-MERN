let numbers = [12, 13, 14, 15, 16, 17];
let rev = [];
for (const number of numbers) {
  console.log(number);
  rev.unshift(number);
}
console.log(rev);

let num = [1, 2, 4, 5, 6, 7, 8, 3];
console.log(num.reverse());

let a = [4, 5, 1, 2, 33, 6, 1, 55, 45, 34];
let asc = a.sort(function (a, b) {
  return a - b;
});
console.log(asc);
