// Remove duplicate element of an array

function remDuplicate(arr) {
  const uniqueArr = [];
  for (const item of arr) {
    if (uniqueArr.includes(item) == false) {
      uniqueArr.push(item);
    }
  }
  return uniqueArr;
}
let array = [1, 1, 1, 2, 3, 4, 5, 5, 44, 44, 5, 3, 21, 11, 11];
console.log(remDuplicate(array));
