// Reverse an array
// let city = ["Dhaka", "Cumilla", "Narayangonj", "Dinajpur"];
// for (let i = city.length - 1; i >= 0; i--) {
//   console.log(city[i]);
// }
//Sum of an array

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   let currentNumber = numbers[i];
//   sum += currentNumber;
// }
// console.log("Sum of total array numbers= ", sum);

//Swap an array elements

// let numbers = [10, 20, 30, 40, 50];
// let temp = numbers[1];

// numbers[1] = numbers[3];
// numbers[3] = temp;

// console.log(numbers);

// Find elements in array

// let name = ["zihan", "mithan", "anni", "brisan", "nathy"];
// let searchName = "anni";
// for (let i = 0; i <= name.length; i++) {
//   let currentName = name[i];
//   if (searchName == currentName) {
//     console.log("Name is founded,", currentName, i);
//     break;
//   } else {
//     continue;
//   }
// }

// filter an array
// let purchaseHistory = [300, 130, 190, 100, 500, 1000, 150, 400, 600];
// let filterPurchase = [];
// for (let i = 0; i < purchaseHistory.length; i++) {
//   let currentHistory = purchaseHistory[i];
//   if (currentHistory < 200) {
//     filterPurchase.push(currentHistory);
//   }
// }
// console.log(filterPurchase);

//12 inch 1 feet.Now calculate the height of a person

function heightOfPerson(inch) {
  let height = inch / 12;
  return height;
}

const djHeight = heightOfPerson(72);
console.log(djHeight);
