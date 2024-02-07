// let sum = 0;
// function addArrEven(numbers) {
//   for (const number of numbers) {
//     if (number % 2 == 0) {
//       sum += number;
//     }
//   }
//   return sum;
// }

// let arrNumbers = [12, 13, 14, 15, 16, 18, 20];
// console.log(addArrEven(arrNumbers));

/*
Task-1
Take four parameters. Multiply the four numbers and then return the result
*/

function multiFour(a, b, c, d) {
  return a * b * c * d;
}
console.log(multiFour(12, 12, 34, 23));

/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function doiIt(number) {
  if (number % 2 == 1) {
    number *= 2;
    return number;
  }
  if (number % 2 == 0) {
    return number;
  }
}
let number = doiIt(3);
console.log(number);

/*
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(arr, size) {
  if (size == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum / size;
}

const arr = [5, 10, 15, 20];
const size = arr.length;
const average = make_avg(arr, size);
console.log("Average:", average);
