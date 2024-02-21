function continueGame() {
  let displayLetter = document.getElementById("screenTV");
  // generate a random alphabet
  let alphabet = getRandomAlphabet();
  displayLetter.innerText = alphabet;
  console.log(alphabet);
  //get kbd value
  getKbdValue("kbd");
  addBgColor(alphabet);
}

function play() {
  //   hide the home section
  hideElement("home");
  // show the playground section
  showElement("playground");
  //   gaming function
  continueGame();
}
