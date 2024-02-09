function monthlySavings(arr, livingCost) {
  // You have to write your code here
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalIncome = arr.reduce((sum, value) => sum + value, 0);
  let tax = arr
    .filter((payment) => payment >= 3000)
    .reduce((sum, payment) => sum + payment * 0.2, 0);
  const savings = totalIncome - tax - livingCost;

  return savings >= 0 ? savings : "earn more";
}

// console.log(monthlySavings([1000, 2000, 2500], 5000));
