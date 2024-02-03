function tenTimes(number) {
  let tt = number * 10;
  return tt;
}
function halfCut(number) {
  let half = number / 2;
  return half;
}
console.log(halfCut(10));

function payment(price1, price2) {
  let totalBill = price1 + price2;
  return totalBill;
}

const payableAmount = payment(200, 300);
console.log(payableAmount);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function isOdd(number) {
  if (number % 2 == 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));
console.log(isOdd(5));
