// Age difference function

// function ageDiff(fatherAge, sonAge) {
//   const difference = fatherAge - sonAge;
//   console.log("Age difference is - ", difference);
// }
// const fatherAge = 40;
// const sonAge = 18;
// ageDiff(fatherAge, sonAge);

// A simple atm machine

const money = 0;
let depositAmount;
let withdrawAmount;

function deposit() {
  money += depositAmount;
  console.log(money);
}
function withdraw() {
  money -= withdrawAmount;
  console.log(money);
}
