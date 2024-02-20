function continueGame() {
  // generate a random alphabet
  let alphabet = getRandomAlphabet();
  console.log(alphabet);
}

function play() {
  //   hide the home section
  let home = document.getElementById("home");
  home.classList.add("hidden");
  // show the playground section
  let playground = document.getElementById("playground");
  //   console.log(playground.classList);
  playground.classList.remove("hidden");

  //   gaming function
  continueGame();
}

function getRandomAlphabet() {
  let alphabetString = "abcdefghijklmnopqrstuvwxyz";
  let alphabets = alphabetString.split("");
  //   random alphabet
  let randomAlphabet = Math.random() * 25;
  let index = Math.round(randomAlphabet);
  let alphabet = alphabets[index];
  return alphabet;
}
