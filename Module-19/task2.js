/*Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']*/

const colors = ["red", "blue", "green", "yellow", "orange"];

let rev = [];

for (const color of colors) {
  rev.unshift(color);
}
console.log(rev);

/*
Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]
*/
const numbers = [12, 98, 5, 41, 23, 78, 46];
for (const num of numbers) {
  if (num % 2 == 0) {
    console.log(num);
  }
}

/*
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'

*/
const statement = "I am a hard working person";
const reversed = statement.split(" ").reverse().join(" ");

console.log(reversed);
