let sum = 0;
function addArrEven(numbers) {
  for (const number of numbers) {
    if (number % 2 == 0) {
      sum += number;
    }
  }
  return sum;
}

let arrNumbers = [12, 13, 14, 15, 16, 18, 20];
console.log(addArrEven(arrNumbers));
