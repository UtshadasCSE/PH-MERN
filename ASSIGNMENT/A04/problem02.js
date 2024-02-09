function checkName(name) {
  // You have to write your code here
  if (typeof name !== "string") {
    return "invalid";
  }
  let lastLetter = name.slice(-1).toLowerCase();

  if (
    lastLetter == "a" ||
    lastLetter == "y" ||
    lastLetter == "i" ||
    lastLetter == "e" ||
    lastLetter == "o" ||
    lastLetter == "u" ||
    lastLetter == "w"
  ) {
    return "Good Name";
  } else if (name == 0 && name == 9) {
    return "invalid";
  } else {
    return "Bad Name";
  }
}

console.log(checkName("RAFEE"));
