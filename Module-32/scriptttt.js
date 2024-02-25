let numbers = [1, 2, 3, 4, 5, 6];
let totalSum = numbers.reduce((prev, curr) => {
  return prev + curr;
});

console.log(totalSum);
