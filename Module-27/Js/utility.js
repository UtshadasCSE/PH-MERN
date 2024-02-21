// This function will help hide element
function hideElement(id) {
  let hiddenIt = document.getElementById(id);
  hiddenIt.classList.add("hidden");
}
// This function will show element
function showElement(id) {
  let showIt = document.getElementById(id);
  showIt.classList.remove("hidden");
}

// generate alphabet randomly

function getRandomAlphabet() {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let randomAlphabet = Math.round(Math.random() * alphabets.length);
  return alphabets[randomAlphabet];
}
// Display this random letter on Artboard
// function DisplayAlphabet() {
//   let displayLetter = document.getElementById("screenTV");
//   displayLetter.innerText = ;
// }
function getKbdValue(id) {
  let kbdValue = document.getElementsByClassName("kbd");
  console.log(kbdValue.value);
}
function addBgColor(id) {
  let addBg = document.getElementById(id);
  addBg.classList.add("bg-orange-500");
}
function remdBgColor(id) {
  let remBg = document.getElementById(id);
  remBg.classList.remove("bg-orange-500");
}

function handleKeyboardButton(event) {
  let audio = new Audio("ss.mp3");
  audio.play();
  let playerPressed = event.key;
  let displayAlphabet = document.getElementById("screenTV");
  let currentAlphabet = displayAlphabet.innerText;
  let expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(expectedAlphabet, playerPressed);
  if (expectedAlphabet == playerPressed) {
    console.log("You got points");
    remdBgColor(expectedAlphabet);
    continueGame();
  } else {
    console.log("You Lose");
  }
}

document.addEventListener("keyup", handleKeyboardButton);
