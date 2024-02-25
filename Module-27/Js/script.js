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
  //   hide and show the section by there ID
  hideElement("home");
  hideElement("score");
  showElement("playground");
  // update the score for new player

  //   gaming function
  continueGame();
}
