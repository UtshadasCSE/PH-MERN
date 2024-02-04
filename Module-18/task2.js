/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/

// for (let i = 0; i < 60; i++) {
//   console.log(
//     "I will invest at least 6 hrs every single day for next 60 days!"

//     );
// }

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// for (let i = 61; i <= 100; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
// let sum = 0;
// for (let i = 51; i <= 85; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log("Sum of all even numbers=", sum);

let numbers = [200, 180, 150, 300, 400, 280, 500, 100];
let maxNum = numbers[0];
let minNum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];
  if (currentNumber > maxNum) {
    console.log("Maximum number is ", currentNumber);
  }
  if (currentNumber < minNum) {
    console.log("Minimum number is ", minNum);
  }
}
