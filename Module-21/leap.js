let year = 2023;
function checkLeapYear(year) {
  if (year % 100 !== 0 && year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkLeapYear(year));
