/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
// let payAmount = 600;
// if (payAmount > 500) {
//   console.log("Hurrah! you got a free coke");
// } else {
//   console.log("Coke 30 TK");
// }
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// const weight = 60; //weight in kg
// const height = 53; //in M

// const BMI = (weight / height) ^ 2;
// if (BMI < 18.5) {
//   console.log("You are underweight");
// } else if (BMI >= 18.5 && BMI <= 24.9) {
//   console.log("You are Normal");
// } else if (BMI >= 25 && BMI <= 29.9) {
//   console.log("You are overweight");
// } else {
//   console.log("You are obese");
// }

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let marks = 80;

// if (marks >= 90 && marks <= 100) {
//   console.log("A");
// } else if (marks >= 80 && marks <= 89) {
//   console.log("B");
// } else if (marks >= 70 && marks <= 79) {
//   console.log("C");
// } else if (marks >= 60 && marks <= 69) {
//   console.log("D");
// } else if (marks >= 0 && marks <= 59) {
//   console.log("F");
// }
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let score = 89;

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
let num1 = 40;
let num2 = 30;
let result;

num1 > num2 ? (result = num1 + num1) : (result = num1 + num2);
console.log(result);
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrice = 200;
let age = 9;
let isStudent = true;

if (age < 10) {
  ticketPrice = 0;
  console.log(ticketPrice);
} else if (isStudent) {
  let discountPrice = (ticketPrice * 50) / 100;
  console.log(discountPrice);
} else if (age >= 60) {
  let discountPrice = (ticketPrice * 15) / 100;
  console.log(discountPrice);
} else {
  ticketPrice += 600;
  console.log(ticketPrice);
}
