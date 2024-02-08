/*function signature/sample */
function calculateMoney(ticketSale) {
  // You have to write your code here

  if (0 <= ticketSale) {
    return ticketSale * 120 - (500 + 8 * 50);
  } else {
    return "Invalid Number";
  }
}

// console.log(calculateMoney(93));
