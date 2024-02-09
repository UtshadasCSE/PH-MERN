function deleteInvalids(array) {
  // You have to write your code here
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  let numTypeArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number" && !isNaN(array[i])) {
      numTypeArray.push(array[i]);
    }
  }
  return numTypeArray;
}
// console.log(deleteInvalids({ num: [1, 2, 3] }));
